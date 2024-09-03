# Chat App - Simple 🗣️

This is a simple chat application built with Next.js, React, and TypeScript. It allows users to enter their name and send messages, with a simulated "BOT" user responding. 

## Features ✨

* **User Input:** Users can enter their name and send messages.
* **Real-time Chat:** Messages are displayed in real-time in the chat window.
* **BOT Interaction:** A simulated "BOT" user echoes back messages.

## Technologies Used 💻

* **Next.js:** A React framework for building server-side rendered and static web applications.
* **React:** A JavaScript library for building user interfaces.
* **TypeScript:** A typed superset of JavaScript that adds static typing.
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development.

## Installation and Usage 🚀

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/chat-simple.git
   ```

2. **Install dependencies:**
   ```bash
   cd chat-simple
   npm install 
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:3000`.

## Project Structure 📂

* **components:** Contains the React components for the chat application (Chat, NameInput, ChatMessages, ChatInput).
* **contexts:** Contains the React context providers for managing chat messages and user data (ChatContext, UserContext).
* **reducers:** Contains the reducer function for managing the chat state (chatReducer).
* **types:** Contains the TypeScript type definitions for the application (Message).
* **pages:** Contains the Next.js pages (index.js).

## Future Improvements 💡

* **Backend Integration:** Integrate with a backend service for persistent message storage and real-time communication.
* **User Authentication:** Add user authentication to identify and manage users.
* **Enhanced UI/UX:** Improve the user interface and experience with additional features and styling.

## Contributing 🤝

Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request. 