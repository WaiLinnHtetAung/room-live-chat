<template>
  <form>
    <textarea placeholder="text message and hit enter to send" @keydown.enter="sendMessage" v-model="message"></textarea>
  </form>
</template>

<script>
import { ref } from 'vue'
import getCurrentUser from '../composables/getCurrentUser'
import {timestamp} from '../firebase/config'
import useCollection from '../composables/useCollection'

export default {
    setup() {
        let message = ref('');
        let {user} = getCurrentUser();
        let {error, addDoc} = useCollection('messages');

        let sendMessage = async () => {
            let chat = {
                message: message.value,
                name: user.value.displayName,
                created_at: timestamp(),
            };
            
            await addDoc(chat);
            message.value = '';


        }

        return {message, sendMessage, error};
    }
}
</script>

<style>
    form {
        margin: 10px;
    }

    textarea {
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
    }
</style>