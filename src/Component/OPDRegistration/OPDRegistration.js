import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import PatientServiceDetail from './PatientServiceDetail/PatientServiceDetail'
import { useFormik } from 'formik';
import './OPDRegistration.css'


export default function OPDRegistration() {
    const Doctor = ['Dr Vivek', 'Dr Ananya', 'Dr Abhishek', 'Dr vishal', 'Dr Shipra']

    const formik = useFormik({

        initialValues:{
             Date:'',
             Consultant:'',
             ReferredBy:'',
            serviceList: [{a:'a'},{b:'b'}]
        }

    })


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
                    <form>
                    <h3>OPD Registration Details</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td className="opdRegistration-form_label">Date <span style={{ color: 'red' }}>*</span></td>
                                <td>
                                    <TextField id="outlined-basic" variant="outlined"  
                                    onChange={formik.handleChange}
                                    value={formik.values.Date}
                                    name='Date'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="opdRegistration-form_label">Consultant</td>
                                <td>
                                    <FormControl sx={{ my: 1, minWidth: 300 }}>
                                        <InputLabel id="demo-simple-select-helper-label">Consultant Doctor</InputLabel>
                                        <Select
                                            id="demo-simple-select-helper"
                                            label="Consultant Doctor"
                                            onChange={formik.handleChange}
                                            value={formik.values.Consultant}
                                            name='Consultant'
                                        >
                                            {Doctor.map((value, index) => (<MenuItem value={value} key={index}>{value}</MenuItem>))}
                                        </Select>
                                    </FormControl>
                                </td>
                            </tr>
                            <tr>
                                <td className="opdRegistration-form_label">Referred By</td>
                                <td>
                                    <TextField style={{ minWidth: '350px' }} 
                                    id="outlined-basic" label='Enter Referred By'
                                     variant="outlined"
                                     onChange={formik.handleChange}
                                    value={formik.values.ReferredBy}
                                    name='ReferredBy' />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </form>
                </div>
            </div>
            <div>
                <PatientServiceDetail  formik={formik}/>
            </div>
        </div>
    )
}
