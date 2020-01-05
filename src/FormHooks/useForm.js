import { useState, useCallback, useEffect } from 'react';
import { validateFormData } from '../helpers';

const useForm = validateInput => {
  const [formData, updateFormData] = useState({
    firstName: '',
    lastName: '',
    addressOne: '',
    addressTwo: ''
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      setErrors(validateFormData(formData));
      Object.keys(validateFormData(formData)).length === 0 &&
        alert(
          `
         Name: ${formData.firstName} ${formData.lastName},
         Address: ${formData.addressOne}, ${formData.addressTwo}
         `
        );
    },
    [formData]
  );

  //Calling event.persist() on the synthetic event removes the event from the pool allowing
  //references to the event to be retained asynchronously.
  const handleChange = useCallback(
    e => {
      e.persist();
      updateFormData({ ...formData, [e.target.name]: e.target.value });
    },
    [formData]
  );

  return [formData, handleChange, handleSubmit, errors];
};

export default useForm;
