import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import PatientServiceDetail from './PatientServiceDetail/PatientServiceDetail'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';

import { useFormik } from 'formik';
import './OPDRegistration.css'


export default function OPDRegistration() {
    const Doctor = ['Dr Vivek', 'Dr Ananya', 'Dr Abhishek', 'Dr vishal', 'Dr Shipra']


    return (
        <div className='opdRegistration-container'>
            <div className='opdRegistration-formContainer'>
                <div>
                    <Stack spacing={2} sx={{ width: 300 }}>
                        <Autocomplete
                            freeSolo
                            id="free-solo-2-demo"
                            disableClearable
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Search Patient"
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                    }}
                                />
                            )}
                        />
                    </Stack>
                </div>
                <div className='opdRegistration-form'>
                    <Formik
                        initialValues={{
                            date: '',
                            consultant: '',
                            referred: '',
                            serviceList: []
                        }}
                        onSubmit={(values) => {
                            console.log(values)
                        }}>
                        {({ values }) => (
                            <Form>
                                <h3>OPD Registration Details</h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="opdRegistration-form_label">Date <span style={{ color: 'red' }}>*</span></td>
                                            <td>
                                                <Field id="outlined-basic" variant="outlined"
                                                    name='date'
                                                    type='text'
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="opdRegistration-form_label">Consultant</td>
                                            <td>
                                                {/* <FormControl sx={{ my: 1, minWidth: 300 }}>
                                                    <InputLabel id="demo-simple-select-helper-label">Consultant Doctor</InputLabel>
                                                    <Select
                                                        id="demo-simple-select-helper"
                                                        label="Consultant Doctor"
                                                        value={values.consultant}
                                                        onChange={values.handleChange}
                                                        name='consultant'
                                                    >
                                                        {Doctor.map((value, index) => (
                                                            <MenuItem value={value} key={index}>{value}</MenuItem>))}
                                                    </Select>
                                                </FormControl> */}
                                                <Field style={{ minWidth: '300px' }}
                                                    id="outlined-basic" label='Enter Referred By'
                                                    variant="outlined"
                                                    type='text'
                                                    name='consultant' />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="opdRegistration-form_label">Referred By</td>
                                            <td>
                                                <Field style={{ minWidth: '350px' }}
                                                    id="outlined-basic" label='Enter Referred By'
                                                    variant="outlined"
                                                    type='text'
                                                    name='referred' />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <PatientServiceDetail values={values} />

                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}
