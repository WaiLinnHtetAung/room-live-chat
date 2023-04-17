<template>
    <h2>Login</h2>

    <form @submit.prevent="login">
        <input type="email" placeholder="Enter email" v-model="email">
        <input type="password" placeholder="Enter password" v-model="password">
        <div v-if="error" class="error">{{error}}</div>
        <button>Login</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'

export default {
    setup() {
        let email = ref('');
        let password = ref('');
        let {error, loginAcc} = useLogin();

        let login = async () => {
            let response = await loginAcc(email.value, password.value);
            if(response) {

            }
        };

        return {email, password, login, error} 
    }
}
</script>

<style>

</style>