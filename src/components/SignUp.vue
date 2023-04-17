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
export default {
    setup() {
        let name = ref('');
        let email = ref('');
        let password = ref('');
        let signUp = () => {

        };

        return {name, email, password, signUp}
    }
}
</script>

<style>

</style>