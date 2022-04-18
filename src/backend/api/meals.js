const { log } = require("debug");
const { response, request } = require("express");
const express = require("express");
const router = express.Router();
const knex = require("../database");



/*router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meal").select("title");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});*/

//  all meals 
/*router.get("/", async (request, response) => {
try {
  const allMeals = await knex("meal").select();
  response.json(allMeals)
} catch (error) {
  throw error;
}
});
// Adds a new meal
router.post("/", async (request, response) => {
  try {
    await knex("meal").insert(request.body)
    response.json({"success": true})
  } catch (error) {
    response.json({"success": false})
    throw error;
  }
});
// Returns meal by id
router.get('/:id', async (request, response) => {
      const meal = await knex("meal").select().where({id: request.params.id});
      response.json(meal);
});

// updates the meal by id 
router.put("/:id", async (request, response) => {
  const meal = await knex("meal").where({id: request.params.id}).update(request.body);
  response.json(meal)
})
// Delete meal by ID
router.delete("/:id", async (request, response) => {
  const meal = await knex("meal").where({id: request.params.id}).del();
  response.json(meal);
})*/


// GET api/meals/ query parameters and you should make sure that you can combine them
/*router.get("/", async (request, response) => {
    if (request.query.maxPrice) {
      const maxPriceMeal = await knex("meal").select().where('price', '<', Number(request.query.maxPrice))
      response.json(maxPriceMeal)
    };
    if (request.query.availableReservations) {
      const availableMeals = await knex("meal")
      .join('reservation', 'mealid', 'reservations.mealid')
      .select('meal.id', 'title', 'maxreservatins')
      .where("maxreservation", ">", "numberofguests")
      response.json(availableMeals)
    };
    // a bit dif here just to try som new
    if ('title' in request.query) {
      const title = await knex("meal").where(meal.title);
      const getTitle = meals.find((meal) =>
      meal.title.toLowerCase().includes(title.toLowerCase()),
      response.send(getTitle)
      )};

    if ("createdAfter" in req.query) {
      const createdAfterMeals = await knex("meal").where("createddate", ">", req.query.createdAfter)
      response.json(createdAfterMeals)
    };

    if (limit.request.query) {
      const limitMeals =  await knex("meal").where.()
      if (meals.length >= 6) {
        meals.splice(0, limit)
      }
          response.send(limit)
  });*/

  router.get("/", async (request, response) => {
    const meals = await knex("meal").select();
    let filteredMealsByPrice = [];
    let filteredMealsByTitle = [];
    let filteredByDate = [];
    let filteredByLimit = [];
    let filteredByReservation = [];
    if (request.query.maxPrice) {
      filteredMealsByPrice = meals.filter(meal => Number(meal.price) < Number(request.query.maxPrice))
    } else { 
      filteredMealsByPrice = meals
    }
    if (request.query.title) {
      filteredMealsByTitle = filteredMealsByPrice.filter(meal =>
      meal.title.toLowerCase().includes(request.query.title.toLowerCase()))
    } else {
      filteredMealsByTitle = filteredMealsByPrice
    }
    if (request.query.createdAfter) {
      filteredByDate = filteredMealsByTitle.filter(meal => 
        meal.createddate > new Date(request.query.createdAfter))
    } else {
      filteredByDate = filteredMealsByTitle
    }
    if (request.query.limit) {
      filteredByLimit = filteredByDate.splice(0, request.query.limit)
    } else {
      filteredByLimit = filteredByDate
    }
    /*for(let i=0; i < reservation.mealid.length; i++) 
         const reservationId = reservation.mealid;
         if(request.query.availableReservations) {
          filteredByReservation = filteredByLimit.filter( meal => meal.id === reservationId)
         } else {
          filteredByReservation = filteredByLimit
        }*/

      /* for the last part -availableReservations I tried 2 solutions, the first was to use the .join knex method but that made
       a conflict when mixing queries. The second was to do these steps: 
        - make filteredByReservation an embty array
        - loop through reservations:
        - set mealid= reservation.mealid
        - if filteredByLimit has a meal with mealid:
        - add that meal to filteredByReservation 

        So I basically tried to JOIN using JavaScript.
        which makes sense in my head but when I try and code it I fail to make it work. 
        ps: please don't jud me for writing all of this and stoping at an if statment within a loop. 
      */ 
    response.json(filteredByLimit) //this here should be response.json(filteredByReservation) to make the task complete. 
    
  });

  module.exports = router;

  
     
     
      
     
             
     