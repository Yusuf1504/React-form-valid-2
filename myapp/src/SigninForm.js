import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const SigninForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    
    if (formData.name.trim() === '') {
      errors.name = 'Name is required.';
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Invalid email format.';
    }
    if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Phone number must be 10 digits.';
    }

    setValidationErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Form is valid, perform sign-in logic here

      // After successful sign-in, navigate to the dashboard page
      history.push('/dashboard');
    } else {
      setShowAlert(true);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      {showAlert && <Alert variant="danger">Please fix the form errors.</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            isInvalid={validationErrors.name}
          />
          <Form.Control.Feedback type="invalid">
            {validationErrors.name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            isInvalid={validationErrors.email}
          />
          <Form.Control.Feedback type="invalid">
            {validationErrors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            isInvalid={validationErrors.password}
          />
          <Form.Control.Feedback type="invalid">
            {validationErrors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            isInvalid={validationErrors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {validationErrors.phone}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </div>
  );
};

export default SigninForm;
