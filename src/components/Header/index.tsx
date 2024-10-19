// Header/index.tsx
import React, { useState, ChangeEvent } from "react"; 
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useAssignments } from "../Assignments/AssignmentsContext"; // Import the context

export function Header() {
  const [inputValue, setInputValue] = useState<string>(''); 
  const { addAssignment } = useAssignments(); // Use the addAssignment function from the context

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); 
  };

  const handleCreateAssignment = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      addAssignment(inputValue.trim()); // Call the addAssignment function with the input value
      setInputValue(''); // Clear the input
    }
  };

  const isInputInvalid = inputValue.trim() === '';

  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleCreateAssignment}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={inputValue} 
          onChange={handleInputChange} 
        />
        <button
          disabled={isInputInvalid} 
          className={`${isInputInvalid ? styles.disabledButton : ''} ${isInputInvalid ? styles.notAllowedCursor : ''}`} 
        >Create<AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
