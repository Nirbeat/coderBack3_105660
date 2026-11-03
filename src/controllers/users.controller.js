import { usersService } from "../services/index.js"

export class UsersController {

    /**Obtiene todos los usuarios
     * @param {import("express").Request} req 
     * @param {import("express").Response} res
     * @returns {Promise<void>} 
    */

    getAllUsers = async (req, res) => {
        /**
         * @type {Array<User>}
         */
        const users = await usersService.getAll();
        res.send({ status: "success", payload: users })
    }

    getUser = async (req, res) => {
        const userId = req.params.uid;
        const user = await usersService.getUserById(userId);
        if (!user) return res.status(404).send({ status: "error", error: "User not found" })
        res.send({ status: "success", payload: user })
    }

    updateUser = async (req, res) => {

        const updateBody = req.body;
        const userId = req.params.uid;
        const user = await usersService.getUserById(userId);
        if (!user) return res.status(404).send({ status: "error", error: "User not found" })
        const result = await usersService.update(userId, updateBody);
        res.send({ status: "success", message: "User updated" })
    }

    deleteUser = async (req, res) => {
        const userId = req.params.uid;
        const result = await usersService.getUserById(userId);
        res.send({ status: "success", message: "User deleted" })
    }

}
export default new UsersController