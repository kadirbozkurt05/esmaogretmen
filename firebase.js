import { initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import { config } from "./config";

initializeApp(config);
const auth = getAuth();

export {auth};