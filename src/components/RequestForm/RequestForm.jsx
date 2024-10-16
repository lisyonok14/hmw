import React, { useState } from 'react';

const RequestForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters long';
    }
    if (!/^\d+$/.test(phone)) {
      newErrors.phone = 'Phone number must contain only digits';
    } else if (phone.length < 10) {
      newErrors.phone = 'Phone number must be at least 10 digits long';
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    if (message.length < 1) {
      newErrors.message = 'Message cannot be empty';
    }
    if (!consent) {
      newErrors.consent = 'You must agree to the processing of personal data';
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
    } else {
      console.log({ name, phone, email, message, consent });
      setErrors({});  

      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      setConsent(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleChange(setName)}
          />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>
      <div>
        <label>Phone:</label>
          <input
            type=""
            value={phone}
            onChange={handleChange(setPhone)}
            required
          />
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
      </div>
      <div>
        <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleChange(setEmail)}
            required
          />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div>
        <label>Message:</label>
          <textarea
            value={message}
            onChange={handleChange(setMessage)} 
            required
          />
        {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
      </div>
      <div>
          <input
            type="checkbox"
            checked={consent}
            onChange={handleCheckboxChange}
            required
          />
          I agree to the processing of personal data
        {errors.consent && <p style={{ color: 'red' }}>{errors.consent}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RequestForm;