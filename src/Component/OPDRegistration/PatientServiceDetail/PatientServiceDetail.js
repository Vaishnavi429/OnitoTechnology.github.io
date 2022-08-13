import { useState } from 'react'
import { Button } from '@mui/material';
import ServiceNewRow from './ServiceNewRow/ServiceNewRow'
import DeleteIcon from '@mui/icons-material/Delete';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import './PatientServiceDetail.css'
export default function PatientServiceDetail() {
    const [newService, setNewService] = useState({
        serviceOpt: '',
        rate: '',
        qty: '',
        unit: '',
        discount: '',
        total: '',
        remarks: '',
    })
    return (
        <>
            <div className='PatientServiceDetail-container'>
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

                <Formik
                    initialValues={{
                        serviceList: [{}, {}, {}]
                    }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {(formik) => (
                        <Form onSubmit={formik.handleSubmit}>
                            <FieldArray name='serviceList'
                                render={
                                    (arrayHelpers) => {
                                        return (
                                            <div>
                                                {formik.values.serviceList.map((item, index) => (
                                                    <ServiceNewRow key={index} index={index} arrayHelpers={arrayHelpers} newService={newService} setNewService={setNewService} />
                                                ))}
                                                <Button variant="contained" onClick={() => arrayHelpers.insert(formik.values.serviceList.length + 1, { newService })}>add</Button>
                                            </div>
                                        )
                                    }}
                            />
                            <button type='submit'>Submit</button>
                        </Form>

                    )}

                </Formik>
            </div>

        </>
    )
}
