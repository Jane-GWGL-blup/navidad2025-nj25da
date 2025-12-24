import express from "express";
import crypto from "crypto";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// servir archivos estáticos (html, css, js)
app.use(express.static(__dirname));

const HASH = process.env.GIFT_PASSWORD_HASH;

// endpoint de validación
app.post("/api/check", (req, res) => {
  const { password } = req.body;

  const hash = crypto.createHash("sha256").update(password).digest("hex");

  if (hash === HASH) {
    return res.status(200).json({ ok: true });
  }

  res.status(401).json({ ok: false });
});
/* 
// iniciar servidor
app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});
 */
export default app;