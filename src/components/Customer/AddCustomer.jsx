import React, { useState } from "react";

const AddCustomer = () => {

    const [customer, setCustomer] = useState({
        username: '',
        gender: '',
        email: '',
        address: ''
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        // console.log(name, value);

        setCustomer(
            {...customer, [name]: value}
        )
        // console.log(customer);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(customer);
    }

    return (
        <>
            <h1>Add Customer</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Nama Customer</label>
                    <input type="text" name="username" value={customer.username} onChange={handleChange} />

                    <div>
                        <input type="radio" name="gender" value="Laki-laki" onChange={handleChange} />
                        <label htmlFor="genderMale">Laki-laki</label>
                        <input type="radio" name="gender" value="Perempuan" onChange={handleChange} />
                        <label htmlFor="genderFemale">Perempuan</label>
                    </div>

                    <label>Email Customer</label>
                    <input type="text" name="email" value={customer.email} onChange={handleChange} />

                    <label>Alamat Customer</label>
                    <input type="text" name="address" value={customer.address} onChange={handleChange} />
                    
                    <button type="submit">Tambah Pengguna</button>
                </form>
            </div>
        </>
    )
}

export default AddCustomer;