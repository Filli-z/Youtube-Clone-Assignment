<script setup>
import NavBarView from './views/components/NavBarView.vue'
import HeroPageView from './views/components/HeroPageView.vue'
import BodyView from './views/components/BodyView.vue'
</script>

<template>
  <q-layout view="hHh lpR lFf">
    <div class="bg-image">
      <NavBarView />
      <HeroPageView />
    </div>
    <BodyView />
  </q-layout>
</template>

<style scoped>
.bg-image {
  background-image: linear-gradient(to bottom, #26c2b9, #288be7);
  background-repeat: no-repeat;
}
</style>
