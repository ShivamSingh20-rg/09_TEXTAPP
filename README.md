# 📝 Taskflow - Full-Stack MERN CRUD Todo Application

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

## 📝 Description

**Taskflow** is a lightweight, responsive, full-stack Task Management web application built using the MERN Stack (MongoDB, Express.js, React, Node.js). The application serves as a robust demonstration of core **CRUD** operations (Create, Read, Update, Delete) interacting seamlessly across a client-side user interface and a secure, persistent server-side REST API. It features a clean design that allows users to seamlessly schedule, categorize, track, and update their daily objectives.

---

## ✨ Key Features

* **✨ Create:** Instantly add new tasks with dynamic fields like custom titles, descriptive descriptions, priority badges, and target due dates.
* **📖 Read:** Fetch and render all active entries on a beautiful dashboard directly from a remote MongoDB database.
* **✏️ Update:** Inline editing tools to adjust task copy or quickly toggle completion states (Mark as Complete / Pending).
* **🗑️ Delete:** Remove expired tasks with real-time state synchronization, instantly cleaning up the dashboard view.
* **🎨 Modern UI/UX:** Styled using beautiful layout principles featuring smooth animations, responsive sizing for mobile devices, and dark-mode compatibility.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Tailwind CSS, Axios (API requests), Context API
* **Backend:** Node.js, Express.js REST API
* **Database:** MongoDB (using Mongoose ODM)
* **DevOps & Tools:** Git, GitHub, Render (Hosting)

## 🏗️ Architecture Layout

The repository is cleanly split into two separate directories containing the frontend application and backend API respectively:

```text
.
├── client/          # Frontend React + Tailwind Application
│   ├── public/      # Static resources and assets
│   ├── src/         # React source files (components, views, styles)
│   └── package.json # Frontend scripts & dependencies
│
└── server/          # Backend Node.js + Express API
    ├── models/      # Mongoose Database schemas
    ├── routes/      # Express API endpoint controllers
    ├── server.js    # Application entry point
    └── package.json # Backend scripts & dependencies
