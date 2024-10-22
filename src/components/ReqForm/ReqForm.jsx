import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.div`
  max-width: 400px;
  margin: 10% auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 10px 0;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 5px;
  border: 1px solid ${(props) => (props.error ? "red" : "#ccc")};
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 5px;
  border: 1px solid ${(props) => (props.error ? "red" : "#ccc")};
  border-radius: 5px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 14px;
  margin-top: 15px;
  text-align: center;
`;

const Checkbox = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;

const StyledCheckbox = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ReqForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long";
    }
    if (!/^\d+$/.test(phone)) {
      newErrors.phone = "Phone number must contain only digits";
    } else if (phone.length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits long";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (message.length < 1) {
      newErrors.message = "Message cannot be empty";
    }
    if (!consent) {
      newErrors.consent = "You must agree to the processing of personal data";
    }
    return newErrors;
  };

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
    setErrors(validate()); 
  };

  const handleCheckboxChange = (e) => {
    setConsent(e.target.checked);
    setErrors(validate()); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); 
      setFormSubmitted(false);
    } else {
      setErrors({}); 

      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setConsent(false);
      setFormSubmitted(true);
    }
  };

  return (
    <Form>
      <StyledForm onSubmit={handleSubmit}>
        <Label>Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange(setName)}
          error={errors.name}
        />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

        <Label>Phone</Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={handleChange(setPhone)}
          error={errors.phone}
        />
        {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}

        <Label>Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange(setEmail)}
          error={errors.email}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

        <Label>Message</Label>
        <TextArea
          id="message"
          name="message"
          value={message}
          onChange={handleChange(setMessage)}
          error={errors.message}
        />
        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}

        <Checkbox>
          <StyledCheckbox
            type="checkbox"
            id="consent"
            name="consent"
            checked={consent}
            onChange={handleCheckboxChange}
          />
          <label>I agree to the processing of personal data</label>
        </Checkbox>
        {errors.consent && <ErrorMessage>{errors.consent}</ErrorMessage>}

        <Button type="submit">Submit</Button>
        {formSubmitted && <SuccessMessage>Form submitted successfully!</SuccessMessage>}
      </StyledForm>
    </Form>
  );
};

export default ReqForm;
