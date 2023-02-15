import User from "../models/User.js";

const updateUser = async (req, res) => {
  if (req.params.id === req.id) {
    try {
      //*$set nos sirve para actualizar la informacion del usuario
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
          //*varios valores-- original cantidad:500 detalles:{talla:'grande',color:'azul'} tags:['blusa','pantalon']
          //*$set:{ cantidad:700, detalles:{talla:'mediana',color:'verder'}, tags:['blusa','pantalon','playera']}
        },
        { new: true } //*hace que nos regrese el objeto ya modificado
      ).select("-password");
      res.status(200).json({ success: true, user: updatedUser });
    } catch (error) {
      res.status(500).json(error.message);
    }
  } else {
    return res
      .status(403)
      .json({ message: "You can update only your account!", success: false });
  }
};

const deleteUser = async (req, res) => {
  if (req.params.id === req.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "User has been deleted", success: true });
    } catch (error) {
      res.status(500).json(error.message);
    }
  } else {
    return res
      .status(403)
      .json({ message: "You can delete only your account!", success: false });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ success: true, user });
  } catch (error) {
    return res.status(404).json({ message: "User not found", success: false });
  }
};

const subscribe = async (req, res) => {
  try {
    //*ya que subscribedUsers es un array usamos $push para ir metiendo los id de los usuarios a los cuales nos hayamos suscribido
    //*req.is viene del middleware no es el mismo id que el del params
    await User.findById(req.id, {
      $push: { subscribedUsers: req.params.id },
    });
    //*Vamos a incrementar el numero de suscriptores del canal
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });
    res
      .status(200)
      .json({ message: "Subscription successfull.", success: true });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const unsubscribe = async (req, res) => {
  try {
    //*pull quirata los valores de array
    //*req.is viene del middleware no es el mismo id que el del params
    await User.findById(req.id, {
      $pull: { subscribedUsers: req.params.id },
    });
    //*Vamos a decrementar el numero de suscriptores del canal
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 },
    });
    res
      .status(200)
      .json({ message: "Unsubscription successfull.", success: true });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const like = async (req, res) => {};
const dislike = async (req, res) => {};

export {
  updateUser,
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
};
