import React, { useState,useEffect } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb.comp'
import AddTicketForm from '../../components/add-ticket-form/AddTicketForm.comp'
import { shortText } from "../../utils/validation";





const initialFrmData = {
    subject:"",
    issueDate:"",
    detail:""
}

const initialFrmError = {
    subject: false,
    issueDate: false,
    detail: false,
  };

const AddTicket = () => {
    const [frmData,setFrmData] = useState(initialFrmData);
    const [frmDataErro, setFrmDataErro] = useState(initialFrmError);

    useEffect(() => {

    },[frmData,frmDataErro])

    const handleOnChange = (e) =>{
        const {name,value } = e.target

        setFrmData({
            ...frmData,
            [name]:value,
        });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        setFrmDataErro(initialFrmError)

        const isSubjectValid= await shortText(frmData.subject)

        setFrmDataErro({
            ...initialFrmError,
            subject:!isSubjectValid,
        }) 




        console.log("Form submit request received")
    }

  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="New Ticket"/>
            </Col>
        </Row>
        <Row>
            <Col>
            <AddTicketForm handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} frmData={frmData} frmDataErro={frmDataErro}/>
            </Col>
        </Row>
    </Container>
  )
}

export default AddTicket