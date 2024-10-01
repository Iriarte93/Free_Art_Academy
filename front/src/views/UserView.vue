<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

let nameProfile = ref<string>("");
let emailProfile = ref<string>("");
// let passwordProfile = ref<string>("");

let router = useRouter();

async function getUser() {
    try {
        const response = await fetch('http://localhost:3000/auth/session', {
            method: "GET",
            credentials: 'include' // Esto envía las cookies al backend
        });

        if (response.ok) {
            const userData = await response.json();

            nameProfile.value = userData.name;
            emailProfile.value = userData.email;
        } else {
            console.error('Error al obtener la sesión del usuario');
            router.push('/login');
        }
    } catch (error) {
        console.error('Error durante la solicitud:', error);
        router.push('/login');
    }
}

function toCourses() {
    router.push('/courses');
}

async function logOut() {
    try {
        const response = await fetch('http://localhost:3000/auth/logout', {
            method: 'POST',
            credentials: 'include'
        });

        if (response.ok) {
            window.location.href = '/login';
        } else {
            console.error('Error al cerrar sesión');
        }
    } catch (error) {
        console.error('Error durante el cierre de sesión:', error);
    }
}

getUser();

</script>
<template>
    <div class="nav-top"><button @click="toCourses">MY COURSES</button></div>
    <div class="profile-box">
        <div class="field-box">
            <h1>Profile</h1>
            <div class="field">
                <div><label>Name</label></div>
                <div><label>{{ nameProfile }}</label></div>
            </div>
            <div class="field">
                <div><label>Email</label></div>
                <div><label>{{ emailProfile }}</label></div>
            </div>
            <div class="field">
                <div><label>Password</label></div>
                <div><label type="password">**********</label></div>
            </div>
            <div><a @click="logOut" >LOGOUT</a></div>
        </div>
    </div>
</template>
<style lang="css" scoped>
.nav-top {
    color: white;
    background-color: black;
    width: auto;
    height: max-content(10%);
}

.profile-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 94vh;
}

.field-box {
    display: flex;
    color: rgb(255, 255, 255);
    flex-direction: column;
    width: 360px;
    height: 280px;
    background: linear-gradient(to bottom, #090909, #3e2637);
    justify-content: center;
    align-items: center;
    border-radius: 20px;
}

.field {
    width: 300px;
    display: flex;
    border-color: rgb(255, 255, 255);
    border-style: solid;
    flex-direction: column;
    padding-left: 5px;
    margin-bottom: 10px;
    border-radius: 5px;
}

a {
    display: inline-block;
    color: red;
}
</style>