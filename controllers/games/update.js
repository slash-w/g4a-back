import Game from "../../models/Game.js";

const update = async (req, res, next) => {
  try {
    let update = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate("category_id");
    if (update) {
      return res.status(200).json({
        success: true,
        message: ["Game updated"],
        update: update,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: ["Not found"],
      });
    }
  } catch (error) {
    next(error);
  }
};

export default update;
