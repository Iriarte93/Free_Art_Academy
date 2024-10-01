<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    image: string;
    titulo: string;
    autor: string;
    category: string;
    link: string;
}>();

const imageUrl = new URL(`../assets/images/courses_banner/${props.image}`, import.meta.url).href;

</script>

<template>
    <div class="curso-item-view">
        <div>
            <img :src="imageUrl" alt="Login">
        </div>
        <div>
            <h1>{{ props.titulo }}</h1>
        </div>
        <div>
            <h1>Autor: {{ props.autor }}</h1>
        </div>
        <div>
            <h1>Category: {{ props.category }}</h1>
        </div>
        <div><a :href="props.link" target="_blank">Ver curso</a></div>
    </div>
</template>

<style lang="css" scoped>

h1{
    font-weight: bold;
}

img{
    margin-top: 5px;
    max-width: 300px;
}

.curso-item-view{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
    width: 350px;
    margin-bottom: 10px;
    border-radius: 10px;
    border-style: solid;
    border-color: rgb(255, 0, 0);
}
.curso-item-view:hover{
    border-color: rgb(64, 0, 255);
}

</style>