import React from 'react'
import {Form,Button} from 'react-bootstrap'

const UpdateTicket = ({msg,handleOnChange,handleOnSubmit}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
        <Form.Label>Reply</Form.Label>
        <br/>
        <Form.Text>Please reply your message here or update the ticket</Form.Text>
        <Form.Control 
        value={msg} onChange={handleOnChange} as="textarea" row="5" name="detail"/>
        <div className='text-end mt-3 mb-3'>
        <Button style={{color:"#fff"}} variant='info' type="submit">Reply</Button>
        </div>
    </Form>
  )
}

export default UpdateTicket