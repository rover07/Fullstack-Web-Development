# 🎟️ Ticket Booking System (Java-Based CLI + Backend)

This project is a **Java-based Ticket Booking System**, created to strengthen **Object-Oriented Programming (OOP)** skills while implementing **real-world functionalities** like user authentication, train search, ticket booking, and cancellation.
It draws inspiration from IRCTC’s backend structure and is built with a focus on **clean architecture**, **secure authentication**, and **scalable data handling**.

Special thanks to **Lovepreet Singh** and **Prabhat Singh** for their tutorials and open-source projects that inspired this system.

---

## 🚀 Features

### 👥 User Management

* 🔐 **Sign Up & Login** — Secure authentication with password encryption
* 🧾 **Session Handling** — Maintain user state during booking

### 🚆 Train Operations

* 🔍 **Search Trains** — Find trains between selected stations
* 🎫 **Book & Cancel Tickets** — Manage your reservations easily
* 💺 **Seat Availability** — Check available seats before booking

### 🗃️ Data Management

* 💾 **Data Persistence** — Store user, train, and booking data
* 🧹 **Auto Ticket Cleanup** — Automatically delete expired tickets

---

## 🛠️ Technologies Used

| Category       | Tools / Libraries             |
| -------------- | ----------------------------- |
| **Language**   | Java                          |
| **Frameworks** | Java Servlets / JDBC (MySQL)  |
| **Server**     | Apache Tomcat                 |
| **Build Tool** | Gradle                        |
| **Concepts**   | OOP, Collections, Streams API |
| **Security**   | BCrypt password hashing       |

---

## ⚙️ Setup & Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/TicketBookingSystem.git
cd TicketBookingSystem
```

### Step 2: Configure Database (if using JDBC)

* Create a MySQL database (e.g., `ticketdb`)
* Update DB credentials in your Java code or config file:

  ```java
  url = "jdbc:mysql://localhost:3306/ticketdb";
  user = "root";
  password = "your_password";
  ```

### Step 3: Build the Project

```bash
./gradlew build
```

### Step 4: Run the Application

For CLI version:

```bash
./gradlew run
```

For Servlet version:

* Build `.war` file and deploy to **Apache Tomcat**
* Visit: [http://localhost:8080/ticketapp](http://localhost:8080/ticketapp)

---

## 🧭 How to Use

1️⃣ **Sign Up** → Create your account
2️⃣ **Login** → Securely access your dashboard
3️⃣ **Search Trains** → Enter source and destination
4️⃣ **View Seats** → Check availability before booking
5️⃣ **Book Tickets** → Confirm and receive your ticket (email integration optional)
6️⃣ **Cancel Booking** → Cancel using Ticket ID
7️⃣ **Exit** → Close application safely

---

## 📂 Project Structure

```
app/
 ├── src/
 │   └── main/
 │       ├── java/
 │       │   └── org/
 │       │       └── ticketapp/
 │       │           ├── App.java                # Entry point / Server init
 │       │           ├── entities/
 │       │           │   └── User.java           # Entity classes
 │       │           ├── services/
 │       │           │   └── BookingService.java # Business logic
 │       │           └── utils/
 │       │               └── DBUtils.java        # Helper / DB functions
 │       └── resources/                          # Config files
 └── build.gradle
```

---

## 🏗️ Future Enhancements

* 🖥️ **GUI Integration** — JavaFX or Web-based interface
* 🧩 **Microservice Architecture** — Modularize booking, user, and train services
* 💬 **Email Notifications** — Auto-send ticket confirmation emails
* 🛡️ **Admin Panel** — Manage train schedules and users

---

## 👨‍💻 Author

**Vaibhav Chauhan**
📧 For queries, suggestions, or contributions, feel free to open an issue or pull request.

---

## ⭐ Acknowledgements

* **Lovepreet Singh** — For guiding Java OOP fundamentals
* **Prabhat Singh** — For IRCTC backend architecture inspiration

---
