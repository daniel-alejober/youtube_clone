import Video from "../models/Video.js";
import User from "../models/User.js";

const addVideo = async (req, res) => {
  try {
    const newVideo = await Video.create({ userId: req.id, ...req.body });
    res.status(200).json({ success: true, video: newVideo });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const updateVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      const error = new Error("Video not found");
      return res.status(400).json({ message: error.message });
    }
    if (req.id === video.userId) {
      const updatedVideo = await Video.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json({ success: true, video: updatedVideo });
    } else {
      return res
        .status(403)
        .json({ message: "You can update only your videos!", success: false });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      const error = new Error("Video not found");
      return res.status(400).json({ message: error.message });
    }
    if (req.id === video.userId) {
      await Video.findByIdAndDelete(req.params.id);
      res
        .status(200)
        .json({ success: true, message: "Video has been deleted" });
    } else {
      return res
        .status(403)
        .json({ message: "You can delete only your videos!", success: false });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json({ success: true, video });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const addView = async (req, res) => {
  try {
    await Video.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });
    res
      .status(200)
      .json({ success: true, message: "The view has been increased" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const random = async (req, res) => {
  try {
    //*aggregate sirve para agrupar-filtrar varios documentos de mongodb(objetos) segun se le especifique
    //* Objeto.aggregate([{$match:{tamaño:''medio}}]) los estara juntando por los que tengan el tamaño medio
    //?$sample trae documentos aleatorios en este caso le estamos diciemdo que traiga 40 documentos aleatoriamente

    const videos = await Video.aggregate([{ $sample: { size: 40 } }]);
    res.status(200).json({ success: true, videos });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const trend = async (req, res) => {
  try {
    //*en esta condicion decimos que con el .sort({ views: -1 }) nos traera los videos mas vistos si fuera 1 nos traeria los videos menos vistos
    const videos = await Video.find().sort({ views: -1 });
    res.status(200).json({ success: true, videos });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const sub = async (req, res) => {
  try {
    const user = await User.findById(req.id);
    const subscribedChannels = user.subscribedUsers;
    //*en user.subscribedUsers vienen todos los id de los usuarios a los cuales ya nos hemos suscrito al canal esta en el controller de user.js -> metodo subscribe()
    const list = await Promise.all(
      subscribedChannels.map((channelId) => {
        return Video.find({ userId: channelId });
      })
    );

    //*Los vamos a ordenar dependiendo su propiedad createdAt(fecha de creacion) del mas nuevo al mas antiguo
    res.status(200).json({
      success: true,
      list: list.flat().sort((a, b) => b.createdAt - a.createdAt),
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export {
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
  addView,
  trend,
  random,
  sub,
};
