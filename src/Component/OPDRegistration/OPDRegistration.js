import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { Button, MenuItem,InputLabel, Select, FormControl } from '@mui/material';
import './OPDRegistration.css'
import ServiceNewRow from './PatientServiceDetail/ServiceNewRow/ServiceNewRow';
import * as Yup from "yup";
import PatientServiceDetail from './PatientServiceDetail/PatientServiceDetail';

const DoctorvalidationSchema = Yup.object().shape({
    date: Yup.string().required("Enter the Date"),
    consultant: Yup.string().required("Select Doctor Name"),
    referred: Yup.string(),
    serviceList: Yup.array()
        .of(
            Yup.object().shape({
                servicetype: Yup.string().required('select service type'),
                rate: Yup.number().required('Enter price'),
                qty: Yup.number().required('Enter Quantity'),
                unit: Yup.number(),
                discount: Yup.number(),
                total: Yup.number().required(),
                remarks: Yup.string()

            })
        )
})

export default function OPDRegistration() {
    const [selectDoctor, setSelectDoctor] = useState()
    const [doctorName, setDoctorName] = useState("")

    const newService = { servicetype: '', rate: '', qty: '', unit: '', discount: '', total: '', remarks: '' }

    const Doctor = ['Choose Doctor', 'Dr Vivek', 'Dr Ananya', 'Dr Abhishek', 'Dr vishal', 'Dr Shipra']
    const DocterService = [
        {
            date: '02/03/2018',
            consultant: 'Dr Vivek',
            referred: '',
            serviceList: [{
                servicetype: 'stitching', rate: '20', qty: '2', unit: '', discount: '', total: '400', remarks: '',
            },
            {
                servicetype: 'ed', rate: '20', qty: '2', unit: '', discount: '', total: '400', remarks: ''

            }
        ]
        },
        {
            date: '02/03/2018',
            consultant: 'Dr Ananya',
            referred: '',
            serviceList: [{
                servicetype: 'stitching', rate: '100', qty: '2', unit: '', discount: '', total: '400', remarks: ''
            }]
        },
        {
            date: '02/03/2018',
            consultant: 'Dr Abhishek',
            referred: '',
            serviceList: [{
                servicetype: 'stitching', rate: '100', qty: '2', unit: '', discount: '', total: '400', remarks: ''
            }]
        }
    ]
    const HandleChange = (e) => {
        let data = e.target.value
        setDoctorName(data)
        let showData = DocterService.filter((item) => {
            if (item.consultant === data)
                return item
        })
        setSelectDoctor(showData[0])
    }
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
                    <table>
                        <tbody>
                            <tr>
                                <td>Date*</td>
                                <td>
                                    <TextField placeholder='Enter Date' /> </td>
                            </tr>
                            <tr>
                                <td>Consultant</td>
                                <td >
                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-label">Doctor</InputLabel>
                                    
                                    <Select onChange={HandleChange} labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={doctorName}
                                        label="Doctor">
                                        {Doctor.map((value, index) => (<MenuItem value={value} key={index}>{value}</MenuItem>))}
                                    </Select>
                                    </FormControl>
                                </td>
                            </tr>
                            <tr>
                                <td>Referred By</td>
                                <td>
                                    <TextField placeholder='Enter Referrence' /> </td>
                            </tr>
                        </tbody>
                    </table>
                   
                </div>
                

            </div>

            <div>
                        {selectDoctor && <PatientServiceDetail selectDoctor={selectDoctor}/>}
                    </div>
        </div >
    )
}
