# 🧩 Phurhard Backend Wizards — Stage 0 Task

## 📖 Description
This project is a simple **Express.js API** that returns my profile information along with a **dynamic cat fact** fetched from the [Cat Facts API](https://catfact.ninja/fact).  
It demonstrates API consumption, dynamic JSON responses, and clean backend structure using Node.js and Express.

---

## 🚀 Live Demo
**Base URL:**  
👉 [https://backend-wizard-profile.up.railway.app](https://backend-wizard-profile.up.railway.app)

**Endpoint:**  
```
GET /me
```

**Example:**  
[https://backend-wizard-profile.up.railway.app/me](https://backend-wizard-profile.up.railway.app/me)

---

## 🧾 Example Response
```json
{
  "status": "success",
  "user": {
    "email": "adorachigozieachumba@gmail.com",
    "name": "Chigozie Achumba",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-19T17:24:15.268Z",
  "fact": "While many parts of Europe and North America consider the black cat a sign of bad luck, in Britain and Australia, black cats are considered lucky."
}
```

---

## 🛠️ Tech Stack
- **Runtime:** Node.js  
- **Framework:** Express.js  
- **External API:** [Cat Facts API](https://catfact.ninja/fact)  
- **Environment Management:** dotenv  
- **Hosting Platform:** Railway  

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/AdoraAchumbz/backend-wizard-profile.git
cd backend-wizard-profile
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Create Environment File
Create a `.env` file inside a `config` folder:
```
PORT=5000
HOST=127.0.0.1
```

### 4️⃣ Start the Server
```bash
npm start
```

### 5️⃣ Test Locally
Visit:
```
http://127.0.0.1:5000/me
```

---

## 📦 Project Structure
```
backend-wizard-profile/
├── controllers/
│   └── me.js
├── config/
│   └── .env
├── utils/
│   └── sendEmail.js (example utility)
├── server.js
├── package.json
└── README.md
```

---

## ✅ Features
- Returns your profile data dynamically.
- Fetches random cat facts from an external API.
- Provides current UTC timestamp in ISO 8601 format.
- Well-structured, modular, and environment-configurable.
- Deployed successfully on Railway.

---

## 🧠 What I Learned
- How to consume and integrate external APIs.
- How to structure a Node.js/Express project properly.
- How to handle environment variables and deployment.
- How to host and test APIs on Railway.

---

## 🪄 Author
**👩🏽‍💻 Chigozie Achumba**  
📧 [adorachigozieachumba@gmail.com](mailto:adorachigozieachumba@gmail.com)  
🌐 [GitHub Profile](https://github.com/AdoraAchumbz)
