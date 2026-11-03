
import GenericRepository from "./GenericRepository.js";

/**
 * User repository
 * @extends GenericRepository
 */
export default class UserRepository extends GenericRepository {
    constructor(dao) {
        super(dao);
    }

    /**
     * Get user by email
     * @param {String} email 
     * @returns {User}
     */
    getUserByEmail = (email) => {
        return this.getBy({ email });
    }
    /**
     * Get user by id
     * @param {String} id 
     * @returns {Promise<User>}
     */
    getUserById = (id) => {
        return this.getBy({ _id: id })
    }
}