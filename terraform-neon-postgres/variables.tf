variable "db_host" {
    description = "The database host (e.g., ep-royal-bush-a514j1r5.us-east-2.aws.neon.tech)"
    type        = string
}

variable "db_port" {
    description = "The database port"
    type        = number
    default     = 5432
}

variable "db_name" {
    description = "The database name"
    type        = string
}

variable "db_username" {
    description = "The database username"
    type        = string
}

variable "db_password" {
    description = "The database password"
    type        = string
}

variable "neon_api_key" {
    description = "API key for Neon"
    type        = string
}