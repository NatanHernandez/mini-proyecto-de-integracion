function autenBasica(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.setHeader("WWW-Authenticate", 'Basic realm="Acceso restringido"');
    return res.status(401).send("Falta cabecera de autenticación");
  }

  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString("ascii");
  const [usuario, contraseña] = credentials.split(":");

  // Credenciales válidas
  if (usuario === "natan" && contraseña === "1202") {
    next(); // pasa al siguiente middleware o ruta
  } else {
    res.setHeader("WWW-Authenticate", 'Basic realm="Acceso restringido"');
    return res.status(403).send("Credenciales incorrectas");
  }
}

module.exports = autenBasica;