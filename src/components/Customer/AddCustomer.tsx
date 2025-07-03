import React, { ChangeEvent, useState } from 'react'
import { Customer } from '../model/Customer'

const AddCustomer = () => {
    const [customer, setCustomer] = useState<Customer[]>([] as Customer[]);

    const handleCustomer=(event:ChangeEvent<HTMLInputElement>)=>{
        const {name, value}=event.target
        setCustomer({
            ...customer,
            [name]:value
        })
    }
  return (
    <div>   
        <h2>Add Customer Details</h2>
        <form>
        <table>
            <tbody>
                <tr>
                    <td>Customer Name</td>
                    <td><input type='text' name="name" onChange={handleCustomer}></input></td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>Male<input type='radio' name="male" onChange={handleCustomer}></input></td><td>Female<input type='radio' name="female" onChange={handleCustomer}></input></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button type='submit' >Submit</button></td>
                </tr>
            </tbody>
        </table>
        </form>
    </div>
  )
}

export default AddCustomer
