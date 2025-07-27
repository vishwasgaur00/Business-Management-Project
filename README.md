# BizzFlow – Business Management System (React + Vite)

BizzFlow is a modern, role-based business management system built using React and Vite.  
It features a unified login system for Owners and Employees, each with their own personalized dashboard and controls.

---
## LIVE DEMO
https://business-management-model.vercel.app/login

## 🚀 Features

- 🔐 Secure role-based login (Owner & Employee)
- 👑 Owner Dashboard: Business metrics, inventory, revenue, alerts
- 👷 Employee Dashboard: Tasks, shifts, attendance, announcements
- 🎨 Clean, responsive UI for both roles
- ⚡ Built using React + Vite for lightning-fast performance

---

## 🔑 Valid Login Credentials

Use the following credentials on the login page:

| Role     | Email                    | Password   |
|----------|--------------------------|------------|
| Owner    | `owner@bizzflow.com`     | `Own@123`  |
| Employee | `employee1@bizzflow.com` | `Emp@123`  |

> These are demo accounts for testing role-based access and redirection.

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm (comes bundled with Node.js)

---

### 📦 Installation

```bash
git clone https://github.com/vishwasgaur00/Business-Management-Project.git
cd business-management-system
npm install
npm run dev
```

Once the dev server starts, visit:

👉 **App Link:** https://business-management-model.vercel.app

Login with the above credentials and you'll be redirected automatically to the appropriate dashboard based on your role.

---

## 📁 Project Structure (Simplified)

```
src/
  components/
  context/
  pages/
    login/
    owner/
    employee/
  App.jsx
  main.jsx
```

---

## 🧠 How It Works

- User logs in via the login page using role-specific credentials
- App checks the email & password combination
- If valid, redirects user to `/owner/dashboard` or `/employee/dashboard`
- Unauthorized login attempts show an error

---

## 🛠️ Tech Stack

- React + Vite
- React Router DOM
- Context API (optional future upgrade)
- Pure CSS styling

---

## 📜 License

MIT – Free to use and modify with credit.

