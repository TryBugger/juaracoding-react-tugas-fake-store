import React, { useState } from "react";

const AddProduct = () => {

    const [productName, setProductName] = useState('');
    const [rackNumber, setRackNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Nama Produk ${productName} berada di rak nomor ${rackNumber}`);
    }
 
    return (
        <>
            <div>AddProduct</div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Nama Produk</label>
                    <input type="text" value={productName} onChange={(event) => setProductName(event.target.value)}/>
                    <input type="number" value={rackNumber} onChange={(event) => setRackNumber(event.target.value)} />
                    <button type="submit">Kirim</button>
                </form>
            </div>
            {/* <div>Hasil Input Nama Produk: {productName}</div> */}
        </>
    )

}

export default AddProduct;