# services data nested dictionary

workshop_data = {
    "Personal Financial Planning Sessions": {
        "leader": "Mike Watson",
        "session_type": "one-to-one",
        "schedules": [
            {
                "date": "2024-11-01",
                "time": "09:00 AM",
                "spots_available": 1
            },
            {
                "date": "2024-11-01",
                "time": "02:00 PM",
                "spots_available": 1
            },
            {
                "date": "2024-11-03",
                "time": "11:00 AM",
                "spots_available": 0
            },
            {
                "date": "2024-11-03",
                "time": "03:00 PM",
                "spots_available": 1
            },
            {
                "date": "2024-11-05",
                "time": "10:00 AM",
                "spots_available": 0
            }
        ]
    },
    "Investment_Portfolio Reviews": {
        "leader": "Jane Ross",
        "session_type": "one-to-one",
        "schedules": [
            {
                "date": "2024-11-03",
                "time": "10:00 AM",
                "spots_available": 0
            },
            {
                "date": "2024-11-03",
                "time": "01:00 PM",
                "spots_available": 0
            },
            {
                "date": "2024-11-06",
                "time": "02:00 PM",
                "spots_available": 1
            },
            {
                "date": "2024-11-06",
                "time": "04:00 PM",
                "spots_available": 0
            },
            {
                "date": "2024-11-08",
                "time": "12:00 PM",
                "spots_available": 1
            }
        ]
    },
    "Financial Literacy Workshop": {
        "leader": "Michael Johnson",
        "session_type": "group",
        "schedules": [
            {
                "date": "2024-11-05",
                "time": "11:00 AM",
                "spots_available": 20
            },
            {
                "date": "2024-11-06",
                "time": "03:00 PM",
                "spots_available": 15
            }
        ]
    },
    "Tax Planning Sessions": {
        "leader": "Sarah Lee",
        "session_type": "one-to-one",
        "schedules": [
            {
                "date": "2024-11-07",
                "time": "08:00 AM",
                "spots_available": 1
            },
            {
                "date": "2024-11-07",
                "time": "12:00 PM",
                "spots_available": 1
            },
            {
                "date": "2024-11-09",
                "time": "09:30 AM",
                "spots_available": 1
            },
            {
                "date": "2024-11-09",
                "time": "01:00 PM",
                "spots_available": 0
            },
            {
                "date": "2024-11-11",
                "time": "03:00 PM",
                "spots_available": 0
            }
        ]
    },
    "Market Outlook Seminars": {
        "leader": "David Brown",
        "session_type": "group",
        "schedules": [
            {
                "date": "2024-11-09",
                "time": "10:00 AM",
                "spots_available": 25
            },
            {
                "date": "2024-11-10",
                "time": "04:00 PM",
                "spots_available": 18
            }
        ]
    }
}

# Products Data (the keys are the employees that clients can schedule an appointment with to avail the product)

products_data = {
    "Personal Loans": [
        "Mitchell Stark",
        "David Smith"
    ],
    "Mortgages": [
        "Virat Kohli",
        "Kane Williamson"
    ],
    "Auto Loans": [
        "Martin Guptil",
        "Emily Clark"
    ],
    "Business Loans": [
        "James Wilson",
        "Olivia Evans"
    ],
    "Student Loans": [
        "George Miller",
        "Sophia Garcia"
    ],
    "Mutual Fund": [
        "Liam Harris",
        "Isabella Martinez"
    ],
    "Life Insurance": [
        "Ethan Thomas",
        "Charlotte Robinson"
    ],
    "Private Real Estate Funds": [
        "Jack Anderson",
        "Mia Lewis"
    ],
    "Checking Accounts": [
        "Lucas Walker",
        "Amelia Young"
    ],
    "Savings Accounts": [
        "Oliver King",
        "Harper Scott"
    ]
}

# employee data

