<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';

// Controla la visibilidad del componente hijo
const isAssetActive = ref(false);


const DownloadAsset = defineAsyncComponent(() =>
  import('../components/AssetLinkItem.vue')
);

// Método para cerrar el componente hijo
const closeAsset = () => {
  isAssetActive.value = false;
};
</script>

<template>
  <!-- Renderiza DownloadAsset solo si isAssetActive es true -->
  <DownloadAsset v-if="isAssetActive" :isOpen="isAssetActive" @close="closeAsset" />
  
  <div class="free-asset">
    <div class="asset-banner">
      <img src="@/assets/images/asset_banner.png" alt="Login" />
    </div>
    
    <!-- Botón para abrir el componente hijo -->
    <div class="download-asset">
      <button @click="isAssetActive = true">GET PACK</button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.free-asset {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content(10%);
    background: linear-gradient(to bottom, #090909, #3e2637);
}

img {
    margin-top: 20px;
    max-width: 500px;
}

button {
    font-weight: bold;
    color: white;
    background-color: orange;
    margin-bottom: 20px;
    height: 35px;
    width: 100px;
    border-radius: 5px;
}

@media(max-width: 480px) {

    img {
        max-height: auto;
        max-width: 200px;
    }

}
</style>