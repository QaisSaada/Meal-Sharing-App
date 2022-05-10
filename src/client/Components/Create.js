import React, {useState} from 'react'
import { useParams } from "react-router-dom";
import { Form, Checkbox, Button } from 'semantic-ui-react'; 
import '../StyleComp/Create.css'; 



const Create = (props) => {
    const params = useParams();
    const [numberofguists, setNumberofguists] = useState('');
/*     const [mealid, setMealid] = useState(Number);
 */    const [createddate, setCreateddate] = useState(false); 
    const [contactphonenumber, setContactphonenumber] = useState('');
    const [contactname, setContactname] = useState('');
    const [contactemail, setContactemail] = useState(null);

 
    const postData = (e) => {
    e.preventDefault()
    fetch(props.api + "/api/reservations/", {method: "POST", headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({numberofguists,
        /* mealid, */
        createddate,
        contactphonenumber,
        contactname,
        contactemail,
        })
    }).then(res => console.log(res)).catch(err => console.log(err))
    .then(alert("Your booking has been made"))
    }

    
    return (
    <Form className="create-form">
        <Form.Field>
            <label>number of guists</label>
            <input placeholder='' onChange={(e) => setNumberofguists(e.target.value)} />
        </Form.Field>
        {/* <Form.Field>
            <label>meal id</label>
            <input placeholder='' onChange={(e) => setMealid(e.target.value)} />
        </Form.Field> */}
        <Form.Field>
            <label>contact phonen number</label>
            <input placeholder='' onChange={(e) => setContactphonenumber(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>contact name</label>
            <input placeholder='' onChange={(e) => setContactname(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>contact email</label>
            <input placeholder='' onChange={(e) => setContactemail(e.target.value)} />
        </Form.Field>
        
        
        {/* <Form.Field>
            <Checkbox onChange={(e) => setCheckbox(!checkbox)} label='I agree to the Terms and Conditions' />
        </Form.Field> */}
        <Button type='submit' onClick={postData} >Submit</Button>
    </Form>
)}

export default Create;