import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import {Field} from 'formik';
import './ServiceNewRow.css'

export default function ServiceNewRow({ index, arrayHelper, serviceList}) {
  const service = ['Consultation Fees', 'Stitching charges', '2D Echo', 'First Aid Charge']

  const HandleRemove = (index) => {
    console.log(index);
    arrayHelper.remove(index)

  }

  return (

    <div className='ServiceNewRow-rows'>
      <span style={{ width: '20px' }}>{index+1}</span>
      <span>
      <Field as="select" name={`serviceList[${index}].servicetype`}>
          {service.map((value, index) =>
            ( <option key={index} value={value}>{value}</option>))}
        </Field>
      </span>
      <span style={{ width: '50px' }}>
        <Field  type='text' placeholder='Rate' name={`serviceList[${index}].rate`} />
      </span>
      <span style={{ width: '100px' }}>
      <Field  type='text' placeholder='Qty' name={`serviceList[${index}].qty`} />
      </span>
      <span style={{ width: '100px' }}>
      <Field  type='text' placeholder='Unit' name={`serviceList[${index}].unit`} />
      </span>
      <span style={{ width: '100px' }}>
      <Field  type='text' placeholder='Discount' name={`serviceList[${index}].discount`} />
      </span>
      <span style={{ width: '100px' }}>
      <Field  type='text' placeholder='Total' name={`serviceList[${index}].total`} />
      </span>
      <span style={{ width: '100px' }}>
      <Field  type='text' placeholder='Remark' name={`serviceList[${index}].Remarks`} />

      </span>
      <span style={{ width: '50px' }}>
        <Button onClick={() => HandleRemove(index)}><DeleteIcon /></Button>

      </span>
    </div>


  )
}
