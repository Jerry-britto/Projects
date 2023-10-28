const express = require("express");
const router = express.Router();
const {
  createUsers,
  showData,
  deleteProfile,
  showProfile,
  updateInfo
} = require("../controllers/User_controllers");
const data = {
  1: "apple",
  2: "orange",
};
router.get("/data", (req, res) => {
  res.json(data);
});

router.get("/jerry", (req, res) => {
  res.send("<h1>Hello Jerry</h1>");
});

// get request for retrieving all the user details
router.get("/getData", showData);

// get request for retrievig only a particular user details
router.get("/showInfo/:id",showProfile)

//post request for inserting a record in the database
router.post("/create", createUsers);

//put request for updating a specific record in the database
router.put('/updateInfo/:id',updateInfo)

// delete request for deleting a record
router.delete("/deleteInfo/:id", deleteProfile);

module.exports = router;
