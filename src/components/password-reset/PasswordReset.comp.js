import React from 'react'

import {Container,Row,Col,Form, Button} from 'react-bootstrap'
import PropTypes from 'prop-types'

const ResetPassword = ({handleOnChange,email,handleOnResetSubmit, formSwitcher}) => {

  return (
    <Container>
        <Row>
            <Col>
            <h1 className='text-info text-center'>Reset Password</h1>
            <hr/>
            <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control onChange={handleOnChange} value={email} type="email" name="email" placeholder='Enter Email' required/>
                </Form.Group>
                
                <Button className='mt-3' type="submit">Reset Password</Button>
            </Form>
            <hr/>
            </Col>
        </Row>
        <Row>
            <Col>
            <a href="#p" onClick={() => formSwitcher("login")}>Login Now</a>
            </Col>
        </Row>
    </Container>
  )
}

ResetPassword.propTypes = {
    handleOnChange:PropTypes.func.isRequired,
    handleOnResetSubmit:PropTypes.func.isRequired,
    formSwitcher:PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    

}

export default ResetPassword