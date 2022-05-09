import React, { useState, useEffect } from 'react';
import { Link, useParams  } from 'react-router-dom';



const Meal = () => {
  const [data, setData] = useState([]);
  let {id} = useParams();

  useEffect(() => {
    fetchMeal();
  }, []);

  const fetchMeal = () => {
    fetch(`/api/meals/${id}` , {method: "GET", headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then((data) => {
          setData(data);
          console.log(data);
        })
        .catch((err) => console.log(err));
    }

  return (
    <div>
      {data.map((data) => {
        return (
          <div className='meal-container' key={data.id}>
            <div>
              <img className='meal-image' src={""} alt='' />
            </div>
            <div>
              <h1 className='Food'>{data.title}</h1>
              <h2>{data.meal}</h2>
              <p>{data.description}</p>
              <p>
                <strong>Price:</strong> {data.price}
              </p>
              <p>
                <strong>When:</strong> {data.whenn}
              </p>
            </div>
          </div>
        );
      })}
      <div className='back'>
        <Link to='/meal'>Featured meals</Link>
      </div>
    </div>
  );
  };
  export default Meal;