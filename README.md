# Fairhaven Yachts

Fairhaven Yachts is a responsive yacht brokerage website built with React.  
The website allows users to browse yacht listings with easy and intuitive navigation.

This project was designed and developed as a full front-end application using a real-world API (YachtWorld API) with an Express proxy server.

---

## Live Demo
👉 https://www.fairhavenyachts.com/
---

---

## Project Highlights

- Built a professional, production-ready website from design to deployment
- Identified a UX and SEO issue where users were leaving the site to view listings externally
- Suggested embedding yacht listings directly on the website to improve SEO and user retention
- Worked with YachtWorld customer support to obtain API access already included in the client’s monthly subscription
- Implemented a proxy server to securely handle API requests and avoid CORS issues

---

## Tech Decisions

### TanStack Query (React Query)

TanStack Query was used to handle data fetching, caching, and synchronization of server state.

**Why TanStack Query was used:**
- Caches yacht listings to prevent unnecessary refetching
- Shares cached data across pages for faster navigation
- Automatically manages loading and error states
- Refetches data in the background only when it becomes stale

**Benefits:**
- Automatic caching to reduce API calls
- Background refetching for fresh data
- Improved performance and user experience

---

## Features
- Browse yacht listings in a clean and modern UI
- Filter yachts by builder, class, year, price, and length
- Responsive design for desktop and mobile devices
- Fetch yacht listings from an external API
- Automatically refetch listings in the background when the data becomes stale

---

## Tech Stack
- React
- JavaScript 
- TanStack Query
- SCSS
- Express (proxy server)
- Heroku (deployment)
- Figma

---

## Figma Design
👉 https://www.figma.com/design/OttxsVRERgeRcKO2YDhRUl/Fairhaven-Yacht?node-id=91-240&t=gAnoRV6ehJkwThVE-1

---
## Installation & Setup

Follow the steps below to run the project locally.

### 1. Clone the repository
- Run the following command in your terminal:

  git clone https://github.com/trimakichan/fairhaven_yatchts.git
  
### 2. Navigate to the project folder
- Move into the project directory:

  cd fairhaven-yachts

### 3. Install frontend dependencies
- Install frontend packages:

  cd Frontend  
  npm install 

### 4. Install backend dependencies
- Navigate to the top folder and install packages:

  cd ..  
  npm install 
  
### 5. API configuration (backend)
This project uses the YachtWorld API through an Express proxy server.

The API base URL is configured in the backend:  
	API_BASE_URL="https://api.boats.com/inventory/search"

Note: A valid API key is required to successfully fetch data.  
API credentials are not included in this repository for security reasons.
  
### 6. Run the project

Make sure you are in the **root (top-level) project folder**, not inside the `frontend` folder.

From the root directory, run:

  npm run dev

This command uses `concurrently` to start:
- The Express server (API proxy)
- The React frontend development server

The frontend will be available at:
http://localhost:5173

### Notes
- Make sure Node.js is installed on your machine
- Do not commit the `.env` file
- The Express proxy server is used to handle API requests and avoid CORS issues
