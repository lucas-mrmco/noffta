<script setup>
import BoutonGenerator from "../buttons/BoutonGen.vue"
import BoutonSecondaryA from "../buttons/BoutonSign.vue";

</script>

<template>

  <header class="z-50 xl:px-16 p-8 space-x-2  xl:py-10 text-xl w-full xl:space-x-16 lg:space-x-8 ">
    <!-- logo -->
    <div>
      <RouterLink class="justify-start " to="/"><img src="/logo/logo-ref-standart.svg" class="w-44 pt-5 mx-8 xl:ml-16"
          alt="logo noffta"></RouterLink>
    </div>
    <!-- navigation  -->
    <div class="py-1 xl:px-10 px-5 bg-header-texture bg-no-repeat">
      <nav class="  ">
        <ul class=" flex space-x-14 font-nunito-sans   text-white   uppercase mt-5 text-sm px-10  ">
          <li class="hover:text-rose">
            <a href="/#OFFF">
              <h2> OFFF</h2>
            </a>
          </li>
          <li class="hover:text-rose">
            <a href="/#NFT">
              <h2> NFT</h2>
            </a>
          </li>
          <li class="hover:text-rose">
            <a href="/#FAQ">
              <h2>FAQ</h2>
            </a>
          </li>
          <li class="hover:text-rose">
            <RouterLink to="/contact">
              <h2>CONTACT</h2>
            </RouterLink>
          </li>
        </ul>

      </nav>
    </div>
    <!-- 2 boutons -->
    <div class="space-x-5  xl:space-x-8 justify-end">
      <!-- <BoutonGenerator /> -->
      <!-- <BoutonSignIn /> -->

      <RouterLink to="/generator" class="">
        <button class="text-white hover:text-rose items-center z-10 h-2/5 w-2/5 text-center text-sm wave-btn"
          type="button">

          <div class="flex items-center justify-center ">
            <BoutonGenerator />
            <span class="absolute  z-20  ">GENERATOR</span>
            <span class="wave-btn__waves"></span>

          </div>
        </button>
      </RouterLink>

      <RouterLink to="/login" class="">
        <button class="text-white hover:text-rose items-center z-10 h-2/5 w-2/5 text-center text-sm " type="button">

          <div class="flex items-center justify-center ">
            <BoutonSecondaryA />
            <span class="absolute  z-20  ">SIGN IN</span>

          </div>
        </button>
      </RouterLink>


    </div>


  </header>
</template>




<style scoped>
h2,
h3 {
  text-shadow: -1px 1.5px 0px #F81DFB;

}

h2:hover {
  text-shadow: -1px 1.5px 0px white;

}
</style>