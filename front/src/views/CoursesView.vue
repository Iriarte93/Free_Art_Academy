<script setup lang="ts">
import { useRouter } from 'vue-router';
import CursosItem from '@/components/CursosItem.vue';
import cursos from '@/cursosList.json';
console.log(cursos);


let router = useRouter();
function toCourses(){
    router.push('/user');
}

</script>

<template>
  <!-- <div class="nav-top"><button @click="toCourses">MY COURSES</button></div> -->
  <div class="nav-top"><button @click="toCourses">YOUR PROFILE</button></div>
  <div class="courses-container">
    <div class="course-holder" v-for="(curso, id) in cursos" :key="id">
      <CursosItem :image="curso.image" :titulo="curso.titulo" :autor="curso.autor" :category="curso.category" :link="curso.link" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.nav-top {
    color: white;
    background-color: black;
    width:auto;
    height: max-content(10%);
}
.courses-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap:10px;
}

</style>