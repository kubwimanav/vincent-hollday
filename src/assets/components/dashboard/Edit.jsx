import React, { useState } from 'react';
import './Edit.css';
import hero from '../../images/hero-imag.jpg'

function Edit({Places,onClose,onSave,openForm}) {

const handleSave = () =>{
  onSave();
  onClose();
};

  return (
    <div className="user-registration-container">
      <h2> Edit User Details</h2>
      <form >
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            className='edit-input'
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            className='edit-input'
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            className='edit-input'
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            className='edit-input'
          />
        </div>

        <div className="form-group">
      
           <img src='hero' alt="User" className="profile-image" />
        </div>
        <div className="form-groupbut">
          <button type="button" className="btn-register" onClick={handleSave}>Save</button>
          <button type="button" className="btn-register" onClick={openForm}>Cancel</button>

        </div>
      </form>
    </div>
  );
}

export default Edit