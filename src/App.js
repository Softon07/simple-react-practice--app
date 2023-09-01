import { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/UsersList/UsersList";
import ErrorModal from "./components/ErrorModal/ErrorModal";

const INITIAL_DATA = [
  {
    id: 0,
    name: "Jan",
    age: 91,
  },

  {
    id: 1,
    name: "Zbigniew",
    age: 33,
  },

  {
    id: 2,
    name: "Joanna",
    age: 44,
  },
];

function App() {
  const [users, setUsers] = useState(INITIAL_DATA);
  


  return (
    <div className="wrapper">
      <AddUser />
      <UsersList users={users} />

      {/* <ErrorModal /> */}
    </div>
  );
}

export default App;
