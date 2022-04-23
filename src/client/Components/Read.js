import React,  { useEffect, useState }  from 'react'
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Read = (props) => {
const [APIData, setAPIData] = useState([]);
useEffect(() => {
    axios.get(props.api + "/api/meals")
    .then((response) => {
        console.log("Got response");
        console.log(response.data);
        setAPIData(response.data);
    })
}, [])
const setData = (data) => {
    let { id,
        title,
        description,
        location,
        price,
        maxreservations,
        createddate,
        whenn,
        checkbox 
    } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('title', title);
    localStorage.setItem('description', description);
    localStorage.setItem('location', location);
    localStorage.setItem('price', price);
    localStorage.setItem('maxreservations', maxreservations);
    localStorage.setItem('createddate', createddate);
    localStorage.setItem('whenn', whenn);
    localStorage.setItem('Checkbox Value', checkbox)
 }

 const onDelete = (id) => {
 axios.delete(props.api + "/api/meals/" 
 + {id 
 , title 
 , description 
 , location 
 , price 
 , maxreservations 
 , createddate 
 , whenn
 , checkbox})
 .then(() => {
     getData();
 })
}

const getData = () => {
    axios.get(props.api + "/api/meals/")
    .then((getData) => {
    setAPIData(getData.data);
         })
}
  return (
            <Table singleLine>
                <Table.HeaderCell>Update</Table.HeaderCell>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>title</Table.HeaderCell>
                        <Table.HeaderCell>description</Table.HeaderCell>
                        <Table.HeaderCell>Location</Table.HeaderCell>
                        <Table.HeaderCell>maxrese rvations</Table.HeaderCell>
                        <Table.HeaderCell>createddate</Table.HeaderCell>
                        <Table.HeaderCell>price</Table.HeaderCell>
                        <Table.HeaderCell>whenn</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                 {APIData.map((data) => {
                  return ( 
                  <Table.Row   key={data.data}>
                  <Table.Cell  >{data.title}</Table.Cell>
                  <Table.Cell  >{data.location}</Table.Cell>
                  <Table.Cell  >{data.description}</Table.Cell>
                  <Table.Cell  >{data.price}</Table.Cell>
                  <Table.Cell  >{data.maxreservations}</Table.Cell>
                  <Table.Cell  >{data.createddate}</Table.Cell>
                  <Table.Cell  >{data.whenn}</Table.Cell>
{/*                   <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
 */}                  <Link to='/update'>
                  <Table.Cell> 
                  <Button onClick={() => setData(data)}>Update</Button>
                  </Table.Cell>
                  </Link>
                  <Table.Cell>
                 <Button onClick={() => onDelete(data.id)}>Delete</Button>
                 </Table.Cell> 
                </Table.Row>
   )})}
</Table.Body>
            </Table>
  )
}

export default Read;