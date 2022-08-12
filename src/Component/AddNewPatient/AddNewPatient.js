import  {useState} from 'react'
import { useFormik } from 'formik'
import { Button } from '@mui/material';
import * as Yup from 'yup';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import './AddNewPatient.css'
import PersonDetail from './PersonalDetail/PersonDetail'
import ContactDetail from './ContactDetail/ContactDetail'
import AddressDetail from './AddressDetail/AddressDetail'
import OtherDetail from './OtherDetail/OtherDetail'


export default function AddNewPatient() {
   
    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            sex: '',
            mobile: '',
            IDtype: '',
            IDDetail: '',
            guardianLabel: '',
            guardainName: '',
            email: '',
            emergencyContactNo: '',
            address: '',
            state: '',
            city: '',
            country: '',
            pincode: '',
            occupation: '',
            religion: '',
            martialStatus: '',
            bloodGroup: '',
            nationality: 'India'
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Name must be fill'),
            age: Yup.string()
                .required('Age must be fill'),
            sex: Yup.string()
                .required('sex must be fill'),
        
        }),


        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        }
        
    })
    let errorValue = Object.values(formik.errors)[0]
           
    return (
        <div className='addnewpatient-container'>
            <form onSubmit={formik.handleSubmit}>
                <div className='addnewpatient-form'>
                    <PersonDetail formik={formik} />
                    <ContactDetail formik={formik} />
                    <AddressDetail formik={formik} />
                    <OtherDetail formik={formik} />
                    <div className='addnewpatient-button'>
                        <div className='formInput-error'>
                        {errorValue && <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert variant="filled" severity="error">
                                {errorValue}
                            </Alert>
                        </Stack>}
                        </div>

                        <Button type="cancel" variant="outlined" >Cancel</Button>
                        <Button type="submit" variant="contained" color="success" >Submit</Button>
                    </div>
                </div>
            </form>

        </div>
    )
}
