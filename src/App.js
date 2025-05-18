import logo from './logo.svg';
import './App.css';
import UserTable from './components/UserTable';
import SearchBar from './components/SearchBar';
import { useEffect, useState } from 'react';

function App() {
  const [users, setusers] = useState([]);
  const [search, setsearch] = useState("");
  const [error, seterror] = useState("");
  // const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch(" https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    .then(data => setusers(data))
    .catch(error => seterror("error"))
  },[])

  const filteredUsers = users.filter((element) =>
    element.name.toLowerCase().includes(search.toLowerCase()) ||
    element.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
     <div className="max-w-3xl mx-auto mt-5 p-4">
      <h1 className="text-3xl text-center font-bold mb-4">User Directory</h1>
      <SearchBar search={search} setsearch={setsearch} />
      <UserTable users={filteredUsers} />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}


export default App;
