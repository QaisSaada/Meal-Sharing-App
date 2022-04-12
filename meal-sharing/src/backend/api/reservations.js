const { log } = require("debug");
const { response } = require("express");
const express = require("express");
const router = express.Router();
const knex = require("../database");

//  all Reservations 
router.get("/", async (request, response) => {
try {
  const allReservations = await knex("reservation").select();
  response.json(allReservations)
} catch (error) {
  throw error;
}
});
// Adds a new reservation

router.post("/", async (request, response) => {
  try {
    await knex("reservation").insert(request.body)
    response.json({"success": true})
  } catch (error) {
    response.json({"success": false})
    throw error;
  }
});
// Returns reservation by id

router.get('/:id', async (request, response) => {
      const reaservation = await knex("reservation").select().where({id: request.params.id});
      response.json(reaservation);
});

// updates the reservation by id 
router.put("/:id", async (request, response) => {
  const reservation = await knex("reservation").where({id: request.params.id}).update(request.body);
  response.json(reservation)
})
// Delete reservation by ID
router.delete("/:id", async (request, response) => {
  const reservation = await knex("reservation").where({id: request.params.id}).del();
  response.json(reservation);
})




module.exports = router;