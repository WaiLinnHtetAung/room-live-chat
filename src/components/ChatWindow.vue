<template>
    <div class="chat-window">
        <div class="messages">
            <div class="single" v-for="message in formattedMessages" :key="message.id">
                <span class="created-at">{{message.created_at}}</span>
                <span class="name">{{message.name}}</span>
                <span class="message">{{message.message}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue'
import {db} from '../firebase/config'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default {
    setup() {
        let messages = ref([]);

        db.collection('messages').orderBy('created_at').onSnapshot((snap) => {
            let result = [];
            snap.docs.forEach((doc) => {
                let message = {id: doc.id, ...doc.data()};
                doc.data().created_at && result.push(message);
            })
            messages.value = result;
        })

        let formattedMessages = computed(() => {
            return messages.value.map((message) => {
                let formatTime = formatDistanceToNow(message.created_at.toDate());

                return {...message, created_at: formatTime};
            })
        })

        return {messages, formattedMessages}
    }
}
</script>

<style>
    .chat-window {
        background: #fafafa;
        padding: 30px 20px;
    }
    
    .single {
        margin: 18px 0;
    }

    .created-at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-block: 4px;
    }

    .name {
        font-weight: 600;
        margin-right: 6px;
    }

    .messages {
        max-height: 400px;
        overflow: auto;
    }
</style>