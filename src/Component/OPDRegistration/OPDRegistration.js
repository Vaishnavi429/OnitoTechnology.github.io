import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import PatientServiceDetail from './PatientServiceDetail/PatientServiceDetail'
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
                            // options={top100Films.map((option) => option.title)}
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
                    <h3>OPD Registration Details</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td className="opdRegistration-form_label">Date <span style={{ color: 'red' }}>*</span></td>
                                <td>
                                    <TextField id="outlined-basic" variant="outlined" />
                                </td>
                            </tr>
                            <tr>
                                <td className="opdRegistration-form_label">Consultant</td>
                                <td>
                                    <FormControl sx={{my:1,minWidth: 300 }}>
                                        <InputLabel id="demo-simple-select-helper-label">Consultant Doctor</InputLabel>
                                        <Select
                                            id="demo-simple-select-helper"
                                            value=''
                                            label="Consultant Doctor"
                                        // onChange={handleChange}
                                        >
                                            {Doctor.map((value, index) => (<MenuItem value={value} key={index}>{value}</MenuItem>))}
                                        </Select>
                                    </FormControl>
                                </td>
                            </tr>
                            <tr>
                                <td className="opdRegistration-form_label">Referred By</td>
                                <td>
                                    <TextField style={{ minWidth: '350px' }} id="outlined-basic" label='Enter Referred By' variant="outlined" />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            <div>
                <PatientServiceDetail />
            </div>
        </div>
    )
}
