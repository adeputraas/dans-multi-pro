const { Router } = require("express")
const router = Router();
const user = require('./user.routes');
const job = require('./job.routes');

module.exports = {
    user: router.use('/user', user),
    job: router.use('/job', job),
}