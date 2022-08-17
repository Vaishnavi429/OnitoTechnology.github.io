
import './App.css';
import AddNewPatient from './Component/AddNewPatient/AddNewPatient';
import OPDRegistration from './Component/OPDRegistration/OPDRegistration';
import { Formik, Form, Field, FieldArray } from 'formik'
import DataTableExample from './Component/DataTableExample/DataTableExample';


function App() {
  
  
  return (
    <div>
      {/* <AddNewPatient/> */}
      {/* <OPDRegistration/> */}
      <DataTableExample/>
     
    </div>
  );
}

export default App;

