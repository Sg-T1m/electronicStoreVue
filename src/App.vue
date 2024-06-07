<template>

  <div class="app">
    <header>

    </header>
    <AppHeader></AppHeader>

    <main class="main">
      <RouterView />
    </main>
    <FooterComponents></FooterComponents>

  </div>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'


import { useUserStore } from './stores/User';
import { useAutorisationStore } from './stores/Autorisation';



import AppHeader from './components/headerComponents/AppHeader.vue';
import FooterComponents from './components/footerComponents/FooterComponents.vue'

import { getByToken, checkAuth } from "@/services/AuthApiServices"
import { clear } from '@/services/ClearStoreServices'
import { onBeforeMount } from 'vue';


const userStore = useUserStore()
const autorisationStore = useAutorisationStore()

async function checkAuthUser() {

  const respons = await getByToken(localStorage.getItem('token')!)
  if (respons.status < 400) {
    userStore.userData = respons.data
    autorisationStore.isAuth = true
    localStorage.setItem('id', respons.data.id)
    console.log(localStorage.getItem('id'), 'app')
  } else {
    clear()
  }

}
checkAuthUser()


</script>

<style scoped>
.main {
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 116px;
  flex: 1;
  width: 1440px;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transform: translateY(-150%);
  animation: ani 1s forwards;
}

@keyframes ani {
  0% {
    transform: translateY(-150%);
  }

  100% {
    transform: translateY(0);
  }
}
</style>