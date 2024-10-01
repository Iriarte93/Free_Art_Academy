<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

let emailRef = ref<string>("");
let nameRef = ref<string>("");
//let lastNameRef = ref<string>("");
let passwordRef = ref<string>("");
let confirmPasswordRef = ref<string>("");

const router = useRouter();

async function registerUser() {
    console.log(emailRef);
    console.log(nameRef);
    console.log(passwordRef);
    console.log(confirmPasswordRef);

    if (passwordRef.value !== confirmPasswordRef.value) {
        alert("Las contraseñas no coinciden");
    } else {
        try {
            const response = await fetch('http://localhost:3000/user', { // '{{API-Back}}/user.service'
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userName: nameRef.value,
                    userEmail: emailRef.value,
                    userPassword: passwordRef.value
                })
            });

            if (response.ok) {
                // Redirigir a /login después del registro exitoso
                router.push('/login');
            } else {
                alert("Hubo un error en el registro.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Ocurrió un error durante el registro.");
        }
    }
}
</script>

<template>
    <div class="register-box">
        <h1>REGISTER</h1>
        <form @submit.prevent="registerUser">
            <input type="text" v-model="nameRef" required name="Name" placeholder="Name">
            <input type="text" v-model="emailRef" required name="email" placeholder="example@domain.com">
            <input type="password" v-model="passwordRef" name="pass" placeholder="Password">
            <input type="password" v-model="confirmPasswordRef" name="confirmpass" placeholder="Confirm password">
            <button type="submit">Register</button>
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