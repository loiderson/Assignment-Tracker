import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { AssignmentsProvider } from "./components/Assignments/AssignmentsContext";

function App() {
  return (
    <>
    <AssignmentsProvider>
      <Header />
      <Assignments />
    </AssignmentsProvider>
      
    </>
  );
}

export default App;
