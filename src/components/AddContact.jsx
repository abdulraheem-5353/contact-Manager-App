import React, { useState } from "react";

const AddContact = ({ addContact }) => {
  const [contactData, setContactData] = useState({ name: "", email: "" });
  const handleChange = (e) => {
    if (e.target.name === "name") {
      setContactData({ ...contactData, name: e.target.value });
    } else {
      setContactData({ ...contactData, email: e.target.value });
    }
  };

  {
    /* This Function is used to Add Contact */
  }
  const handleAdd = () => {
    if (contactData.name === "" || contactData.email === "") {
      alert("Please Fill All Details ");
      return;
    }
    addContact(contactData);
    setContactData({ name: "", email: "" });
  };
  return (
    <div className="formHeader">
      <h1 className="add-contact">Add Contact</h1>
      <form>
        <label>Name:</label> <br />
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={contactData.name}
          onChange={handleChange}
        />{" "}
        <br />
        <label>Email:</label> <br />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={contactData.email}
          onChange={handleChange}
        />
      </form>
      <button className="add-contact-button" onClick={handleAdd}>
        Add Contact
      </button>
    </div>
  );
};

export default AddContact;
