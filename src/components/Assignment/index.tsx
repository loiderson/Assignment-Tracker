// src/components/Assignment/index.tsx
import styles from './assignment.module.css';
import { TbTrash } from 'react-icons/tb';

// Define the props interface
interface AssignmentProps {
  assignment: {
    id: number;
    title: string;
    completed: boolean;
  };
}

export function Assignment({ assignment }: AssignmentProps) {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} aria-label="Complete assignment">
        <div />
      </button>

      <p>{assignment.title}</p> {/* Display the assignment title */}

      <button className={styles.deleteButton} aria-label="Delete assignment">
        <TbTrash size={20} />
      </button>
    </div>
  );
}
