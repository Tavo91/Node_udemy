const express = require("express");
const apiRouter = require('./server')
const cors = require("cors");
const {errorLogs, handlerError} = require("./middleware/error.handler");


const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json())

app.get("/", (req, res) => res.send("Hola Mundo"));
// la req es la request, la peticion
// la res es la respuesta (RESPONSE)


apiRouter(app)

app.use(handlerError)
app.use(errorLogs)




app.listen(port, (req, res) => {
  console.log(`Escuchando en el puerto ${port}`);
});
