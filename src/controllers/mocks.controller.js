import { createPets, createUsers } from "../utils/faker/mocks.js";

export const getQuantity = (req, res, next)=>{
    req.quantity = req.query.quantity;

    next();
}

export const getPets = async(req, res, next) => {
    try {
        const pets = createPets(req.quantity || 50);

        res.status(200).json(pets)
    } catch (error) {
        console.log(error)
    }
}

export const getUsers = async(req, res, next) => {
    try {
        const users = await createUsers(req.quantity || 50);
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
    }
}