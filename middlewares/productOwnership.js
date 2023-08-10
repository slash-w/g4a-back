import User from "./path-to-your-user-model"; // Update the path to your User model
import { ObjectId } from "mongoose";

const checkProductOwnershipMiddleware = async (req, res, next) => {
  const userId = req.user._id;
  const productIdToCheck = req.params.productId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const hasProduct = user.product_inventory.some((productId) => ObjectId(productId).equals(productIdToCheck));

    if (!hasProduct) {
      return res.status(403).json({ message: "User does not own the product" });
    }

    next();
  } catch (error) {
    console.error("Error checking product ownership:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default checkProductOwnershipMiddleware;
