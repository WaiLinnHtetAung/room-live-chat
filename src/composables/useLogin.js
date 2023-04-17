import { ref } from "vue";
import {auth} from '../firebase/config'

let error = ref(null);

let loginAcc = async (email, password) => {
    try {
        let response = await auth.signInWithEmailAndPassword(email, password);

        if(!response) {
            throw new Error("Can't login user");
        }
        return response;
    }
    catch(err) {
        error.value = err.message.slice(10);
    }
}

let useLogin = () => {
    return {error, loginAcc};
}

export default useLogin;