const express = require("express");
const Tutor = require("../models/tutorModel");
const router = express.Router();

/**
 *@swagger
 * /api/tutor:
 *  get:
 *      description: Retrieve all tutors.
 *      responses:
 *          200:
 *          description:  Sucessfully retrieved
 */
router.get("/", async (req, res) => {
  try {
    // Fetch items from MongoDB
    const subjects = req.query.subject;
    let query = {};
    if (subjects) {
      // If subjects is a single string, convert it to an array
      const subjectsArray = Array.isArray(subjects) ? subjects : [subjects];
      // Filter tutors who teach any of the subjects in the array
      query = { subjects: { $in: subjectsArray } };
    }
    const tutors = await Tutor.find(query);
    res.json(tutors);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

/**
 *@swagger
 * /api/tutor/{id}:
 *  get:
 *      description: Retrieve an individual tutor.
 *      responses:
 *          200:
 *          description:  Sucessfully retrieved
 */
router.get("/:id", async (req, res) => {
  try {
    // Fetch one tutor from MongoDB
    const id = req.params.id;
    const tutor = await Tutor.findOne({ _id: id });
    res.json(tutor);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

/**
 *@swagger
 * /api/tutor:
 *  post:
 *      description: Create a new tutor.
 *      responses:
 *          200:
 *          description:  Sucessfully retrieved user
 */

router.post("/", async (req, res) => {
  const { name, subjects, rate } = req.body;
  try {
    const tutor = await Tutor.create({ name, subjects, rate });
    res.status(200).json(tutor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/**
 *@swagger
 * /api/tutor:
 *  delete:
 *      description: Deletes a tutor.
 *      responses:
 *          200:
 *          description:  Sucessfully Deleted
 */
router.delete("/:id", (req, res) => {
  res.json({ mssg: "Remove a Tutor" });
});

/**
 *@swagger
 * /api/tutor:
 *  patch:
 *      description: Update a tutor.
 *      responses:
 *          200:
 *          description:  Sucessfully Updated
 */
router.patch("/", (req, res) => {
  res.json({ mssg: "Update a tutor" });
});

module.exports = router;
