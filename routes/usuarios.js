const express = require("express");
const servicioUsuarios = require("../servicios/servicioUsuarios");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const obtenerUsuarios = await servicioUsuarios.getAllUsuarios(req, res);
    return res.send({ obtenerUsuarios });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const {id} = req.params;
    const oneUser = await servicioUsuarios.findOneUser(id)
    res.json(oneUser);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const body = req.body;
    const newUser = await servicioUsuarios.createUser(body);
    return newUser;
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const {id} = req.params;
    const body = req.body;
    const updatedUser = await servicioUsuarios.updateUser({ id, body });
    return res.json(updatedUser);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const {id} = req.params;
    const userDelete = await servicioUsuarios.deleteUser({id})
    return res.json(userDelete);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
