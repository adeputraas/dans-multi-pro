const sql = require("./db.js");
const uuid = require('uuid')

// constructor
const User = function(user) {
  this.uid = user.uid || uuid.v4();
  this.username = user.username;
  this.password = user.password;
};

User.create = async (newUser) => {
    try {
        const results = await new Promise((resolve, reject) => {
            sql.query(
                /* sql */ `INSERT INTO users SET ?`, newUser
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

User.findOne = async (user) => {
    try {
        const results = await new Promise((resolve, reject) => {
            sql.query(
                /* sql */ `SELECT * FROM users WHERE uid =?`, [user.uid]
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

User.findOneByUsername = async (user) => {
    try {
        const results = await new Promise((resolve, reject) => {
            sql.query(
                /* sql */ `SELECT * FROM users WHERE username =?`, [user.username]
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

module.exports = User;
