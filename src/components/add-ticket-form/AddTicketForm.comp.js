import React from "react";

import {
  Form,
  Row,
  Col,
  Button,
  
} from "react-bootstrap";

import "./add-ticket-form.style.css";



const AddTicketForm = ({handleOnChange,handleOnSubmit,frmData,frmDataErro}) => {
  

  return (
    <div className="mt-3 add-new-ticket bg-light" style={{ padding: "1rem 2rem",
    marginBottom: "2rem",
    backgroundColor: "#e9ecef",
    borderRadius: ".3rem",
    boxShadow: "0 0 15px -5px black"}}
    >
      <h1 className="text-info text-center">Add New Ticket</h1>
      
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={frmData.subject}
              // minLength="3"
              maxLength="100"
              onChange={handleOnChange}
              placeholder="Subject"
              required
            />
            <Form.Text className="text-danger">
              {frmDataErro.subject && "SUbject is required!"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmData.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            rows="5"
            value={frmData.detail}
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="info" block>
          Open Ticket
        </Button>
      </Form>
    </div>
  );
};

// AddTicketForm.propTypes = {
//   handleOnSubmit: PropTypes.func.isRequired,
//   handleOnChange: PropTypes.func.isRequired,
//   frmDt: PropTypes.object.isRequired,
//   frmDataErro: PropTypes.object.isRequired,
// };


export default AddTicketForm