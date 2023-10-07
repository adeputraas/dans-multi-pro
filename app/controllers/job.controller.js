const { default: axios } = require("axios");
const Participant = require("../models/job.model.js");
const validateRequest = require('../validator/job.validator.js');

// Create and Save a new Participant
exports.create = async (req, res) => {
  try {
    const retrieveValidRequest = await validateRequest.create(req.body);

    // Create a Participant
    const participant = new Participant(retrieveValidRequest);

    // Insert Database
    await Participant.create(participant);
    res.status(200).send({error: false,  response: 'Success Create Participants!'})

  } catch (error) {
      res.status(200).send({error: true,  response: error.message})
  }
};

// Retrieve all Tutorials from the database (with condition).
exports.findAll = async (req, res) => {
    try {  

      // const retrieveValidRequest = await validateRequest.retrieveAll(req.body); 

      let url = process.env.URL_JOBS + "/api/recruitment/positions.json";

      if(req.body.page) {
        url += `?page=${req.body.page}`;
      }

      let retrieveListJobs = await axios.get(url).then((response) => response.data);

      if(req.body.description) {
        retrieveListJobs = retrieveListJobs.filter(job => job.description.includes(req.body.description));
      }

      if(req.body.location) {
        retrieveListJobs = retrieveListJobs.filter(job => job.location.includes(req.body.location));
      }

      if(req.body.full_time) {
        retrieveListJobs = retrieveListJobs.filter(job => job.type == "Full Time");
      }

      res.status(200).send({error: false,  response: retrieveListJobs})
  
    } catch (error) {
        res.status(200).send({error: true,  response: error.message})
    }
  };

  // Retrieve all Tutorials from the database (with condition).
exports.findOne = async (req, res) => {
    try {
  
        const retrieveValidRequest = await validateRequest.readById(req.params);

        let url = process.env.URL_JOBS + "/api/recruitment/positions.json";

        let retrieveListJobs = await axios.get(url).then((response) => response.data);
        retrieveListJobs = retrieveListJobs.filter(job => job.id == retrieveValidRequest.id );

        res.status(200).send({error: false,  response: retrieveListJobs})
  
    } catch (error) {
        res.status(200).send({error: true,  response: error.message})
    }
  };

// Retrieve all Tutorials from the database (with condition).
exports.update = async (req, res) => {
    try {
  
        const retrieveValidRequest = await validateRequest.updateById({...req.params, ...req.body});

        // Create a Participant
        const participant = new Participant(retrieveValidRequest);
        await Participant.updateOne(participant);

        res.status(200).send({error: false,  response: 'Success Update Participants'})
  
    } catch (error) {
        res.status(200).send({error: true,  response: error.message})
    }
  };

  exports.deleteOne = async (req, res) => {
    try {
  
        const retrieveValidRequest = await validateRequest.readById(req.params);

        // Create a Participant
        const participant = new Participant(retrieveValidRequest);
        await Participant.deleteOne(participant);

        res.status(200).send({error: false,  response: 'Success Delete Participants!'})
  
    } catch (error) {
        res.status(200).send({error: true,  response: error.message})
    }
  };
