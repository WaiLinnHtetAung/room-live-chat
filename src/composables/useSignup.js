import { ref } from "vue";
import {auth} from '../firebase/config'

let error = ref(null);

let createAcc = async (email, password, name) => {
    try {
        let response = await auth.createUserWithEmailAndPassword(email, password);
        if(!response) {
            throw new Error("Cound not create new user");
        }
        await response.user.updateProfile({displayName: name});
        return response;
    }
    catch(err) {
        error.value = err.message;
    }
}

let useSingup = () => {
    return {error, createAcc}
}

export default useSingup;