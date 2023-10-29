import React, { useState } from 'react';
import InputField from '../inputs/InputField';
import SubmitButton from '../buttons/SubmitButton';

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    city: '',
    educationalInstitution: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-4xl">
      <InputField
        label="Ім’я"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <InputField
        label="Прізвище"
        id="surname"
        name="surname"
        value={formData.surname}
        onChange={handleChange}
      />
      <InputField
        label="Email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputField
        label="Місто"
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
      />
      <InputField
        label="Навчальний заклад"
        id="educationalInstitution"
        name="educationalInstitution"
        value={formData.educationalInstitution}
        onChange={handleChange}
      />
      <SubmitButton text={'Відправити запит на членство'} />
    </form>
  );
};

export default MembershipForm;
