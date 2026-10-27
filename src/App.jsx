
import { useState } from "react";
import ContactForm from "./components/ContactForm";
import SearchBar from "./components/SearchBar";
import ContactList from "./components/ContactList";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  function addContact(contact) {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  }

  function deleteContact(id) {
    setContacts(contacts.filter((contact) => contact.id !== id));
  }

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Contact Book</h1>

      <ContactForm onAdd={addContact} />

      <h2>Contacts ({contacts.length})</h2>

      <SearchBar search={search} setSearch={setSearch} />

      <ContactList
        contacts={filteredContacts}
        totalContacts={contacts.length}
        search={search}
        onDelete={deleteContact}
      />
    </div>
  );
}

export default App;
