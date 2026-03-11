# MERN Task Manager

## Project Overview

The MERN Task Manager is a full-stack web application that allows users to create, manage, and track tasks efficiently.
It is built using the MERN stack (MongoDB, Express.js, React, Node.js) and provides complete CRUD functionality with a clean dashboard UI.

This project demonstrates full-stack development skills including REST API development, database integration, frontend UI design, and client-server communication.

---

## Features

* Create new tasks
* View all tasks
* Update existing tasks
* Delete tasks
* Search tasks by title
* Dashboard UI using Tailwind CSS
* RESTful API architecture

---

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Version Control

* Git
* GitHub

---

## Project Architecture

This project follows a **MVC-inspired structure**:

### Model

Handles database schema and data operations.

```
backend/models/Task.js
```

### Controller

Contains the application logic and handles API requests.

```
backend/controllers/taskController.js
```

### Routes

Defines API endpoints.

```
backend/routes/taskRoutes.js
```

### View

Frontend interface built using React.

```
frontend/src/components
```

---

## Project Structure

```
task-manager
│
├── backend
│   ├── controllers
│   │   └── taskController.js
│   ├── models
│   │   └── Task.js
│   ├── routes
│   │   └── taskRoutes.js
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── TaskForm.js
│   │   │   └── TaskList.js
│   │   ├── api.js
│   │   └── App.js
│
└── README.md
```

---

## How to Run the Project

### 1. Clone the Repository

```
git clone https://github.com/Bhagatbawa/task-manager-mern.git
```

---

### 2. Run Backend

```
cd backend
npm install
node server.js
```

Server runs on:

```
http://localhost:5000
```

---

### 3. Run Frontend

```
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/tasks     | Get all tasks |
| POST   | /api/tasks     | Create a task |
| PUT    | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |

---
## ER Diagram

The application uses a simple data model centered around the **Task** entity.

```
+-----------------------+
|        Task           |
+-----------------------+
| _id                   |
| title                 |
| description           |
| status                |
| dueDate               |
| remarks               |
| createdOn             |
| updatedOn             |
| createdBy             |
| updatedBy             |
+-----------------------+
```

### Description

Each **Task** represents a unit of work that can be created, updated, searched, and deleted.

Primary key:

```
_id (MongoDB ObjectId)
```

Fields store task information including title, description, status, and timestamps.

---
## Data Dictionary

| Field       | Type     | Description                          |
| ----------- | -------- | ------------------------------------ |
| _id         | ObjectId | Unique identifier for task           |
| title       | String   | Task title                           |
| description | String   | Task description                     |
| status      | String   | Task state (Pending / Completed)     |
| dueDate     | Date     | Deadline for task                    |
| remarks     | String   | Additional task notes                |
| createdOn   | Date     | Timestamp when task was created      |
| updatedOn   | Date     | Timestamp when task was last updated |
| createdBy   | String   | User who created the task            |
| updatedBy   | String   | User who last modified the task      |

---
## Deployment Architecture

The application follows a **client-server architecture**.

```
User Browser
     │
     ▼
React Frontend (Port 3000)
     │
     ▼
Express Backend API (Port 5000)
     │
     ▼
MongoDB Database
```

### Explanation

* The **React frontend** provides the user interface.
* The frontend communicates with the backend using **REST API calls via Axios**.
* The **Node.js + Express backend** processes requests and handles business logic.
* **MongoDB** stores task data using a flexible NoSQL schema.

This architecture separates the **presentation layer**, **application logic**, and **data layer**, improving maintainability and scalability.

---

## Future Improvements

* Task status toggle (Pending / Completed)
* User authentication
* Due dates for tasks
* Deployment using cloud services

---

## Author

Bhagat Singh

This project was developed as part of an assignment to demonstrate full-stack development using the MERN stack.

