import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import './AddressDetail.css'

export default function AddressDetail({ formik }) {
  let state = ["Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"]

  return (
    <div className='addressDetail-container'>
      <div className='component-heading'>Address Detail</div>
      <div className='addressDetail-row1'>
        <span>
          <label htmlFor="address">Address</label>
          <TextField
            id="address"
            type="text"
            label="Address"
            variant="outlined"
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
          /></span>
        <span>
          <label htmlFor="state">State</label>



          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="demo-simple-select-helper-label">State</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={formik.values.state}
              label="State"
              name="state"
              onChange={formik.handleChange}

            >
              {state.map((value, index) => (
                <MenuItem  key={index} value={value}>{value}</MenuItem>
              ))}
            </Select>

          </FormControl>
         </span>
        <span>
          <label htmlFor="city">City</label>
          <TextField
            type="text"
            label="City"
            variant="outlined"
            name="city"
            onChange={formik.handleChange}
            value={formik.values.city}
          /></span>
      </div>
      <div className='addressDetail-row2'>
        <span >
          <label htmlFor="country">Country</label>
          <TextField
            id="country"
            type="text"
            label="Country"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.country}
          /></span>
        <span>
          <label htmlFor="pincode">Pincode</label>
          <TextField
            id="pincode"
            type="text"
            label="PinCode"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.pincode}
          /></span>
      </div>
    </div>
  )
}
