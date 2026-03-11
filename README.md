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

## Future Improvements

* Task status toggle (Pending / Completed)
* User authentication
* Due dates for tasks
* Deployment using cloud services

---

## Author

Bhagat Singh

This project was developed as part of an assignment to demonstrate full-stack development using the MERN stack.

