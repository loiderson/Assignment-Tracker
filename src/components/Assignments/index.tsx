// src/components/Assignments/index.tsx
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { useAssignments } from "./AssignmentsContext"; // Import the context hook

export function Assignments() {
  // Destructure the context values
  const { 
    assignmentsList,               // Changed from 'assignments'
    totalAssignmentsCount,         // Changed from 'totalAssignments'
    completedAssignmentsCount       // Changed from 'completedAssignments'
  } = useAssignments(); // Use the context

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{totalAssignmentsCount}</span> {/* Display total assignments */}
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>
            {completedAssignmentsCount} of {totalAssignmentsCount}
          </span> {/* Display completed assignments */}
        </div>
      </header>

      <div className={styles.list}>
        {assignmentsList.map(assignment => (
          <Assignment 
            key={assignment.id} 
            assignment={assignment} // Pass the whole assignment object
          />
        ))}
      </div>
    </section>
  );
}
