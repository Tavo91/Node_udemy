




const getAllUsuarios = (req, res) => {
  try {
    const { limit, offset } = req.query;
    if (limit && offset) {
      res.json({
        limit,
        offset,
      });
    } else {
      res.send("No hay Ninugn Parametro");
    }
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  getAllUsuarios,
};