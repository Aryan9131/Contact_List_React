# Contact List React App
A simple React application that allows users to manage contacts. The app fetches contacts from the JSONPlaceholder API and allows adding, updating, and deleting contacts.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Features
Fetch Users: Fetch users from the JSONPlaceholder API and display them.
Add a Contact: Add a new contact to the app. A POST request is made to the API, and the new contact is added to the app state.
Update a Contact: Update an existing contact. A PUT request is made to the API to simulate an update operation.
Delete a Contact: Delete a contact from the app. A DELETE request is made to the API to simulate deletion.
Tech Stack
React (Frontend)
Redux Toolkit (State Management)
React Router (For navigation)
Axios (For making API calls)
CSS/Styled Components (For styling)

# Folder Structure
bash
/src
  /components
    - ContactList.jsx        # Component for displaying the list of contacts
    - ContactForm.jsx        # Form component for adding/updating contacts
    - ContactItem.jsx        # Component for each individual contact
  /features
    /contacts
      - contactsSlice.js      # Redux slice for managing contacts
  /api
    - api.js                 # API calls and axios instance
  App.js                      # Main component for rendering the app
  index.js                    # Entry point for the app
  /assets
    - /images                 # Store static images here
  /styles
    - /app.css                # Global styles
  /utils
    - helpers.js              # Utility functions (if needed)
  package.json                # Project dependencies and scripts

# How to Run the Project
Clone the repository:
bash
git clone https://github.com/your-username/contact-list-app.git
Install dependencies:

bash
cd contact-list-app
npm install
Run the app:

bash
npm start
The app will run on http://localhost:3000.

# Redux Toolkit Setup
This project uses Redux Toolkit for state management. The state is managed in the contactsSlice.js file located in the /features/contacts/ directory. The slice handles the following states:

contacts: Stores the list of contacts fetched from the API.
status: Keeps track of loading, error, and success states for fetching, adding, updating, and deleting contacts.
Example usage:
Fetching contacts: When the app loads, a fetchContacts async thunk is dispatched to retrieve contacts from the API.
Adding, Updating, and Deleting contacts: The app dispatches corresponding actions to modify the Redux state when performing these operations.

# API Calls
The app interacts with the JSONPlaceholder API to simulate adding, updating, and deleting contacts.
GET /users: Fetch all users.
POST /users: Add a new user.
PUT /users/{id}: Update an existing user.
DELETE /users/{id}: Delete a user.

Example of adding a contact:

const addContact = async (newContact) => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
    dispatch(addContactToState(response.data)); // Add to Redux state
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};
Running Tests
If you have written tests for your application, you can run them with:

bash
npm test
How to Host the Project
To host the project, you can use services like Vercel or Netlify. Follow the instructions on their respective websites for deploying a React application.

Code Structure
The code is structured to follow React's best practices:

Components are split into small, reusable pieces.

State is managed using Redux Toolkit for predictable state management.
API calls are separated in a dedicated file (api.js).
Styles are kept in app.css (or you can use Styled Components if preferred).

# Contributions
If you want to contribute to this project, feel free to fork the repository and submit a pull request. Please make sure your code follows the project's style guide and includes appropriate tests.
