# Contributing to URL Shortener

Thank you for your interest in contributing to the URL Shortener project! Your help is greatly appreciated. Please follow the guidelines below to ensure a smooth contribution process.

## Getting Started

1. **Fork the repository** and clone it to your local machine:
    ```bash
    git clone https://github.com/AkramHossain0/URL-Shortener.git
    cd URL-Shortener
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    - Copy `.env.example` to `.env` (or create `.env` if not present).
    - Add your MongoDB connection string and desired port:
      ```
      MONGODB_URI=your_mongodb_connection_string
      PORT=3000
      ```

4. **Run the project locally:**
    ```bash
    npm run dev
    ```

## How to Contribute

- **Bug Reports:**  
  Open an issue describing the bug, steps to reproduce, and expected behavior.

- **Feature Requests:**  
  Open an issue describing the feature and its use case.

- **Pull Requests:**  
  1. Create a new branch from `main`:
      ```bash
      git checkout -b feature/your-feature-name
      ```
  2. Make your changes and add tests if applicable.
  3. Ensure code style and formatting are consistent.
  4. Commit your changes with a descriptive message.
  5. Push your branch and open a pull request on GitHub.

## Code Style

- Use [ESLint](https://eslint.org/) conventions.
- Use 2 spaces for indentation.
- Use `camelCase` for variables and functions.
- Use `PascalCase` for classes and models.
- Write clear and concise commit messages.

## Testing

- Add unit or integration tests for new features or bug fixes.
- Ensure all tests pass before submitting a pull request.

## Project Structure

```
api/            # API route definitions
controllers/    # Business logic for URL operations
db/             # Database connection logic
model/          # Mongoose schemas
views/          # EJS templates for frontend
server.js       # Application entry point
```

## Reporting Security Issues

If you discover a security vulnerability, please email [md.akramhossainjisan@gmail.com](mailto:md.akramhossainjisan@gmail.com) instead of creating a public issue.

## License

By contributing, you agree that your contributions will be licensed under the [Apache 2.0 License](LICENSE).

---

Thank you for helping make URL Shortener better!