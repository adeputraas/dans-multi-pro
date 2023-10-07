const User = require("../models/user.model.js");
const validateRequest = require('../validator/user.validator');
const jwt = require("jsonwebtoken");


exports.Login = async (req, res) => {
    try {
      const retrieveValidRequest = await validateRequest.login(req.body);
  
      // Create a Participant
      const user = new User(retrieveValidRequest);
  
      const token = jwt.sign(retrieveValidRequest, process.env.SECRET_KEY_APPLICATION, { expiresIn: '7d', algorithm: 'HS384' });
  
      res.status(200).send({ error: false, response: token });
    } catch (error) {
      res.status(200).send({ error: true, response: error.message });
    }
  };
  

// Create and Save a new User
exports.create = async (req, res) => {
  try {
    const retrieveValidRequest = await validateRequest.Create(req.body);

    // Create a User
    const user = new User(retrieveValidRequest);

    // Insert Database
    await User.create(user);
    res.status(200).send({error: false,  response: 'Success Create Users!'})

  } catch (error) {
      res.status(200).send({error: true,  response: error.message})
  }
};


// Retrieve all Tutorials from the database (with condition).
exports.findOne = async (req, res) => {
    try {
  
        const retrieveValidRequest = await validateRequest.readById(req.params);

        // Create a User
        const user = new User(retrieveValidRequest);
        let retrieveListUsers = await User.findOne(user);

        res.status(200).send({error: false,  response: retrieveListUsers})
  
    } catch (error) {
        res.status(200).send({error: true,  response: error.message})
    }
  };

