import React, { useState } from 'react';
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // State variable to track whether the app is in dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode state
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Determine the class name for the app container based on the dark mode state
  const appClass = isDarkMode ? "light" : "dark";
  const buttonText = isDarkMode ? "light mode" : "dark mode";
// light mode will be light and dark mode will be dark, the text will change name based on the mode you have chosen

  return (
    <div className={`App ${appClass}`} data-testid="app-container">
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>{buttonText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
