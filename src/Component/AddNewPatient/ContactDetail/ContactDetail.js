import React from 'react'
import './ContactDetail.css'

export default function ContactDetail({ formik }) {

  return (
    <div className='ContactDetail-container'>
      <div className='component-heading'>Contact Detail</div>
      <div className='ContactDetail-row1'>
        <span>
        <label htmlFor="guardianDetail">Guardian Detail</label>
        <select name="guardianLabel"
          onChange={formik.handleChange}
          value={formik.values.guardianLabel}>
          <option value="">Enter Label</option>
          <option value="Father">Father</option>
          <option value="Mother">Mother</option>
          <option value="Brother">Brother</option>
          <option value="Brother">Sister</option>
        </select>
        <input
          id="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.guardainName}
        /></span>
        <span>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        /></span>
        <span>
        <label htmlFor="emergencyContactNo">Emergency Contact Number</label>
        <input
          id="emergencyContactNo"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.emergencyContactNo}
        /></span>
      </div>

    </div>
  )
}
