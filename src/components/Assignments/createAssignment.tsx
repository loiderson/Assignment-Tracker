// src/components/Assignments/createAssignment.ts
import { Assignment } from "./AssignmentsContext";

export const createAssignment = (
  assignmentTitle: string,
  assignmentsList: Assignment[],
  setAssignmentsList: React.Dispatch<React.SetStateAction<Assignment[]>>
) => {
  const newAssignment: Assignment = {
    id: assignmentsList.length + 1,
    title: assignmentTitle,
    completed: false,
  };
  setAssignmentsList([...assignmentsList, newAssignment]);
};
