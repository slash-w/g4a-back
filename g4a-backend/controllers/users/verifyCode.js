import User from "../../models/Users.js";

export default async (req, res, next) => {
  const verify_code = req.params.verify_code;
  try {
    // Buscar el usuario en la base de datos por el código de verificación
    const user = await User.findOne({ verify_code });
    if (!user) {
      return res.status(404).json({ message: "Invalid verification code." });
    }
    // Actualizar la propiedad is_verified de false a true
    user.verified = true;
    await user.save();

    return res.status(200).json({ message: "Account verified successfully." });
  } catch (error) {
    next(error);
  }
};
