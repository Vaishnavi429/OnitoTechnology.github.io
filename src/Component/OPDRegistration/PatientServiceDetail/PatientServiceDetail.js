import { useState } from 'react'
import { Button } from '@mui/material';
import ServiceNewRow from './ServiceNewRow/ServiceNewRow'
import { FieldArray } from 'formik';
import './PatientServiceDetail.css'
export default function PatientServiceDetail({values}) {
   const newService = {servicetype:'',rate:'',qty:'',unit:'',discount:'',total:'',remarks:''}
    return (<>

       
        <FieldArray name='serviceList'
            render={(arrayHelper) => (
                <div>
                    {values.serviceList.map((item, index) => (
                        <div key={index}>
                            <ServiceNewRow arrayHelpers={arrayHelper} serviceList={values.serviceList} index={index}/>
                            
                        </div>
                    ))}
                    <Button type='button' onClick={() => arrayHelper.push(newService)}>Add </Button>
                </div>

            )}

        />
        <Button type='submit'>Add submit</Button>
    



























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
