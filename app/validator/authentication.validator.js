const Joi = require('joi');

exports.login = async (newParticipants) => {

    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
    }).required();

    try {
        const response = await schema.validateAsync(newParticipants);
        return response;
    } catch (error) {
        throw error;
    }
};