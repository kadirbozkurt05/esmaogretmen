import { initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import { config } from "./config";
import { getStorage } from 'firebase/storage';


const app = initializeApp(config);
const auth = getAuth();
const storage = getStorage(app);



export {auth, storage};