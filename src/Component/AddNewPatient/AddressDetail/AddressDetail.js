import React from 'react'
import './AddressDetail.css'

export default function AddressDetail({formik}) {
  let state = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"]

  return (
    <div className='addressDetail-container'>
        <div className='component-heading'>Address Detail</div>
      <div className='addressDetail-row1'>
        <span>
      <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.address}
        /></span>
        <span>
        <label htmlFor="state">State</label>
        <select name="state"
          onChange={formik.handleChange}
          value={formik.values.state}>
            <option value="">select State</option>

            {state.map((value,index)=>(
            <option key={index} value={value}>{value}</option>
            ))}
        </select></span>
        <span>
        <label htmlFor="city">City</label>
        <input
          id="addCityress"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.city}
        /></span>
      </div>
      <div className='addressDetail-row2'>
        <span >
      <label htmlFor="country">Country</label>
        <input
          id="country"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.country}
        /></span>
        <span>
         <label htmlFor="pincode">Pincode</label>
        <input
          id="pincode"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.pincode}
        /></span>
      </div>
    </div>
  )
}
