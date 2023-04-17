<template>
    <h2>SignUp</h2>

    <form @submit.prevent="signUp">
        <input type="text" placeholder="Enter Name" v-model="name">
        <input type="email" placeholder="Enter email" v-model="email">
        <input type="password" placeholder="Enter password" v-model="password">
        <button>SingUp</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import {auth} from '../firebase/config'

export default {
    setup() {
        let name = ref('');
        let email = ref('');
        let password = ref('');
        let error = ref(null);

        let signUp = async () => {
            try {
                let response = await auth.createUserWithEmailAndPassword(email.value, password.value);
                if(!response) {
                    throw new Error("Cound not create new user");
                }
                await response.user.updateProfile({displayName: name.value});
                console.log(response.user)
            }
            catch(err) {
                error.value = err.message;
                console.log(error.value)
            }
        };

        return {name, email, password, signUp}
    }
}
</script>

<style>

</style>