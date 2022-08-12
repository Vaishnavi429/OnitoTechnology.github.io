import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import './PersonalDetail.css'



export default function PersonDetail({ formik }) {
    const IDType = ['Adhaar Card', 'Pan Card']
    return (
        <div className='personDetail-container'>
            <div className='component-heading'>Personal Detail</div>
            <div className='personDetail-row1'>
                <span>

                    <label htmlFor="name">Name</label>
                    <TextField
                        id="name"
                        type="text"
                        label="Name"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                </span>
                <span>
                    <label htmlFor="age">Age</label>
                    <TextField
                        id="age"
                        type="text"
                        label="Age"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.age}
                    />
                </span>
                <span>
                    <label htmlFor="sex">Sex</label>
                    <TextField
                        id="sex"
                        type="text"
                        label="sex"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.sex}
                    />
                </span>
            </div>
            <div className='personDetail-row2'>
                <span>
                    <label htmlFor="mobile">Mobile</label>
                    <TextField
                        id="mobile"
                        type="text"
                        label="Mobile"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.mobile}
                    />
                </span>
                <span>
                    <label htmlFor="govtID">Govt Issued ID</label>

                    <FormControl sx={{ minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">ID Type</InputLabel>
                        <Select
                            name='IDtype'
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={formik.values.IDtype}
                            label="ID type"
                            onChange={formik.handleChange}
                        >
                            {IDType.map((value, index) => (
                                <MenuItem key={index} value={value}>{value}</MenuItem>
                            ))}
                        </Select>

                    </FormControl>
                    <TextField
                        id="idDetail"
                        type="text"
                        label="ID Detail"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.idDetail}
                    />
                </span>
            </div>
        </div>
    )
}
