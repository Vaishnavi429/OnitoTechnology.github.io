import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { Button } from '@mui/material';
import './OPDRegistration.css'
import ServiceNewRow from './PatientServiceDetail/ServiceNewRow/ServiceNewRow';
import * as Yup from "yup";

const DoctorvalidationSchema = Yup.object.shape({
    date : Yup.string().required("Enter the Date"),
    consultant : Yup.string().required("Select Doctor Name"),
    referred :Yup.string(),
    serviceList:Yup.array()
    .of(
        Yup.object().shape({
            servicetype:Yup.string().required('select service type'),
            rate:Yup.number().required('Enter price'),
            qty:Yup.number().required('Enter Quantity'),
            unit : Yup.number(),
            discount:Yup.number(),
            total:Yup.number().required(),
            remarks:Yup.string()

        })
    )
    
})

export default function OPDRegistration() {
    const [selectDoctor, setSelectDoctor] = useState()

    const newService = { servicetype: '', rate: '', qty: '', unit: '', discount: '', total: '', remarks: '' }

    const Doctor = ['Choose Doctor', 'Dr Vivek', 'Dr Ananya', 'Dr Abhishek', 'Dr vishal', 'Dr Shipra']
    const DocterService = [
        {
            date: '02/03/2018',
            consultant: 'Dr Vivek',
            referred: '',
            serviceList: [{
                servicetype: 'stitching', rate: '20', qty: '2', unit: '', discount: '', total: '400', remarks: ''
            }]
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
        let showData = DocterService.filter((item) => {
            if (item.consultant === data)
                return item
        })
        setSelectDoctor(showData[0])
        console.log(showData);
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
                    <Formik
                        initialValues={{
                            date: '',
                            consultant: '',
                            referred: '',
                            serviceList: []
                        }}
                        validationSchema={DoctorvalidationSchema}
                        onSubmit={(values) => {
                            console.log(values)
                        }}>
                        {({ values,error }) => (
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
                                                <div><ErrorMessage name="date"/></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="opdRegistration-form_label">Consultant</td>
                                            <td>

                                                <Field as="select" name="consultant" onChange={HandleChange}>
                                                    {Doctor.map((value, index) =>
                                                        (<option key={index} value={value}>{value}</option>))}
                                                </Field>
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
                                <FieldArray name='serviceList'
                                    render={(arrayHelper) => (
                                        <div>
                                            {values.serviceList.map((item, index) => (
                                                <div key={index}>
                                                    <ServiceNewRow arrayHelpers={arrayHelper} serviceList={values.serviceList} index={index} />

                                                </div>
                                            ))}
                                            <Button type='button' onClick={() => arrayHelper.push(newService)}>Add </Button>
                                        </div>

                                    )}

                                />
                                <Button type='submit'>Add submit</Button>
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
