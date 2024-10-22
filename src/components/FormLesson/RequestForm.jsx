import React, { useState } from 'react';

const FormLesson = ({setLogin}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});
  const isLogin = () => {
    if(name == "lesya" && password == "123456"){
      setLogin(true)
    }
  }
  
  const validate = () => {
    const newErrors = {};

    if (name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters long';
    }
    if (password.length < 6) {
      newErrors.password = 'The password must be longer than 6 characters';
    }

    return newErrors;
  };

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
    setErrors(validate());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); 
    } else {
      isLogin()
      setErrors({});  
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange(setName)}
          />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>
      <div>
        <label>Password:</label>
          <input
            type=""
            value={password}
            onChange={handleChange(setPassword)}
            required
          />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormLesson;