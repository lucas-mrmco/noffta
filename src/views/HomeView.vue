<script setup>
import RocketVue from '../components/Rocket.vue';
</script>

<template>
  <main>

    <body class="pt-52 px-20">
      <h2 class="font-nunito-sans text-xl text-blanc-text">Noffta supports you in the creation of NFT</h2>
      <p class="text-blanc-text font-lato text-sm">Indeed, you will be able to design, modify, sign, publish and even
        print your own NFT.</p>
      <img class="object-center" src="../assets/illustration_NFT.png" alt="illustration réseau NFT" />
      <button class="rounded-7xl h-11 w-32 bg-gradient-to-r from-mauve to-orange inline-flex items-center p-6">
        <RocketVue />
        <span class="text-blanc-text font-lato text-sm">Create</span>
      </button>
      <button class="rounded-7xl h-11 w-32 border-gradient-to-r from-mauve to-orange inline-flex items-center p-6">
        <RocketVue />
        <span class="text-blanc-text font-lato text-sm">Explore all</span>
      </button>
      <h3 class="font-nunito-sans text-lg text-blanc-text">What is NOFFTA ?</h3>
    </body>


  </main>
</template>

<style scoped>
h2,
h3 {
  text-shadow: -1px 1.5px 0px #F81DFB;
}
</style>