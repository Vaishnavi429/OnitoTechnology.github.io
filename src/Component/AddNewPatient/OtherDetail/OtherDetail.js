import React from 'react'
import './OtherDetail.css'

export default function OtherDetail({ formik }) {
  const religion = ['Hindu', 'Muslim']
  const martialStatus = ['Single', 'Married', 'Divorced']
  const bloodGroup = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
  return (
    <div className='OtherDetail-container'>
      <div className='component-heading'>Other Detail</div>
      <div className='OtherDetail-row1'>
        <span> <label htmlFor="occupation">Occupation</label>
          <input
            id="occupation"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.occupation}
          /> </span>
          <span>
        <label htmlFor="religion">Religion</label>
        <select name="religion"
          onChange={formik.handleChange}
          value={formik.values.religion}>
          <option value="">Enter Religion</option>
          {religion.map((value, index) => (
            <option key={index} value={value}>{value}</option>
          ))}
        </select></span>
           <span>
        <label htmlFor="martialStatus">Martial Status</label>
        <select name="martialStatus"
          onChange={formik.handleChange}
          value={formik.values.martialStatus}>
          <option value="">Enter Martial Status</option>
          {martialStatus.map((value, index) => (
            <option key={index} value={value}>{value}</option>
          ))}
        </select></span>
        <span>
        <label htmlFor="bloodGroup">Blood Group</label>
        <select name="BloodGroup"
          onChange={formik.handleChange}
          value={formik.values.bloodGroup}>
          <option value="">Group</option>
          {bloodGroup.map((value, index) => (
            <option key={index} value={value}>{value}</option>
          ))}
        </select></span>
      </div>
      <div>
        <label htmlFor="nationality">Nationality</label>
        <input
          id="nationality"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.nationality}
        />
      </div>

    </div>
  )
}
