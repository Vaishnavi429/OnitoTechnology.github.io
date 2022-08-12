import React from 'react'
import { TextField } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './ContactDetail.css'

export default function ContactDetail({ formik }) {
  const guardianLabel = ['Father', 'Mother', 'Brother', 'Sister']

  return (
    <div className='ContactDetail-container'>
      <div className='component-heading'>Contact Detail</div>
      <div className='ContactDetail-row1'>
        <span>
          <label htmlFor="guardianDetail">Guardian Detail</label>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Guardian Label</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={formik.values.guardianLabel}
              label="Guardian Label"
              name="guardianLabel"
              onChange={formik.handleChange}

            >
              {guardianLabel.map((value, index) => (
                <MenuItem key={index} value={value}>{value}</MenuItem>
              ))}
            </Select>

          </FormControl>
          <TextField
            id="guardainName"
            type="text"
            label="Guardian Name"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.guardainName}
          /></span>
        <span>
          <label htmlFor="email">Email</label>
          <TextField
            id="email"
            type="text"
            label="Email"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.email}
          /></span>
        <span>
          <label htmlFor="emergencyContactNo">Emergency Number</label>
          <TextField
            id="emergencyContactNo"
            type="text"
            label="Contact Number"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.emergencyContactNo}
          /></span>
      </div>

    </div>
  )
}
