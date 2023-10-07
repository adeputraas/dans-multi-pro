const Joi = require('joi');

exports.create = async (newParticipants) => {

    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        valueX: Joi.number().greater(0).less(34),
        valueY: Joi.number().greater(0).less(24),
        valueZ: Joi.number().greater(0).less(19),
        valueW: Joi.number().greater(0).less(14)
    }).required();

    try {
        const response = await schema.validateAsync(newParticipants);
        return response;
    } catch (error) {
        throw error;
    }
};

exports.retrieveAll = async (newParticipants) => {

    const schema = Joi.object({
        description: Joi.string(),
        location: Joi.string(),
        full_time: Joi.boolean(),
        page: Joi.number()
    }).required();

    try {
        const response = await schema.validateAsync(newParticipants);
        return response;
    } catch (error) {
        throw error;
    }
};

exports.updateById = async (newParticipants) => {

    const schema = Joi.object({
        id: Joi.string().guid({ version: ['uuidv4']}),
        name: Joi.string().required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        valueX: Joi.number().greater(0).less(34),
        valueY: Joi.number().greater(0).less(24),
        valueZ: Joi.number().greater(0).less(19),
        valueW: Joi.number().greater(0).less(14)
    }).required();

    try {
        const response = await schema.validateAsync(newParticipants);
        return response;
    } catch (error) {
        throw error;
    }
};

exports.readById = async (newParticipants) => {

    const schema = Joi.object({
        id: Joi.string().guid({ version: ['uuidv4']})
    }).required();

    try {
        const response = await schema.validateAsync(newParticipants);
        return response;
    } catch (error) {
        throw error;
    }
};