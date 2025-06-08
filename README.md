# PayFlo - Invoice Tracker
https://github.com/user-attachments/assets/f9d25357-3f78-4e90-bf68-5a63e74df69a


## 📜 Project Description

PayFlo is a full-stack invoice tracker application designed to help businesses manage and track their invoices efficiently. The application has a **React.js** frontend built with **Material UI** components for a clean, responsive user interface. On the backend, **Spring Boot** and **Hibernate** handle the API logic and database interactions, with data stored in a **MySQL** database. Users can create, view, and mark invoices as completed, all while ensuring the data remains securely stored.

The application is fully responsive, providing an optimized experience on desktops, tablets, and mobile devices.

## 🚀 Features

- **Add New Invoice**: Allows users to input vendor name, product name, and invoice amount.
- **View Invoices**: Displays a list of all invoices created with the option to mark them as completed.
- **Responsive Design**: Fully responsive UI that works seamlessly across all devices (desktop, tablet, mobile).
- **Data Storage**: All invoices are stored securely in a **MySQL** database.
- **User-Friendly Interface**: Built with **React.js** and **Material UI** to ensure a smooth and intuitive user experience.

## ⚙️ Tech Stack

- **Frontend**:  
  - React.js  
  - Material UI  
  - JavaScript (ES6+)

- **Backend**:  
  - Spring Boot
  - Hibernate ORM
  - JDBC


- **Database**:  
  - MySQL

## 💻 Clone and Run

### Prerequisites
- JDK 11+ for Spring Boot backend
- Node.js and npm for React frontend
- MySQL database setup

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/payflo-invoice-tracker.git
   cd payflo-invoice-tracker

2. **Configure the MySQL database connection**:
   Open the `src/main/resources/application.properties` file and configure the MySQL connection settings (username, password, and database name).
   Example configuration:
   ```
     spring.datasource.url=jdbc\:mysql://localhost:3306/payflo_db
     spring.datasource.username=root
     spring.datasource.password=root
     spring.jpa.hibernate.ddl-auto=update
     spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

3. **Run the Spring Boot application**:
   This will start the backend server on http://localhost:8080.
   ```
   ./mvnw spring-boot\:run

## 📬 Contact

If you have any questions, feedback, or would like to connect regarding this project or anything else, feel free to reach out:

- **Email**: [nilanchal.r.panda@gmail.com](mailto:nilanchal.r.panda@gmail.com)
- **LinkedIn**: [Nilanchala Panda](https://www.linkedin.com/in/nilanchal-panda/)

Looking forward to connecting with you!
