// src/components/Assignments/AssignmentsContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define types for the assignment
export interface Assignment { // Export the Assignment interface
  id: number;
  title: string;
  completed: boolean;
}

// Define types for the context
interface AssignmentsContextType {
  assignmentsList: Assignment[];
  totalAssignmentsCount: number;
  completedAssignmentsCount: number;
  addAssignment: (assignmentTitle: string) => void;
  deleteAssignment: (id: number) => void;
}

// Create context
const AssignmentsContext = createContext<AssignmentsContextType | undefined>(undefined);

// Create a provider component
export const AssignmentsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [assignmentsList, setAssignmentsList] = useState<Assignment[]>([]);

  const addAssignment = (assignmentTitle: string) => {
    const newAssignment: Assignment = {
      id: assignmentsList.length + 1,
      title: assignmentTitle,
      completed: false,
    };
    setAssignmentsList([...assignmentsList, newAssignment]);
  };

  const removeAssignment = (id: number) => {
    setAssignmentsList(assignmentsList.filter(assignment => assignment.id !== id)); // Delete assignment by id
  };

  const totalAssignmentsCount = assignmentsList.length;
  const completedAssignmentsCount = assignmentsList.filter(assignment => assignment.completed).length;

  return (
    <AssignmentsContext.Provider
      value={{
        assignmentsList,
        totalAssignmentsCount,
        completedAssignmentsCount,
        addAssignment,
        deleteAssignment: removeAssignment, // Provide delete function
      }}
    >
      {children}
    </AssignmentsContext.Provider>
  );
};

// Custom hook to use the Assignments context
export const useAssignments = () => {
  const context = useContext(AssignmentsContext);
  if (!context) {
    throw new Error('useAssignments must be used within an AssignmentsProvider');
  }
  return context;
};
