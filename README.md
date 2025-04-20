
---

### **URL Shortener**
A modern URL shortening service built with Node.js, Express, and MongoDB.

### **Features**
- Instantly create shortened URLs
- Copy shortened links to clipboard
- Track click counts for each shortened URL
- Responsive design for both mobile and desktop

### **Tech Stack**
- **Frontend:** HTML, CSS, JavaScript, EJS templates
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Additional Libraries:** nanoid, dotenv, cors

### **Project Structure**
```
.env                  # Environment variables
server.js               # Application entry point
package.json          # Project dependencies
api/
  shortUrl.js         # API routes for URL operations
controllers/
  shortUrl.js         # Business logic for URL shortening
db/
  db.js               # Database connection
model/
  shortUrl.js         # Mongoose schema for ShortUrl
views/
  index.ejs           # server frontend template
```

### **Installation**
1. Clone the repository:
    ```bash
    git clone https://github.com/AkramHossain0/URL-Shortener
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory with the following content:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    PORT=3000
    ```

### **Usage**

- **Development mode:**
    ```bash
    npm run dev
    ```
    This starts the application in development mode.

- **Production mode:**
    ```bash
    npm start
    ```
    The application will run on `http://localhost:3000` (or the port specified in your `.env` file).

### **How It Works**
1. Enter a long URL in the input field on the homepage.
2. Click the "Shorten" button.
3. The system returns a short URL (e.g., `http://localhost:3000/AbCdEfG`).
4. When someone visits the short URL, they are redirected to the original long URL.
5. Each visit increases the click counter for that URL.

### **API Endpoints**
- **POST /api/shortUrls**: Create a new shortened URL
    - **Request body:**
    ```json
    {
      "full": "https://example.com/long-url"
    }
    ```
    - **Response:**
    ```json
    {
      "full": "https://example.com/long-url",
      "short": "AbCdEfG",
      "clicks": 0
    }
    ```

- **GET /:shortUrl**: Redirect to the original URL and increment the click counter.

### **License**
© 2025 URL Shortener. All rights reserved.

### **Contact**
- Email: [md.akramhossainjisan@gmail.com](mailto:md.akramhossainjisan@gmail.com)

---
