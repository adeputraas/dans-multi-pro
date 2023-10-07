const sql = require("./db.js");
const uuid = require('uuid')

// constructor
const Participants = function(tutorial) {
  this.id = tutorial.id || uuid.v4();
  this.name = tutorial.name;
  this.email = tutorial.email;
  this.x = tutorial.valueX;
  this.y = tutorial.valueY;
  this.z = tutorial.valueZ;
  this.w = tutorial.valueW;
};

Participants.create = async (newParticipants) => {
    try {
        const results = await new Promise((resolve, reject) => {
            sql.query(
                /* sql */ `INSERT INTO participant SET ?`, newParticipants
                ,
                (err, res) => {
                    if (err) reject(err);
                    resolve(res);
                }
            );
        })
            .then((response) => response)
        return results;
    } catch (error) {
        throw error;
    }
};

Participants.getAll = async () => {
    try {
        const results = await new Promise((resolve, reject) => {
            sql.query(
                /* sql */ `SELECT * FROM participant`, []
                ,
                (err, res) => {
                    if (err) reject(err);
                    resolve(res);
                }
            );
        })
            .then((response) => response)
        return results;
    } catch (error) {
        throw error;
    }
};

Participants.findOne = async (newParticipants) => {
    try {
        const results = await new Promise((resolve, reject) => {
            sql.query(
                /* sql */ `SELECT * FROM participant WHERE id =?`, [newParticipants.id]
                ,
                (err, res) => {
                    if (err) reject(err);
                    resolve(res);
                }
            );
        })
            .then((response) => response)
        return results;
    } catch (error) {
        throw error;
    }
};

Participants.updateOne = async (newParticipants) => {
    try {
        const dto = [newParticipants.name, newParticipants.email, newParticipants.x, newParticipants.y, newParticipants.z, newParticipants.w, newParticipants.id]
        const results = await new Promise((resolve, reject) => {
            sql.query(
                /* sql */ `UPDATE participant SET name=?, email=?, x=?, y=?, z=?, w=? WHERE id=?`, dto
                ,
                (err, res) => {
                    if (err) reject(err);
                    resolve(res);
                }
            );
        })
            .then((response) => response)
        return results;
    } catch (error) {
        throw error;
    }
};

Participants.deleteOne = async (newParticipants) => {
    try {
        const results = await new Promise((resolve, reject) => {
            sql.query(
                /* sql */ `DELETE FROM participant WHERE id=? `, [newParticipants.id]
                ,
                (err, res) => {
                    if (err) reject(err);
                    resolve(res);
                }
            );
        })
            .then((response) => response)
        return results;
    } catch (error) {
        throw error;
    }
};


module.exports = Participants;
