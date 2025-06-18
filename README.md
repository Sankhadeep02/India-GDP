# 📊 India GDP Timeline Visualization

An interactive React-based data visualization project that displays India's GDP (Gross Domestic Product) over time using a bar chart. Built using **React**, **Material UI**, and **Recharts**, with real GDP data fetched from the **World Bank API**.

---
## ⚡ Live Preview
 [View the Live Site](https://india-gdp.vercel.app/)

---

## 🚀 Features

- 📅 GDP data displayed along a timeline (by year)
- 📈 Interactive bar chart with custom tooltips
- 📦 Fetches real-time data from the World Bank API
- 🎨 Clean and responsive UI with Material UI
- 🧠 Beginner-friendly project structure

---

## 🛠️ Tech Stack

- **React** (Create React App)
- **Material UI** for styling and layout
- **Recharts** for data visualization
- `fetch()` for API calls

---

## 📡 Data Source

- 📊 World Bank Open Data API  
  GDP Data Endpoint (example):  
  ```
    https://api.worldbank.org/v2/country/IN/indicator/NY.GDP.MKTP.CD?format=json
  ```

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── GDPChart.jsx         # Recharts bar chart component
│   ├── CustomTooltip.jsx    # Custom tooltip design
│
├── services/
│   └── api.js               # Fetching GDP data from World Bank API
│
├── App.jsx                  # Main entry component
├── index.js                 # ReactDOM rendering
└── index.css                # Global styles
```

---

## 📥 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/india-gdp-visualization.git
cd India-GDP
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm start
```

The app will be available at `http://localhost:3000`.

---

## 🧠 Learnings

This project helped me understand:
- Working with external APIs (World Bank)
- Using `Recharts` for real-time data visualization
- Custom tooltip creation and component styling
- Handling data flow and props in React

---

## 🙌 Acknowledgements

- [World Bank Open Data](https://data.worldbank.org/)
- [Recharts Documentation](https://recharts.org/)
- [Material UI](https://mui.com/)

---
## ✍️ Author
Done with ❤️ by Sankhadeep

