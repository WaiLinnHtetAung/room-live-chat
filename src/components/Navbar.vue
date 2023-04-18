<template>
    <nav class="container" v-if="user">
        <div>
            <p>{{user.displayName}}</p>
            <p class="email">Login as {{user.email}}</p>
        </div>
        <button @click="logout">Logout</button>
    </nav>
    <div v-else class="no-user">
        No User Now! <router-link to="/">Login?</router-link>
    </div>
</template>

<script>
import useLogout from '../composables/useLogout'
import getCurrentUser from '../composables/getCurrentUser'

export default {
    setup() {
        let {error, logoutAcc} = useLogout();
        let {user} = getCurrentUser();

        let logout = async () => {
            logoutAcc();
        }

        return {error, logout, user}
    }
}
</script>

<style>
    nav.container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    }

    nav p {
        margin: 3px auto;
        font-size: 16px;
        color: #444;
    }

    nav p.email {
        font-size: 14px;
        color: #999;

    }

    .no-user {
        text-align: center;
        margin: 50px auto;
        font-weight: 600;
    }
</style>