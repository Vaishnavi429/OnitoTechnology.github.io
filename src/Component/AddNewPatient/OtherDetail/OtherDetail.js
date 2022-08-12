import React from 'react'
import { TextField } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
          <TextField
            id="occupation"
            type="text"
            label="Occupation"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.occupation}
          /> </span>
        <span>
          <label htmlFor="religion">Religion</label>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Religion</InputLabel>
            <Select
              name="religion"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={formik.values.religion}
              label="Religion"
              onChange={formik.handleChange}

            >
              {religion.map((value, index) => (
                <MenuItem key={index} value={value}>{value}</MenuItem>
              ))}
            </Select>

          </FormControl>

        </span>
        <span>
          <label htmlFor="martialStatus">Martial Status</label>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Martial Status</InputLabel>
            <Select
              name="martialStatus"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={formik.values.martialStatus}
              label="Martial Status"
              onChange={formik.handleChange}
            >
              {martialStatus.map((value, index) => (
                <MenuItem key={index} value={value}>{value}</MenuItem>
              ))}
            </Select>
            </FormControl></span>
        <span>
          <label htmlFor="bloodGroup">Blood Group</label>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Blood Group</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={formik.values.bloodGroup}
              label="Blood Group"
              name="bloodGroup"
              onChange={formik.handleChange}

            >
              {bloodGroup.map((value, index) => (
                <MenuItem key={index} value={value}>{value}</MenuItem>
              ))}
            </Select>
            </FormControl>
          </span>
      </div>
      <div>
        <label htmlFor="nationality">Nationality</label>
        <TextField
          id="nationality"
          type="text"
          label="Nationality"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.nationality}
        />
      </div>

    </div>
  )
}
