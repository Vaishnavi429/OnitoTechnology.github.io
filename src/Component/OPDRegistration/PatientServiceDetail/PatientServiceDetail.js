import React from 'react'
import { Button } from '@mui/material';
import ServiceNewRow from './ServiceNewRow/ServiceNewRow'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import './PatientServiceDetail.css'
export default function PatientServiceDetail() {
    return (
        <>
            <div className='PatientServiceDetail-container'>
                <div className='PatientServiceDetail-table'>
                    <div>
                        <span>#</span>
                        <span>Name</span>
                        <span>Rate (Rs)</span>
                        <span>Qty</span>
                        <span>Unit</span>
                        <span>Discount</span>
                        <span>Total(Rs)</span>
                        <span>Remarks</span>
                        <span></span>
                    </div>
                </div>

                <Formik
                    initialValues={{
                        serviceList: [{}, {},{}]
                    }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {(formik) => (
                        <Form>
                            <FieldArray name='serviceList'
                                render={
                                    (arrayHelpers) => {
                                        return (
                                            <div>
                                                {formik.values.serviceList.map((item, index) => (
                                                    <ServiceNewRow key={index} />
                                                ))}
                                            </div>
                                        )
                                    }}
                            />
                        </Form>
                    )}
                </Formik>
                <Button variant="contained">Add</Button>
            </div>

        </>
    )
}
