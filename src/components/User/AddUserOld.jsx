import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const AddUserOld = () => {
  
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        gender: '',
        hobi: [],
        rememberMe: false
    })

    const handleUserChange = (event) => {
        const {name, value, type, checked} = event.target
        // console.log(name, value)

        if (type === 'checkbox') {
            if (name === 'rememberMe') {
                if (event.target.checked === true) {
                    setUser({...user, [name]: true})
                } else if (event.target.checked === false) {
                    setUser({...user, [name]: false})
                }
            } else {
                const {name, value, checked} = event.target
                const updatedHobby = checked
                ? [...user[event.target.name], value]
                : user[event.target.name].filter((item) => item != value)
                
                if (event.target.checked === true) {
                    setUser({...user, [name]: [...updatedHobby]})
                } else if (event.target.checked === false) {
                    setUser({...user, [name]: [...updatedHobby]})
                }
            }
        } else {
            setUser({...user, [name]: value})
        }
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);
        // alert(user);
    }

  return (
    <Container>
      <h2>Add User</h2>
      <Row>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formhorizontalName">
            <Form.Label column sm={2}>
                Name
            </Form.Label>
            <Col sm={10}>
                <Form.Control type="text" placeholder="Name" name="name" value={user.name} onChange={handleUserChange} />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" name="email" value={user.email} onChange={handleUserChange} />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={handleUserChange} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
                Genre
            </Form.Label>
            <Col>
                <Form.Check
                    type="radio"
                    label="Laki-Laki"
                    value="laki-laki"
                    name="gender"
                    id="genderMale"
                    onChange={handleUserChange}
                />
                <Form.Check
                    type="radio"
                    label="Perempuan"
                    value="perempuan"
                    name="gender"
                    id="genderFemale"
                    onChange={handleUserChange}
                />
            </Col>
        </Form.Group>

        {/* <fieldset> */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
              Hobi
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                label="badminton"
                value="badminton"
                name="hobi"
                id="hobi1"
                onChange={handleUserChange}
              />
              <Form.Check
                label="gaming"
                value="gaming"
                name="hobi"
                id="hobi2"
                onChange={handleUserChange}
              />
              <Form.Check
                label="bycycling"
                value="bycycling"
                name="hobi"
                id="hobi3"
                onChange={handleUserChange}
              />
            </Col>
          </Form.Group>
        {/* </fieldset> */}
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" name="rememberMe" onChange={handleUserChange} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Add User</Button>
          </Col>
        </Form.Group>
      </Form>
      </Row>
    </Container>
  );
};

export default AddUserOld;
