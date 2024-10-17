import React, { useState, ChangeEvent } from "react"; // Import useState and ChangeEvent
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

export function Header() {
  const [inputValue, setInputValue] = useState<string>(''); // State to hold input value

  // Handle input change with typed event
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Update the input value in state
  };

  // Check if the input is empty or contains only spaces
  const isInputInvalid = inputValue.trim() === '';

  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={inputValue} // Bind input value to state
          onChange={handleInputChange} // Call handler on input change
        />
        <button
          disabled={isInputInvalid} // Disable button if input is invalid
          className={`${isInputInvalid ? styles.disabledButton : ''} ${isInputInvalid ? styles.notAllowedCursor : ''}`} // Apply disabled class and cursor class based on input validation
        >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
