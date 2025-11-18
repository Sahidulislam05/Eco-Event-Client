# 🌍 Eco Event – Social Development Platform

[![Live Site](https://img.shields.io/badge/Live%20Demo-Netlify-blue?style=for-the-badge&logo=netlify)](https://eco-event-social-development.netlify.app/)  
[![Client Repo](https://img.shields.io/badge/Client%20Repo-GitHub-black?style=for-the-badge&logo=github)](#)  
[![Server Repo](https://img.shields.io/badge/Server%20Repo-GitHub-gray?style=for-the-badge&logo=github)](#)

---

## 🧩 Project Overview

**Eco Event** is a community-driven social development platform that empowers individuals to **create**, **join**, and **track** social service events in their local area.  
From **tree plantation 🌳** to **road cleaning 🧹**, this platform connects volunteers and organizers to bring positive environmental and social change to their community.

---

## 🚀 Key Features

- 🪴 **Create & Manage Events:** Logged-in users can create events, update, and manage their own created ones.
- 🤝 **Join Events:** Users can view event details and join with a single click.
- 🔍 **Filter & Search:** Find events by name or type (Cleanup, Plantation, Donation, etc.) using MongoDB queries.
- 🌓 **Light / Dark Theme Toggle:** Switch between light and dark modes for a personalized look.
- 🔐 **Firebase Authentication:** Secure login/register system with Google login support.
- 🗓️ **Date Validation:** Only future dates allowed using `react-datepicker`.
- 🎨 **Modern & Responsive Design:** Fully responsive UI with elegant animations using **Framer Motion**.
- 🔔 **Interactive Notifications:** Toasts and SweetAlerts for feedback (no default browser alerts).

---

## 🧰 Tech Stack

### ⚙️ Frontend

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38BDF8?logo=tailwind-css&logoColor=white&style=for-the-badge)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black&style=for-the-badge)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-EF007C?logo=framer&logoColor=white&style=for-the-badge)

### 🗄️ Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge)
![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white&style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white&style=for-the-badge)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge)

---

## 🧭 Pages & Routes

| Page             | Type    | Description                                               |
| ---------------- | ------- | --------------------------------------------------------- |
| `/`              | Public  | Home page with banner, features, gallery, and newsletter  |
| `/login`         | Public  | Login with email/password or Google account               |
| `/register`      | Public  | Register with password validation                         |
| `/events`        | Public  | View all upcoming events (past ones hidden automatically) |
| `/event/:id`     | Public  | Event details page with "Join Event" option               |
| `/create-event`  | Private | Create new event (only for logged-in users)               |
| `/joined-events` | Private | View events joined by the logged-in user                  |
| `/manage-events` | Private | Manage or update your own created events                  |

---

## 🧠 Core Functionalities

✅ Email/Password Authentication  
✅ Google Login Integration  
✅ Private Route Protection  
✅ Create / Update / Join Event System  
✅ Search & Filter (MongoDB)  
✅ Toast/SweetAlert2 Notification  
✅ Date Validation with react-datepicker  
✅ Framer Motion Animations  
✅ Spinner for Data Loading  
✅ Light & Dark Theme Toggle

---

## 🧪 Validation Rules

### **Register Page**

- Password must include:
  - One **Uppercase Letter**
  - One **Lowercase Letter**
  - **At least 6 characters**
- Errors shown via **SweetAlert2** or **React Hot Toast**
- Success toast after login/register

### **Event Form**

- All input fields required (title, type, image URL, location, description)
- Event date must be a **future date**
- On success: success toast + redirect to Upcoming Events

---

## 🧩 Extra Features

✔️ **Event Filter & Search (MongoDB)**  
✔️ **Theme Customization (Dark/Light)**  
✔️ **Framer Motion Animations**  
✔️ **Loading Spinner**  
✔️ **JWT Authorization with Firebase Admin SDK**

---

## 📦 Dependencies / Libraries

- `react-router-dom` → Routing  
- `firebase` → Authentication & Firestore  
- `react-datepicker` → Event date selection  
- `sweetalert2` → Alert notifications  
- `react-hot-toast` → Toast notifications  
- `framer-motion` → Animations  
- `axios` → HTTP requests  

---

## 💻 Run Locally

1. **Clone the repositories**  
```
git clone https://github.com/Sahidulislam05/Eco-Event-Client   
git clone https://github.com/Sahidulislam05/Eco-Event-Server
cd  Eco-Event-Client
npm install
cd ../Eco-Event-Server
npm install

```

## 📱 Responsiveness

Fully optimized and responsive for:

- 💻 **Desktop**
- 📊 **Tablet**
- 📱 **Mobile**

---

## 💡 Design & Inspiration

Design inspiration and assets taken from:

- [uiverse.io](https://uiverse.io/)
- [devmeetsdevs.com](https://devmeetsdevs.com/)
- [ThemeForest](https://themeforest.net/)
- [Codecanyon](https://codecanyon.net/)

Special care taken for:

- Consistent headings & font sizes
- Equal card sizes
- Uniform spacing and alignment
- Modern grid layouts

---

## 👨‍💻 Developer Info

**👤 Developed by:** _Sahidul Islam_  
🎓 _Diploma in Computer Science & Technology_  
🏫 _Tangail Polytechnic Institute (TPI)_  
💻 _President, TPI Computer Club_  
🚀 _Passionate about MERN Stack & AI Integration_

---

## 🖥️ Deployment

| Platform    | Purpose        | URL                                                                                                    |
| ----------- | -------------- | ------------------------------------------------------------------------------------------------------ |
| **Netlify** | Client Hosting | [https://eco-event-social-development.netlify.app/](https://eco-event-social-development.netlify.app/) |
| **Vercel**  | Server Hosting | *https://social-eco-event-server.vercel.app/*                                                          |

---

## 📦 GitHub Commit Summary

- **Client Side:** 15+ meaningful commits
- **Server Side:** 8+ meaningful commits
- Each commit message is feature-specific and well-documented

---

## 🏁 Conclusion

> **Eco Event** is a complete full-stack MERN web application that encourages people to engage in social and environmental development activities.  
> It demonstrates a modern approach to event management with real-world **CRUD operations**, **authentication**, **data validation**, and **responsive UI design**.

⭐ _If you like this project, please give it a star on GitHub!_ ⭐

---
