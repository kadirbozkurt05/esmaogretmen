import { deleteUser } from "firebase/auth";

const removeUser = async (user)=>{
    try {
        await deleteUser(user);
    } catch (error) {
        throw error;
    }
}

export default removeUser;