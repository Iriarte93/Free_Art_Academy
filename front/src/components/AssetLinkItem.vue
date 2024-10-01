<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  isOpen: Boolean
});


const emit = defineEmits(['close', 'formSubmitted']);


const router = useRouter();


const email = ref('');

// Envío del formulario
const submitForm = () => {
  emit('formSubmitted', email.value);
  router.push({ path: '/register', query: { email: email.value } });
};
</script>

<template>
  <!-- Renderizar solo si el componente está abierto -->
  <div v-if="isOpen" class="asset-link">
    
    <button @click="$emit('close')">Close</button>

    <h1>JOIN FOR FREE TO GET COURSE ACCESS</h1>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="email" name="email" placeholder="example@domain.com" />
      <button type="submit">Submit</button>
    </form>

    <h2>or just <a href="/download/Starter_Pack.blend"  @click="$emit('close')">download</a></h2>
  </div>
</template>
<style scoped>
.asset-link {
    display: block;
    height: max-content(10%);
    width: 400px;
    background-color: rgba(110, 110, 110, 0.8);
    color: white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
}
</style>