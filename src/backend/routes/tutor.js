const express = require("express");
const Tutor = require("../models/tutorModel");
const adminCheck = require("../adminCheck.js");
const router = express.Router();

router.use(adminCheck);

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
      query = {
        subjects: {
          $in: subjectsArray.map((subject) => new RegExp(`^${subject}$`, "i")),
        },
      };
    }
    const tutors = await Tutor.find(query).select("-pdf -pdfMetaData -about");
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
    const tutor = await Tutor.findOne({ _id: id }).select("-pdf");
    res.json(tutor);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/pdf/:id", async (req, res) => {
  try {
    // Fetch only pdf in tutor from MongoDB
    const id = req.params.id;
    const tutor = await Tutor.findOne({ _id: id }).select("pdf");
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
  // const { name, subjects, rate } = req.body;
  try {
    const tutor = await Tutor.create(req.body);
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
router.delete("/:id", async (req, res) => {
  console.log(req.body);
  try {
    const { id } = req.params;
    const tutor = await Tutor.findByIdAndDelete(id);

    if (!tutor) {
      return res.status(404).json({ message: "Tutor not found" });
    }

    res.json({ message: "Tutor deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
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
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const tutor = await Tutor.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!tutor) {
      return res.status(404).json({ message: "Tutor not found" });
    }

    res.json({ message: "Tutor updated successfully", tutor });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
