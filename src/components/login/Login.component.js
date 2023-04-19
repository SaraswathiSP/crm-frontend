import React from 'react'

import {Container,Row,Col,Form, Button} from 'react-bootstrap'
import PropTypes from 'prop-types'

const LoginForm = ({handleOnChange,email,password,handleOnSubmit,formSwitcher}) => {

  return (
    <Container>
        <Row>
            <Col>
            <h1 className='text-info text-center'>Client Login</h1>
            <hr/>
            <Form autoComplete='off' onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control onChange={handleOnChange} value={email} type="email" name="email" placeholder='Enter Email' required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleOnChange} type="password" name="password" value={password} placeholder='Enter Password' required/>
                </Form.Group>
                <Button className='mt-3' type="submit" >Login</Button>
            </Form>
            <hr/>
            </Col>
        </Row>
        <Row>
            <Col>
            <a href="#p" onClick={() => formSwitcher("reset")}>Forgot Password?</a>
            </Col>
        </Row>
    </Container>
  )
}

LoginForm.propTypes = {
    handleOnChange:PropTypes.func.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,

}

export default LoginForm