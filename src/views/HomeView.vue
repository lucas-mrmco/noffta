<script setup>
import RocketVue from '../components/Rocket.vue';
import FooterVue from '../components/layout/Footer.vue';
</script>

<template>
  <main>

    <div class="pt-12 px-36">

    <div class="flex content-between space-x-32 pb-14">
        <div class="w-2/4">
            <h2 class="font-nunito-sans text-xl text-blanc-text  pb-6 pt-10">Noffta supports you in the creation of NFT</h2>
            <p class="text-blanc-text font-lato text-lg w-4/5 ">Indeed, you will be able to design, modify, sign, publish and even
              print your own NFT.</p>
        </div>
        <div>
          <img class="content-center w-72 pt-20 " src="/img/illustration.png" alt="illustration réseau NFT" />
        </div>
    </div>


            <div class="flex space-x-4 ">
              <button class="rounded-7xl h-11 w-32 bg-gradient-to-r from-mauve to-orange inline-flex items-center p-6">
                <RocketVue />
                <span class="text-blanc-text font-lato text-sm">Create</span>
              </button>
              <button class="rounded-7xl h-11 w-44 border-gradient-to-r from-mauve to-orange inline-flex items-center p-6">
                <RocketVue />
                <span class="text-blanc-text font-lato text-sm">Explore all</span>
              </button>
            </div>
    
      </div>
      <img src="/img/Looper-dk.png" class="-z-30 w-screen -mt-96" alt="looper" />
      
  
      <img src="/img/logos.png" class="pb-28 w-4/6 mx-auto" alt="éléments du projet" />

      <h3 class="font-nunito-sans text-lg  text-blanc-text px-36 ">What is NOFFTA ?</h3>
          <p class="px-36 text-white -mb-96 ">Another way to leave a footstep in the OFFF.</p>
      <img src="/img/map-barcelone.png" class="" alt="looper" />
        
     
        






      <div class="pt-12 px-36">
          </div>

          
    
  </main>
  <footer>
    <FooterVue />
  </footer>
</template>

<style scoped>
h2,
h3 {
  text-shadow: -1px 1.5px 0px #F81DFB;
}
</style>