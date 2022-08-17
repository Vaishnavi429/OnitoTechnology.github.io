
import { Button } from '@mui/material';
import ServiceNewRow from './ServiceNewRow/ServiceNewRow'
import { FieldArray, Form, Formik } from 'formik';
import './PatientServiceDetail.css'
export default function PatientServiceDetail({ selectDoctor }) {
       console.log(selectDoctor);
    const newService = { servicetype: '', rate: '', qty: '', unit: '', discount: '', total: '', remarks: '' }
    return (<>
        <Formik
            initialValues={{
                date:selectDoctor.date ,
                consultant: selectDoctor.consultant,
                referred: '',
                serviceList: selectDoctor.serviceList || []
            }}
            onSubmit={(values) => {
                console.log(values)
            }}>
            {({ values, errors }) => (
                <Form>
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


    </>

    )
}
