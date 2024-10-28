import { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import uuid4 from "uuid4";

function App() {
  const localStorageKey = "contact";
  const [contact, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contact));
  }, [contact]);
  {
    /*This function is pass as  Props in addContact Component */
  }
  const addContact = (data) => {
    setContact([...contact, { id: uuid4(), data }]);
  };
  const removeContact = (id) => {
    const updatedList = contact.filter((val) => {
      return val.id !== id;
    });
    setContact(updatedList);
  };
  return (
    <div className="App">
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contact={contact} removeContact={removeContact} />
    </div>
  );
}

export default App;
