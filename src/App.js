
import './App.css';
import AddNewPatient from './Component/AddNewPatient/AddNewPatient';
import OPDRegistration from './Component/OPDRegistration/OPDRegistration';
import { Formik, Form, Field, FieldArray } from 'formik'


function App() {
  return (
    <div>
      {/* <AddNewPatient/> */}
      <OPDRegistration/>
     
    </div>
  );
}

export default App;
