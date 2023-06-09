const getConnection = require("../libs/postgres");
const { models } = require("../libs/sequelize");

const getAllUsuarios = async () => {
  const response = await models.User.findAll();
  return response;
};

const findOneUser = async (id) => {
  try {
    const user = await models.User.findByPk(id);
    if (!user) {
      return {
        status: 404,
        message: "Usuário no encontrado!",
      };
    }
    return user;
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (body) => {
  try {
    const newUser = await models.User.create(body);
    return {
      status: 200,
      user: newUser,
      message: "Usuário creado!",
    };
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async ({id, body}) => {
  try {
    const user = await models.User.findByPk(id);
    
    if (!user) {
      return {
        status: 404,
        message: "Usuário no encontrado!",
      };
    }
    const response = await user.update(body);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (id) => {
  try {
    const user = await models.User.findOne(id);
    await user.destroy();
    return {
      status: 200,
      message: "Usuário eliminado!",
      id,
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsuarios,
  createUser,
  updateUser,
  deleteUser,
  findOneUser,
};
