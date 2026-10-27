
import { useState } from "react";

function ContactForm({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !email.trim()) {
      setError("Name and email are required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Enter a valid email address.");
      return;
    }

    onAdd({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
    });

    setName("");
    setEmail("");
    setPhone("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Contact</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="tel"
        placeholder="Phone (optional)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
