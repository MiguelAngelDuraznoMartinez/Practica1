function inicio(req, res, next) {
    const hoy = new Date();
    console.log(`Acceso a la ruta ${req.path} - Fecha y hora: ${hoy.toLocaleString()}`);
    next();
  }
  
  module.exports = inicio;