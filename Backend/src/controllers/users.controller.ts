import { Request, Response } from "express";
import User from "../models/User.js";

// * Crear un nuevo usuario...
export const createNewUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    const _user = {
      name,
      email,
    };
    const newUser = await User.create(_user);

    res.status(201).json({
      message: "New user has been created...",
      newUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el Usuario", error });
  }
};

// * Obtener todos los usuarios...
export const getUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await User.findAll();

    if (!allUsers) {
      res.status(404).json({
        message: "No existen usuarios en la Base de Datos...",
      });
    }

    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({
      message: "Error al intentar mostrar todos los usuarios...!",
      error,
    });
  }
};

// * Obtener un usuario determinado...
export const getUserByID = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const searchUser = await User.findByPk(id);

    if (searchUser) {
      res.status(200).json(searchUser);
    } else {
      res.status(404).json({
        message: `No existe ningún Usuario con la ID: ${id}`,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al intentar buscar al usuario...!",
      error,
    });
  }
};

// * Actualizar un usuario...
export const updateUser = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;

  try {
    const userToBeUpdate = await User.findByPk(id);

    if (userToBeUpdate) {
      await userToBeUpdate.update(body);

      res.status(201).json({
        message: `El Usuario con la id: ${id} ha sido actualizado satisfactoriamente...!!!`,
        userToBeUpdate,
      });
    } else {
      res.status(404).json({
        message: `No existe ningún Usuario con la ID: ${id}`,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al realizar la búsqueda y/o actualización del Usuario...",
      error,
    });
  }
};

// * Eliminar un usuario (De forma lógica)...
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const userToBeDeregistered = await User.findByPk(id);

    if (userToBeDeregistered) {
      await userToBeDeregistered.update({
        status: 0,
      });

      res.status(201).json({
        message: `El Usuario con la id: ${id} ha sido desincorporado...!!!`,
      });
    } else {
      res.status(404).json({
        message: `No existe ningún Usuario con la ID: ${id}`,
      });
    }
  } catch (error) {
    res.status(500).json({
      message:
        "Error al realizar la búsqueda y/o desincorporación del Usuario...",
      error,
    });
  }
};
