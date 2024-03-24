import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    dropdown: 'Option1',
    radio: 'OptionA',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered Info:\nName: ${formData.name}\nEmail: ${formData.email}\nDropdown: ${formData.dropdown}\nRadio: ${formData.radio}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Dropdown:</label>
        <select name="dropdown" value={formData.dropdown} onChange={handleChange}>
          <option value="Option1">Option 1</option>
          <option value="Option2">Option 2</option>
          <option value="Option3">Option 3</option>
        </select>
      </div>
      <div>
        <label>Radio:</label>
        <input type="radio" name="radio" value="OptionA" checked={formData.radio === 'OptionA'} onChange={handleChange} /> Option A
        <input type="radio" name="radio" value="OptionB" checked={formData.radio === 'OptionB'} onChange={handleChange} /> Option B
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default App;
