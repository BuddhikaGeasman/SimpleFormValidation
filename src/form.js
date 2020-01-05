import React from 'react';
import { validateFormData } from './helpers';
import useForm from './FormHooks/useForm';
import clsx from 'clsx';

import './styles.css';

const Form = () => {
  const [formData, onHandleChange, onHandleSubmit, errors] = useForm(
    validateFormData
  );

  const { firstName, lastName, addressOne, addressTwo } = formData;

  console.log('form errors', errors);
  return (
    <form className='form' onSubmit={onHandleSubmit}>
      <div className={clsx('formfields', { error: errors.firstName })}>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          name='firstName'
          id='firstName'
          value={firstName}
          required
          onChange={onHandleChange}
        />
        {errors.firstName && <span className='error'>{errors.firstName}</span>}
      </div>

      <div className={clsx('formfields', { error: errors.lastName })}>
        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          name='lastName'
          id='lastName'
          value={lastName}
          required
          onChange={onHandleChange}
        />
        {errors.lastName && <span className='error'>{errors.lastName}</span>}
      </div>
      <div className={clsx('formfields', { error: errors.addressOne })}>
        <label htmlFor='addressOne'>Address One</label>
        <input
          type='text'
          id='addressOne'
          value={addressOne}
          required
          name='addressOne'
          onChange={onHandleChange}
        />
        {errors.addressOne && (
          <span className='error'>{errors.addressOne}</span>
        )}
      </div>
      <div className='formfields'>
        <label htmlFor='addressTwo'>Address Two</label>
        <input
          type='text'
          id='addressTwo'
          value={addressTwo}
          name='addressTwo'
          onChange={onHandleChange}
        />
      </div>
      <button className='actionButton'>Next</button>
    </form>
  );
};

export default Form;
