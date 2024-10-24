// src/components/Assignments/deleteAssignment.ts
import { Assignment } from "./AssignmentsContext";

export const deleteAssignment = (
  id: number,
  assignmentsList: Assignment[],
  setAssignmentsList: React.Dispatch<React.SetStateAction<Assignment[]>>
) => {
  setAssignmentsList(assignmentsList.filter(assignment => assignment.id !== id)); // Delete assignment by id
};
