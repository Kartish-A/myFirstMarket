import React from 'react'
import '../css/main.css'
import {Card, Accordion} from 'react-bootstrap'

export default function SideBar() {
    return (
        <div className='sidebar'>
            <Accordion defaultActiveKey="1">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    Apparels
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>PANTS</Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>SHORTS</Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>TOPS</Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>JUMPSUITS</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <Accordion defaultActiveKey="1">
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    Accessories 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>ARMBAND</Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>BELTS</Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>HAND JEWELRY RINGS</Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>NECKLACE</Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>HAND WATCHES</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <Accordion defaultActiveKey="1">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    OTHERS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>EVERYDAY ACCESSORIES</Card.Body>
                    </Accordion.Collapse>
                    </Card>
            </Accordion>
        </div>
    )
}
