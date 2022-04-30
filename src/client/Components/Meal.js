import React, { useState, useEffect } from 'react';

const Meal = () => (/* {match} */) => {
    const [data, setData] = useState([]);

    useEffect(() => {
    fetchMeal();
    }, []);

  const fetchMeal = () => {
    fetch(`http://localhost:3000/api/meals/${match.params.id}` , {method: "GET", headers: {'Content-Type': 'application/json'}
    }).then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    };
  return (
    <div>
      {data.map((meal) => {
        return (
          <div className='meal-container' key={meal.id}>
            <div>
              <img className='meal-image' src={""} alt='' />
            </div>
            <div>
              <h1 className='Food'>{meal.title}</h1>
              <h2>{meal.meal}</h2>
              <p>{meal.description}</p>
              <p>
                <strong>Price:</strong> {meal.price}
              </p>
              <p>
                <strong>When:</strong> {meal.whenn}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
  };
  export default Meal;