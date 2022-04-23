import React, {useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';


const Create = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [checkbox, setCheckbox] = useState(false); 
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [maxreservations, setMaxreservations] = useState(null);
    const [createddate, setCreateddate] = useState(new Date())
    const [whenn, setWhenn] = useState(new Date())
/*     const [id, setId] = useState(null)
 */


    
 
    const postData = () => {
     axios.post(props.api, {
         title,
         description,
         location,
         price,
         maxreservations,
         createddate,
         whenn,
         checkbox
     })
    }
    return (
    <Form className="create-form">
        <Form.Field>
            <label>Title</label>
            <input placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Description</label>
            <input placeholder='description' onChange={(e) => setDescription(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Location</label>
            <input placeholder='Location' onChange={(e) => setLocation(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Price</label>
            <input placeholder='Price' onChange={(e) => setPrice(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Maxreservations</label>
            <input placeholder='Maxreservations' onChange={(e) => setMaxreservations(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Created date</label>
            <input placeholder='Created date' onChange={(e) => setCreateddate(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>When </label>
            <input placeholder='When' onChange={(e) => setWhenn(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <Checkbox onChange={(e) => setCheckbox(!checkbox)} label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit' onClick={postData} >Submit</Button>
    </Form>
)}

export default Create;