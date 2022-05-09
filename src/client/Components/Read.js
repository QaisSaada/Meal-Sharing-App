import React,  { useEffect, useState }  from 'react'
import { Link  } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import '../StyleComp/Read.css'; 


const Read = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [checkbox, setCheckbox] = useState(false); 
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState(''); 
    const [maxreservations, setMaxreservations] = useState(null);
    const [createddate, setCreateddate] = useState(new Date())
    const [whenn, setWhenn] = useState(new Date()) 
    const [id, setID] = useState(null)    
const [APIData, setAPIData] = useState([]);
useEffect(() => {
    fetch(/* props.api +  */"/api/meals/", {method: "GET"})
    .then(response => response.json())
    .then((data) => {
      console.log("Got response");
      console.log(data);
      setAPIData(data);
    }).catch(err => console.log(err))
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
    fetch(props.api + "/api/meals/" + {id}, {method: "DELETE"}).then(() => {
    getData();
 })
 } 

const getData = () => {
    fetch(props.api + "/api/meals/", {method: "GET", body: JSON.stringify({title,
        description,
        location,
        price,
        maxreservations,
        createddate,
        whenn})
    }).then((getData) => {
    setAPIData(getData.data);
         })
}
  return (
  <div>
      <h1>Featured meals</h1>
      <div className='item-container'>
        {APIData.map((data) => (
          <div className='card' key={data.id}>
            <img src={""} alt='' />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <p>{data.price}</p>
            <Link to = '/update'>
            <Button onClick={() => setData(data)}>Update</Button>
            </Link>
            <Link to={`/meals/${data.id}`}>
            <Button>View</Button>
            </Link>
{/*             <Button onClick={() => onDelete(data)}>Delete</Button>
 */}          </div>
          
        ))}
      </div>
    </div>);
};

export default Read;



