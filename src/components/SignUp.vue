<template>
    <h2>SignUp</h2>

    <form @submit.prevent="signUp">
        <input type="text" placeholder="Enter Name" v-model="name">
        <input type="email" placeholder="Enter email" v-model="email">
        <input type="password" placeholder="Enter password" v-model="password">
        <div v-if="error" class="error">{{error}}</div>
        <button>SingUp</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'

export default {
    setup() {
        let name = ref('');
        let email = ref('');
        let password = ref('');
        let {error, createAcc} = useSignup();

        let signUp = async () => {
            let response = await createAcc(email.value, password.value, name.value);
            if(response) {
                console.log(response.user)
            }
        };

        return {name, email, password, signUp, error}
    }
}
</script>

<style>

</style>