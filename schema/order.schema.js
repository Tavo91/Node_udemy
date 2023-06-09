const Joi = require('joi');

const email = Joi.string().email();
const password = Joi.string().min(10)
const id = Joi.string().integer()

const schemaCrearUsuario = Joi.object({
    email: email.required(),
    password: password.required()
})

const schemaActualizarUsuario = Joi.object({
    email: email,
    
})

const schemaObtenerUsuario = Joi.object({
    id: id.required(),
})


module.exports = {
    schemaCrearUsuario,
    schemaActualizarUsuario,
    schemaObtenerUsuario

}