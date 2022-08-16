import { useState } from 'react'
import { Button } from '@mui/material';
import ServiceNewRow from './ServiceNewRow/ServiceNewRow'
import DeleteIcon from '@mui/icons-material/Delete';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import './PatientServiceDetail.css'
export default function PatientServiceDetail({values}) {

console.log(values);

    return (<>

       
        <FieldArray name='serviceList'
            render={(arrayHelper) => (
                <div>
                    {values.serviceList.map((item, index) => (
                        <div key={index}>
                            <Field name={`serviceList[${index}.item]`}
                                type='text'
                                placeholder='product name'
                            />
                            <Button type='button' onClick={() => arrayHelper.remove(index)}>Delete</Button>
                        </div>
                    ))}
                    <Button type='button' onClick={() => arrayHelper.push("")}>Add </Button>
                </div>

            )}

        />
        <Button type='submit'>Add submit</Button>S
    



























            {/* <div className='PatientServiceDetail-container'>
                <div className='PatientServiceDetail-table'>
                    <span style={{ width: '20px' }}>#</span>
                    <span style={{ width: '282px' }}>Name</span>
                    <span style={{ width: '100px' }}>Rate (Rs)</span>
                    <span style={{ width: '100px' }}>Qty</span>
                    <span style={{ width: '100px' }}>Unit</span>
                    <span style={{ width: '100px' }}>Discount</span>
                    <span style={{ width: '100px' }}>Total(Rs)</span>
                    <span style={{ width: '100px' }}>Remarks</span>
                    <span style={{ width: '20px' }}></span>
                </div>
         </div> */}

        </>
    )
}
