const express = require("express");
const servicioUsuarios = require("../servicios/servicioUsuarios")


const router = express.Router()

router.get("/", async(req, res) => {
  const obtenerUsuarios = await servicioUsuarios.getAllUsuarios(req, res)

  res.json(obtenerUsuarios )
  });


  module.exports = router;