employee_schedules = {
    "Mitchell Stark": {
        "product": "Personal Loans",
        "schedules": [
            {
                "date": "2024-11-01",
                "time": "09:00 AM",
                "availability": 1
            },
            {
                "date": "2024-11-02",
                "time": "01:00 PM",
                "availability": 0
            }
        ]
    },
    "David Smith": {
        "product": "Personal Loans",
        "schedules": [
            {
                "date": "2024-11-03",
                "time": "10:00 AM",
                "availability": 0
            },
            {
                "date": "2024-11-04",
                "time": "02:00 PM",
                "availability": 1
            }
        ]
    },
    "Virat Kohli": {
        "product": "Mortgages",
        "schedules": [
            {
                "date": "2024-11-05",
                "time": "11:00 AM",
                "availability": 0
            },
            {
                "date": "2024-11-06",
                "time": "03:00 PM",
                "availability": 0
            }
        ]
    },
    "Kane Williamson": {
        "product": "Mortgages",
        "schedules": [
            {
                "date": "2024-11-07",
                "time": "09:00 AM",
                "availability": 1
            },
            {
                "date": "2024-11-08",
                "time": "01:00 PM",
                "availability": 0
            }
        ]
    },
    "Martin Guptil": {
        "product": "Auto Loans",
        "schedules": [
            {
                "date": "2024-11-09",
                "time": "10:00 AM",
                "availability": 0
            },
            {
                "date": "2024-11-10",
                "time": "04:00 PM",
                "availability": 1
            }
        ]
    },
    "Emily Clark": {
        "product": "Auto Loans",
        "schedules": [
            {
                "date": "2024-11-11",
                "time": "11:00 AM",
                "availability": 1
            },
            {
                "date": "2024-11-12",
                "time": "03:00 PM",
                "availability": 0
            }
        ]
    },
    "James Wilson": {
        "product": "Business Loans",
        "schedules": [
            {
                "date": "2024-11-13",
                "time": "01:00 PM",
                "availability": 0
            },
            {
                "date": "2024-11-14",
                "time": "02:30 PM",
                "availability": 1
            }
        ]
    },
    "Olivia Evans": {
        "product": "Business Loans",
        "schedules": [
            {
                "date": "2024-11-15",
                "time": "09:00 AM",
                "availability": 1
            },
            {
                "date": "2024-11-16",
                "time": "04:00 PM",
                "availability": 0
            }
        ]
    },
    "George Miller": {
        "product": "Student Loans",
        "schedules": [
            {
                "date": "2024-11-17",
                "time": "10:00 AM",
                "availability": 0
            },
            {
                "date": "2024-11-18",
                "time": "02:00 PM",
                "availability": 0
            }
        ]
    },
    "Sophia Garcia": {
        "product": "Student Loans",
        "schedules": [
            {
                "date": "2024-11-19",
                "time": "11:00 AM",
                "availability": 1
            },
            {
                "date": "2024-11-20",
                "time": "03:00 PM",
                "availability": 0
            }
        ]
    },
    "Liam Harris": {
        "product": "Mutual Fund",
        "schedules": [
            {
                "date": "2024-11-21",
                "time": "09:30 AM",
                "availability": 1
            },
            {
                "date": "2024-11-22",
                "time": "01:00 PM",
                "availability": 0
            }
        ]
    },
    "Isabella Martinez": {
        "product": "Mutual Fund",
        "schedules": [
            {
                "date": "2024-11-23",
                "time": "10:00 AM",
                "availability": 1
            },
            {
                "date": "2024-11-24",
                "time": "02:30 PM",
                "availability": 0
            }
        ]
    },
    "Ethan Thomas": {
        "product": "Life Insurance",
        "schedules": [
            {
                "date": "2024-11-25",
                "time": "11:00 AM",
                "availability": 1
            },
            {
                "date": "2024-11-26",
                "time": "03:00 PM",
                "availability": 1
            }
        ]
    },
    "Charlotte Robinson": {
        "product": "Life Insurance",
        "schedules": [
            {
                "date": "2024-11-27",
                "time": "09:00 AM",
                "availability": 0
            },
            {
                "date": "2024-11-28",
                "time": "02:00 PM",
                "availability": 0
            }
        ]
    },
    "Jack Anderson": {
        "product": "Private Real Estate Funds",
        "schedules": [
            {
                "date": "2024-11-29",
                "time": "01:00 PM",
                "availability": 1
            },
            {
                "date": "2024-11-30",
                "time": "03:30 PM",
                "availability": 1
            }
        ]
    },
    "Mia Lewis": {
        "product": "Private Real Estate Funds",
        "schedules": [
            {
                "date": "2024-12-01",
                "time": "09:30 AM",
                "availability": 1
            },
            {
                "date": "2024-12-02",
                "time": "02:00 PM",
                "availability": 1
            }
        ]
    }
}
