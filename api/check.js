import crypto from "crypto";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false });
  }

  const { password } = req.body;

  const hash = crypto.createHash("sha256")
    .update(password)
    .digest("hex");

  if (hash === process.env.GIFT_PASSWORD_HASH) {
    return res.status(200).json({ ok: true });
  }

  res.status(401).json({ ok: false });
}
