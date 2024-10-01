<script lang="ts" setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';

let emailRef = ref<string>("");
let passwordRef = ref<string>("");

const router = useRouter();

async function registerUser() {
    console.log(emailRef);
    console.log(passwordRef);

    try {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userEmail: emailRef.value,
                userPassword: passwordRef.value
            }),
            credentials: 'include' // IMPORTANTE
        });

        if (response.ok) {
            console.log('Response es Ok Vue')
            router.push('/user');
        } else {
            alert("Hubo un error en el login.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Ocurrió un error durante el login.");
    }
}

</script>

<template>
    <div class="register-box">
        <h1>LOGIN</h1>
        <form @submit.prevent="registerUser">
            <input type="text" v-model="emailRef" required name="email" autocomplete="off" placeholder="example@domain.com">
            <input type="password" v-model="passwordRef" required name="pass" autocomplete="off" placeholder="Password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<style lang="css" scoped>
h1 {
    color: beige;
}

.register-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
}

form {
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 200px;
}
</style>