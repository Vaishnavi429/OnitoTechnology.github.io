import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './ServiceNewRow.css'

export default function ServiceNewRow(props) {
  const service = ['Consultation Fees', 'Stitching charges', '2D Echo', 'First Aid Charge']
  return (
    
      <div className='ServiceNewRow-rows'>
        <span style={{width:'20px'}}>{props.id+1}</span>
        <span>
          <Select style={{ width: '282px', padding: '0px ', height: '34px' }}
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value=''
          // label="Age"
          // onChange={handleChange}
          >
            {service.map((value, index) =>
              (<MenuItem key={index} value={value}>{value}</MenuItem>))}
          </Select>
        </span>
        <span style={{width:'100px'}}>
          <input className='PatientServiceDetail-table_input' />
        </span>
        <span style={{width:'100px'}}>
          <input className='PatientServiceDetail-table_input' />
        </span>
        <span style={{width:'100px'}}>
          <input className='PatientServiceDetail-table_input' />
        </span>
        <span style={{width:'100px'}}>
          <input className='PatientServiceDetail-table_input' variant="outlined" />
        </span>
        <span style={{width:'100px'}}>
          <input className='PatientServiceDetail-table_input' variant="outlined" />
        </span>
        <span style={{width:'100px'}}>
          <input className='PatientServiceDetail-table_input' variant="outlined" />
        </span>
        <span style={{width:'50px'}}>
          <DeleteIcon />
        </span>
      </div>

    
  )
}
