terraform {
  required_providers {
    neon = {
      source = "kislerdm/neon"
    }
  }
}

provider "neon" {
  api_key = var.neon_api_key
}

# Create a Neon project for user management
resource "neon_project" "user_management_project" {
  name                      = "user-management-project"
  history_retention_seconds = 86400
}

# Create a Neon branch for the user management project
resource "neon_branch" "user_management_branch" {
  project_id = neon_project.user_management_project.id
  name       = "user-management-branch"
}

# Create an endpoint for the branch
resource "neon_endpoint" "user_management_endpoint" {
  project_id = neon_project.user_management_project.id
  branch_id  = neon_branch.user_management_branch.id
  type       = "read_write"
  
  autoscaling_limit_min_cu = 1
  autoscaling_limit_max_cu = 1
}

# Create a Neon role for the user management project
resource "neon_role" "user_management_role" {
  project_id = neon_project.user_management_project.id
  branch_id  = neon_branch.user_management_branch.id
  name       = "user-management-role"
  
  depends_on = [neon_endpoint.user_management_endpoint]
}

# Create SQL script to define tables
resource "local_file" "init_sql" {
  filename = "${path.module}/init.sql"
  content  = <<-EOF
    -- Create Users Table (if it doesn't exist)
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    -- Create Preferences Table
    CREATE TABLE IF NOT EXISTS preferences (
        id SERIAL PRIMARY KEY,
        user_id INT REFERENCES users(id) ON DELETE CASCADE,
        preference_key VARCHAR(100) NOT NULL,  
        preference_value VARCHAR(255) NOT NULL,  
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE (user_id, preference_key)
    );

    -- Create Notifications Table
    CREATE TABLE IF NOT EXISTS notifications (
        id SERIAL PRIMARY KEY,
        user_id INT REFERENCES users(id) ON DELETE CASCADE,
        notification_text TEXT NOT NULL,
        is_read BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
EOF
}

# Wait for the endpoint to be ready
resource "null_resource" "wait_for_endpoint" {
  depends_on = [neon_endpoint.user_management_endpoint]

  provisioner "local-exec" {
    command = "sleep 30"  # Wait for 30 seconds to ensure endpoint is ready
  }
}

# Initialize the database schema
resource "null_resource" "initialize_database" {
  depends_on = [null_resource.wait_for_endpoint]

  # Create and initialize tables in the default database
  provisioner "local-exec" {
    command = <<EOT
      PGPASSWORD=${var.db_password} psql \
        --host=${var.db_host} \
        --port=${var.db_port} \
        --dbname="neondb" \
        --username=${var.db_username} \
        --set=sslmode=require \
        -f ${local_file.init_sql.filename}
    EOT
  }

  # Add error handling
  triggers = {
    always_run = "${timestamp()}"
  }
}