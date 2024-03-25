import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        name: '',
        job: ''
    })

    useEffect(() => {
        const fecthUser = async () => {
            try {
                const response = await axios.get(`https://reqres.in/api/users/${id}`)
                console.log('Data user: ', response.data.data)

                setUserData(response.data.data)
            } catch (error) {
                console.log('Gagal mengambil data user')
            }
        }
        fecthUser();
    }, [id])

    const handleEditChange = (event) => {
        const { name, value } = event.target;

        setUserData((prevData) => (
            {...prevData, [name]: value}
        ))
    }

    const handleEditUser = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.put(`https://reqres.in/api/users/${id}`, userData);
            console.log(response.data)

            // navigate(-1)
        } catch (error) {
            console.log('Gagal edit user: ', error)
        }
    }

    return (
        <>
            <h2>Edit User {id}</h2>
            <Form onSubmit={handleEditUser}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalName" >
                    <Form.Label column sm={2}>
                        Name
                    </Form.Label>
                    <Col sm={10} >
                        <Form.Control type='text' placeholder="Name" name="name" value={userData.name} onChange={handleEditChange} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalJob" >
                    <Form.Label column sm={2}>
                        Job
                    </Form.Label>
                    <Col sm={10} >
                        <Form.Control type='text' placeholder="Job" name="job" value={userData.jon} onChange={handleEditChange} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2}} >
                        <Button type="submit">Update User Data</Button>
                    </Col>
                </Form.Group>
            </Form>
        </>
    )
}

export default EditUser;