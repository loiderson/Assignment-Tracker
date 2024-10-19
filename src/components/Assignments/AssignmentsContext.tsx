// src/components/Assignments/AssignmentsContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define types for the assignment
interface Assignment {
  id: number;
  title: string;
  completed: boolean;
}

// Define types for the context
interface AssignmentsContextType {
  assignmentsList: Assignment[];  // Changed from 'assignments'
  totalAssignmentsCount: number;   // Changed from 'totalAssignments'
  completedAssignmentsCount: number; // Changed from 'completedAssignments'
  addAssignment: (assignmentTitle: string) => void; // Changed from 'title'
}

// Create context
const AssignmentsContext = createContext<AssignmentsContextType | undefined>(undefined);

// Create a provider component
export const AssignmentsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [assignmentsList, setAssignmentsList] = useState<Assignment[]>([]); // Changed from 'assignments'

  const addAssignment = (assignmentTitle: string) => { // Changed from 'title'
    const newAssignment: Assignment = {
      id: assignmentsList.length + 1, // Changed from 'assignments'
      title: assignmentTitle,          // Changed from 'title'
      completed: false,
    };
    setAssignmentsList([...assignmentsList, newAssignment]); // Changed from 'assignments'
  };

  const totalAssignmentsCount = assignmentsList.length; // Changed from 'totalAssignments'
  const completedAssignmentsCount = assignmentsList.filter(assignment => assignment.completed).length; // Changed from 'completedAssignments'

  return (
    <AssignmentsContext.Provider
      value={{
        assignmentsList,                // Changed from 'assignments'
        totalAssignmentsCount,          // Changed from 'totalAssignments'
        completedAssignmentsCount,      // Changed from 'completedAssignments'
        addAssignment,
      }}
    >
      {children}
    </AssignmentsContext.Provider>
  );
};

// Custom hook to use the Assignments context
// eslint-disable-next-line react-refresh/only-export-components
export const useAssignments = () => {
  const context = useContext(AssignmentsContext);
  if (!context) {
    throw new Error('useAssignments must be used within an AssignmentsProvider');
  }
  return context;
};
