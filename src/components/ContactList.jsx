
function ContactList({ contacts, totalContacts, search, onDelete }) {
  if (totalContacts === 0) {
    return <p>No contacts yet. Add one above!</p>;
  }

  if (contacts.length === 0) {
    return <p>No matches found for "{search}".</p>;
  }

  return (
    <div>
      {contacts.map((contact) => (
        <div className="contact" key={contact.id}>
          <h3>{contact.name}</h3>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone || "Not provided"}</p>

          <button onClick={() => onDelete(contact.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
