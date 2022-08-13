import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './ServiceNewRow.css'

export default function ServiceNewRow({index}) {
  const service = ['Consultation Fees', 'Stitching charges', '2D Echo', 'First Aid Charge']
  console.log(index);
  return (
    
      <div className='ServiceNewRow-rows'>
        <span>{index+1}</span>
        <span>
          <Select style={{ width: '282px', padding: '0px ', height: '34px' }}
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value=''
          // label="Age"
          // onChange={handleChange}
          >
            {service.map((value, index) =>
              (<MenuItem value={value}>{value}</MenuItem>))}
          </Select>
        </span>
        <span>
          <input className='PatientServiceDetail-table_input' />
        </span>
        <span>
          <input className='PatientServiceDetail-table_input' />
        </span>
        <span>
          <input className='PatientServiceDetail-table_input' />
        </span>
        <span>
          <input className='PatientServiceDetail-table_input' variant="outlined" />
        </span>
        <span>
          <input className='PatientServiceDetail-table_input' variant="outlined" />
        </span>
        <span>
          <input className='PatientServiceDetail-table_input' variant="outlined" />
        </span>
        <span>
          <DeleteIcon />
        </span>
      </div>

    
  )
}
