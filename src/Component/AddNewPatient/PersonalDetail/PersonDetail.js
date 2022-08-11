import React from 'react'
import './PersonalDetail.css'



export default function PersonDetail({ formik }) {
    const IDType = ['Adhaar Card', 'Pan Card']
    return (
        <div className='personDetail-container'>
            <div className='component-heading'>Personal Detail</div>
            <div className='personDetail-row1'>
                <span >
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                </span>
                <span>
                    <label htmlFor="age">Age</label>
                    <input
                        id="age"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.age}
                    />
                </span>
                <span>
                    <label htmlFor="sex">Sex</label>
                    <input
                        id="sex"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.sex}
                    />
                </span>
            </div>
            <div className='personDetail-row2'>
                 <span>
                <label htmlFor="mobile">Mobile</label>
                <input
                    id="mobile"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.mobile}
                />
                </span>
                <span>
                <label htmlFor="GovtID">Govt Issued ID</label>
                <select name="idType" className='IDType'
                    onChange={formik.handleChange}
                    value={formik.values.idType}>
                    <option value="">ID type</option>
                    {IDType.map((value, index) => (
                        <option key={index} value={value}>{value}</option>
                    ))}
                </select>
                <input
                    id="idDetail"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.idDetail}
                />
                </span>
            </div>
        </div>
    )
}
