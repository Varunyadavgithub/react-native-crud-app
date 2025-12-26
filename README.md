# 📦 Inventory Management App (React Native)

A simple **Inventory Management mobile application** built with **React Native**.  
This app helps track items, monitor low stock, and manage inventory with add, edit, and delete functionality.

This project was created as a **first React Native app** to practice core concepts like state management, conditional rendering, and list handling.

---

## ✨ Features

- 📋 View all inventory items
- ⚠️ Low stock filter (items with stock < 20)
- ➕ Add new inventory items
- ✏️ Edit existing items
- 🗑️ Delete items
- 🎨 Visual highlighting for low-stock items

---

## 🧠 Screens

### 🏠 Home (Dashboard)
- Navigation between:
  - **All Items**
  - **Low Stock**
  - **Create Item**
- Manages the inventory state

### 📋 All Items
- Displays inventory using `FlatList`
- Highlights low stock items in red

### ➕ Create Item
- Add new items
- Edit existing items
- Delete items
- View all items with action buttons

---

## 🛠️ Tech Stack

- **React Native**
- **JavaScript (ES6)**
- **React Hooks (`useState`)**
- **FlatList**

---

## 📂 Project Structure

```

App.jsx
src/
└── screens/
├── Home.jsx
├── AllItems.jsx
└── Create.jsx

````

---

## 🚀 Getting Started

> Make sure you have completed the official React Native environment setup.

👉 https://reactnative.dev/docs/environment-setup

---

## ▶️ Run the App

### 1️⃣ Install Dependencies

```sh
npm install
````

### 2️⃣ Start Metro

```sh
npm start
```

### 3️⃣ Run on Device / Emulator

#### Android

```sh
npm run android
```

#### iOS

```sh
npm run ios
```

---

## 📚 What I Learned

* Managing state using `useState`
* Passing data via props
* Conditional rendering in React Native
* Using `FlatList` efficiently
* Basic UI styling

---

## 🧑‍💻 Author

Built by **Varun Yadav**

---

## 📄 License

This project is open-source and available for learning and personal use.