import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const AddUser = () => {
    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [error, setError] = useState('')

    const handleAddUser = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://reqres.in/api/users', {name, job});
            console.log("User Berhasil Ditambahkan: ", response.data);
            setError('');

            // Redirect

        } catch (error) {
            console.log('Gagal nemabhah data user: ', error.response.data);
            setError('Gagal menambah data user');
        }
    }

    return (
        <>
            <h2>Add User</h2>
            <Form onSubmit={handleAddUser}>
                <Form.Group as={Row} className="mb-3" controlId="formhorizontalName">
                    <Form.Label column sm={2}>
                        Name
                    </Form.Label>
                    <Col sm={10}> 
                        <Form.Control type="text" placeholder="Name" name="name" value={name} onChange={(event) => setName(event.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formhorizontalJob">
                    <Form.Label column sm={2}>
                        Job
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Job" name="job" value={job} onChange={(event) => setJob(event.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Add User</Button>
                    </Col>
                </Form.Group>
            </Form>
        </>
    )    
}

export default AddUser;