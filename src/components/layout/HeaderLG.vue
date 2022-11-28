<!-- <script setup>

</script>

<template>

  <header class="z-50 p-5 text-xl fixed w-full  ">
    <RouterLink class="justify-start  " to="/"><img src="../../../public/logo/logo-ref-standart.svg" class="w-40 pt-5"
        alt="">
    </RouterLink>
    <div class="flex justify-center backdrop-blur-lg  bg-gradient-to-b from-white  to-transparent px-10  opacity-10 ">
      <nav class="flex space-x-8  pt-10   font-league-gothic uppercase ">
        <RouterLink class="text-white hover:text-violet" to="/#OFFF">OFFF</RouterLink>
        <RouterLink class="text-white hover:text-violet" to="/#NFT">NFT </RouterLink>
        <RouterLink class="text-white hover:text-violet" to="/#FAQ"> FAQ</RouterLink>
        <RouterLink class="text-white hover:text-violet" to="/contact">CONTACT </RouterLink>
      </nav>
    </div>

  </header>



</template>


 -->

<script setup>
import BoutonGenerator from "../buttons/BoutonGenerator.vue"
import BoutonSignIn from "../buttons/BoutonSignIn.vue"
</script>

<template>

  <header class="z-50 p-10 text-xl w-full  ">
    <RouterLink class="justify-start" to="/"><img src="../../../public/logo/logo-ref-standart.svg"
        class="w-36 pt-5 mx-20" alt="logo noffta"></RouterLink>
    <div class="flex justify-center backdrop-blur-2xl  bg-white px-28  bg-opacity-10 ">
      <nav class="flex space-x-12 font-league-gothic uppercase mt-5 text-sm px-10  ">
        <RouterLink to="/#OFFF">
          <h2 class=" text-white hover:shadow-drop/drop-pink"> OFFF</h2>
        </RouterLink>
        <RouterLink to="/#NFT">
          <h2 class=" text-white hover:shadow-drop/drop-pink"> NFT</h2>
        </RouterLink>
        <RouterLink to="/#FAQ">
          <h2 class=" text-white hover:shadow-drop/drop-pink">FAQ</h2>
        </RouterLink>
        <RouterLink to="/contact">
          <h2 class=" text-white hover:shadow-drop/drop-pink">CONTACT</h2>
        </RouterLink>
      </nav>
    </div>

    <div class="mx-20 flex space-x-8">
      <BoutonGenerator />
      <BoutonSignIn />
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