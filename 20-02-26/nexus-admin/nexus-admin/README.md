# Nexus Admin — User Management Dashboard

A professional, dark-themed admin panel built with **Vite + React + Tailwind CSS**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🛠 Tech Stack

- **Vite** — Fast build tool
- **React 18** — UI library with hooks
- **Tailwind CSS** — Utility-first styling
- **lucide-react** — Icon library

## 📁 Folder Structure

```
src/
 ├── components/
 │    ├── layout/
 │    │     ├── Header.jsx
 │    │     ├── Sidebar.jsx
 │    │     └── DashboardLayout.jsx
 │    ├── user/
 │    │     ├── UserForm.jsx
 │    │     ├── UserTable.jsx
 │    │     ├── SearchUser.jsx
 │    │     └── UserCard.jsx
 │    └── ui/
 │          ├── Button.jsx
 │          ├── Input.jsx
 │          └── Modal.jsx
 ├── pages/
 │    └── UserManagement.jsx
 ├── hooks/
 │    └── useUsers.js
 ├── App.jsx
 └── main.jsx
```

## ✅ Features

- ➕ **Add User** — Validated form with name, email, role, status
- 📋 **View Users** — Full responsive table with avatar initials
- ✏️ **Edit User** — Prefilled modal form
- 🗑️ **Delete User** — Instant removal with toast feedback
- 🔍 **Search User** — Search by User ID with card results
- 📊 **Stats Row** — Live counts for total, active, admins, pending
- 🎨 **Dark theme** — Slate-based SaaS aesthetic
- 📱 **Responsive** — Works on mobile, tablet, and desktop
