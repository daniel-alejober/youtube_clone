import Comment from "../models/Comment.js";
import Video from "../models/Video.js";

const addComment = async (req, res) => {
  try {
    const newComment = await Comment.create({
      userId: req.id,
      videoId: req.params.videoId,
      desc: req.body.desc,
    });
    res.status(200).json({ success: true, comment: newComment });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteComment = async (req, res) => {
  try {
    //*el usuario puede borrar su comentario o el dueño del video puede borrar comentarios de su video, por eso o le pueden pasar el id del comentario o el id del video
    const comment = await Comment.findById(req.params.commentId);
    const video = await Video.findById(req.params.videoId);

    if (req.id === comment.userId || req.id === video.userId) {
      await Comment.findByIdAndDelete(req.params.commentId);
      res
        .status(200)
        .json({ success: true, message: "The comment has been deleted." });
    } else {
      const error = new Error("You can delete only your comment!");
      return res.status(400).json({ message: error.message, success: false });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ videoId: req.params.videoId });
    res.status(200).json({ success: true, comments });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export { addComment, deleteComment, getComments };
