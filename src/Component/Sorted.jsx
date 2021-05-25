import React from 'react'
import {Form} from 'react-bootstrap'
import './../css/main.css'

export default function Sorted() {
    return (
        <div>
            <Form inline>
                <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                    Sorted by
                </Form.Label>
                <Form.Control
                    as="select"
                    className="my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    custom
                >
                    <option value="0">...</option>
                    <option value="1">Price</option>
                    <option value="2">Brand Name</option>
                </Form.Control>
            </Form>
        </div>
    )
}
