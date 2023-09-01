import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/UsersList/UsersList";
import ErrorModal from "./components/ErrorModal/ErrorModal";


function App() {
  return (
    <div className="wrapper">
      <AddUser />
      <UsersList />
    </div>
  );
}

export default App;
