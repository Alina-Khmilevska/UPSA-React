import React, { useState, useEffect } from 'react';
import InputField from '../inputs/InputField';
import SubmitButton from '../buttons/SubmitButton';
import { useCreateMembershipMutation } from '../../../redux/api/api';
import fetchCities from '../../../redux/api/fetchCities';
import { Alert } from 'flowbite-react';

const MembershipForm = () => {
  // Add the mutation hook
  const [createMembership] = useCreateMembershipMutation();

  const [citiesInUkraine, setCitiesInUkraine] = useState([]);

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    city: '',
    educational: ''
  });

  const resetForm = () => {
    setFormData({
      name: '',
      surname: '',
      email: '',
      city: '',
      educational: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createMembership(formData).unwrap();
      setShowSuccessAlert(true);
      resetForm();
    } catch (err) {
      setShowErrorAlert(true);
    }
  };

  useEffect(() => {
    const getCities = async () => {
      const cities = await fetchCities();
      setCitiesInUkraine(cities);
    };
    getCities();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-bottomBackground py-20">
      <h2 className="font-alexandria text-black text-subtitle font-normal leading-normal">
        Do you want to join the association?
      </h2>
      <h3 className="font-alexandria  text-black text-body font-light leading-normal my-4">
        Fill in the form and become part of our community
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-4xl mt-6">
        {showSuccessAlert && (
          <Alert color="success" onDismiss={() => setShowSuccessAlert(false)}>
            <span className="font-medium">Success!</span> The form was submitted successfully.
          </Alert>
        )}
        {showErrorAlert && (
          <Alert color="failure" onDismiss={() => setShowErrorAlert(false)}>
            <span className="font-medium">Error!</span> There was an issue submitting the form.
          </Alert>
        )}
        <InputField
          label="Name"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Anna"
        />
        <InputField
          label="Surname"
          id="surname"
          name="surname"
          required
          value={formData.surname}
          onChange={handleChange}
          placeholder="Lovenko"
        />
        <InputField
          label="Email"
          id="email"
          name="email"
          type="email"
          value={formData.email}
          required
          onChange={handleChange}
          placeholder="yourmail@gmail.com"
        />
        <InputField
          label="City"
          id="city"
          name="city"
          list="city-list"
          type="text"
          value={formData.city}
          required
          onChange={handleChange}
          placeholder="Lviv"
        />
        <datalist id="city-list">
          {citiesInUkraine.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </datalist>

        <InputField
          label="Educational institution"
          id="educational"
          name="educational"
          value={formData.educational}
          required
          onChange={handleChange}
          placeholder="National University of Ukraine"
        />
        <SubmitButton text={'Send an application for membership'} />
      </form>
    </div>
  );
};

export default MembershipForm;
