import React, { useState, useEffect, useCallback } from "react";
import "./styles.css";
import useFormInputField from "./form-hooks/useFormInputField";
import { validateInputFields } from "./helpers";

const Form = () => {
  // const [firstName, FirstNameField] = useFormInputField("First Name", "", {
  //   required: true
  // });
  const [firstName, updateFirstName] = useState("");
  const [lastName, updateLastName] = useState("");
  const [addressOne, updateAddressOne] = useState("");
  const [addressTwo, updateAddressTwo] = useState("");
  // const [lastName, LastNameField] = useFormInputField("Last Name", "", {
  //   required: true
  // });
  // const [addressOne, AddressOneField] = useFormInputField("Address", "", {
  //   required: true
  // });
  // const [addressTwo, AddressTwoField] = useFormInputField(
  //   "Address 2 (Optional)",
  //   ""
  // );
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    const { isValid } = validateInputFields({
      firstName,
      lastName,
      addressOne
    });

    setDisable(!isValid);
  }, [firstName, lastName, addressOne]);

  //TODO: usecallback function
  //TODO: mobile site, update with one useState

  return (
    <form
      className="form"
      onSubmit={e => {
        e.preventDefault();
        alert(`
        Name: ${firstName} ${lastName},
        Address: ${addressOne} ${addressTwo}
        `);
      }}
    >
      {/* <FirstNameField /> */}
      <div className="formfields">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id={firstName}
          value={firstName}
          required
          onChange={e => updateFirstName(e.target.value)}
        />
      </div>
      <div className="formfields">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id={lastName}
          value={lastName}
          required
          onChange={e => updateLastName(e.target.value)}
        />
      </div>
      <div className="formfields">
        <label htmlFor="addressOne">Address One</label>
        <input
          type="text"
          id={addressOne}
          value={addressOne}
          required
          onChange={e => updateAddressOne(e.target.value)}
        />
      </div>
      <div className="formfields">
        <label htmlFor="addressTwo">Address Two</label>
        <input
          type="text"
          id={addressTwo}
          value={addressTwo}
          onChange={e => updateAddressTwo(e.target.value)}
        />
      </div>
      {/* <LastNameField />
      <AddressOneField />
      <AddressTwoField /> */}
      <button className="actionButton" disabled={disable}>
        Next
      </button>
    </form>
  );
};

export default Form;
