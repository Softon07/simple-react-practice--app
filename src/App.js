import { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/UsersList/UsersList";
import ErrorModal from "./components/ErrorModal/ErrorModal";

let id = 0;

const INITIAL_DATA = [
  {
    key: id,
    name: "Jan",
    age: 91,
  },

  {
    key: ++id,
    name: "Zbigniew",
    age: 33,
  },

  {
    key: ++id,
    name: "Joanna",
    age: 44,
  },
];

function App() {
  const [users, setUsers] = useState(INITIAL_DATA);
  const addUserHandler = (user) => {
    setUsers((previousUsers) => {
      return [user, ...previousUsers];
    });
  };

  return (
    <div className="wrapper">
      <AddUser onAddUser={addUserHandler} userId={id} />
      <UsersList users={users} />
      {/* <ErrorModal /> */}
    </div>
  );
}

export default App;
