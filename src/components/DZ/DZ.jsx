import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 23%;
  margin: 3% auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #f2f2f2;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin: 7px 0;
  font-size: 14px;
  font-weight: bold;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const Formm = () => {
  return (
    <FormWrapper>
        <FormField>
          <Label>Name</Label>
          <Input
            type="text"
          />
        </FormField>
        
        <FormField>
          <Label>Phone</Label>
          <Input
            type="tel"
          />
        </FormField>

        <FormField>
          <Label>Email</Label>
          <Input
            type="email"
          />
        </FormField>

        <FormField>
          <Label>Message</Label>
          <Textarea />
        </FormField>

        <CheckboxLabel>
          <Checkbox
            type="checkbox"
          />
          I agree to the terms and conditions
        </CheckboxLabel>
        
        <Button type="submit">Submit</Button>
    </FormWrapper>
  );
};

export default Formm;
