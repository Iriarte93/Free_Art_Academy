<script setup lang="ts">
import ExpectItem from '@/components/ExpectItem.vue';
import FaqItem from '@/components/FaqItem.vue';
import FreeAssetsItem from '@/components/FreeAssetsItem.vue';
import BottomItem from '@/components/BottomItem.vue';
</script>

<template>
    <div class="login">
        <a href="http://localhost:5173/login" target="_self">
            <img src="@/assets/icons/login.png" alt="Login">
        </a>
    </div>
    <div class="header-bar">
        <div>
            <h1>FREE ART ACADEMY</h1>
        </div>
        <div>
            <h2>Extensive Art courses for professional and passionate CG artists.</h2>
        </div>
    </div>
    <ExpectItem />
    <FaqItem />
    <FreeAssetsItem />
    <BottomItem />
</template>

<style scoped>
.login {
    padding-right: 50px;
    padding-top: 50px;
    position: absolute;
    right: 0;
}

.login img {
    width: 50px;
    height: 50px;
}


.header-bar {
    display: flex;
    flex-direction: column;
    padding-left: 35vw;
    padding-top: 45vh;
    text-align: left;
    height: 100vh;
}

.header-bar h1 {
    text-shadow: 1px 1px 2px rgb(8, 6, 7);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 5vw;
    text-transform: capitalize;
    color: rgb(240, 248, 255);
    margin-bottom: -10px;
}

.header-bar h2 {
    text-shadow: 1px 1px 2px rgb(8, 6, 7);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    color: rgb(240, 248, 255);
}



@media (max-width: 480px) {
    .header-bar {
        padding-top: 35vh;
        padding-bottom: 20vh;
    }


    .header-bar h1 {
        font-size: 8vw;
    }

    .header-bar h2 {
        font-size: 6vw;
    }

    .login {
        padding-top: 10px;
        padding-right: 10px;
    }
}
</style>