import React, { useState } from "react";

const AddProductObject = () => {

    const [product, setProduct] = useState({
        name: "", 
        category: "", 
        price: "", 
        description: ""
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name, value);

        setProduct({ ...product, [name]: value })
        // console.log(product);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(product);
        // next step bisa dilakukan operasi pada saat pengiriman data produk
    }

    return (
        <>
            <h1>AddProduct</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Nama Produk</label>
                    <input type="text" name="name" value={product.name} onChange={handleChange}/>
                    <select name="category" value={product.category} onChange={handleChange}>
                        <option value={"PC Gaming"}>PC Gaming</option>
                        <option value={"PC Kantor"}>PC Kantor</option>
                        <option value={"Server"}>Server</option>
                    </select>
                    <label>Harga</label>
                    <input type="number" name="price" value={product.price} onChange={handleChange} />
                    <label>Deskripsi</label>
                    <input type="text" name="description" value={product.description} onChange={handleChange}/>

                    <button type="submit">Tambah Produk</button>
                </form>
            </div>
        </>
    )
}

export default AddProductObject;