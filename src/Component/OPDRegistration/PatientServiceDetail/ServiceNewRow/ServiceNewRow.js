import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import Select from '@mui/material/Select';
import './ServiceNewRow.css'

export default function ServiceNewRow({ index, arrayHelpers }) {
  const service = ['Consultation Fees', 'Stitching charges', '2D Echo', 'First Aid Charge']

  const HandleRemove = (index) => {
    console.log(index);
    arrayHelpers.remove(index)

  }
  const HandleChange = (e) => {

  }

  return (

    <div className='ServiceNewRow-rows'>
      <span style={{ width: '20px' }}>{index}</span>
      <span>
        <Select style={{ width: '282px', padding: '0px ', height: '34px' }}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value=''
          // label="Age"
          name='serviceOpt'
          onChange={() => HandleChange()}
        >
          {service.map((value, index) =>
            (<MenuItem key={index} value={value}>{value}</MenuItem>))}
        </Select>
      </span>
      <span style={{ width: '100px' }}>
        <input name='rate' className='PatientServiceDetail-table_input' onChange={() => HandleChange()} />
      </span>
      <span style={{ width: '100px' }}>
        <input name='qty' className='PatientServiceDetail-table_input' onChange={() => HandleChange()} />
      </span>
      <span style={{ width: '100px' }}>
        <input name='unit' className='PatientServiceDetail-table_input' onChange={() => HandleChange()} />
      </span>
      <span style={{ width: '100px' }}>
        <input name='discount' className='PatientServiceDetail-table_input' onChange={() => HandleChange()} />
      </span>
      <span style={{ width: '100px' }}>
        <input name='total' className='PatientServiceDetail-table_input' onChange={() => HandleChange()} />
      </span>
      <span style={{ width: '100px' }}>
        <input name='remark' className='PatientServiceDetail-table_input' onChange={() => HandleChange()} />
      </span>
      <span style={{ width: '50px' }}>
        <Button onClick={() => HandleRemove(index)}><DeleteIcon /></Button>

      </span>
    </div>


  )
}
