<script setup>
import BoutonGenerator from "../buttons/BoutonGenerator.vue"
import BoutonSignIn from "../buttons/BoutonSignIn.vue"
</script>

<template>

  <header class="z-50 p-10 text-xl w-full space-x-80  ">
    <!-- logo -->
    <div>
      <RouterLink class="justify-start" to="/"><img src="/logo/logo-ref-standart.svg" class="w-36 pt-5 mx-20"
          alt="logo noffta"></RouterLink>
    </div>
    <!-- navigation  -->
    <div class="py-1 px-10 bg-header-texture bg-no-repeat">
      <nav class="  ">
        <ul class=" flex space-x-14 font-nunito-sans   text-white   uppercase mt-5 text-sm px-10  ">
          <li class="hover:text-rose">
            <RouterLink to="/#OFFF">
              <h2> OFFF</h2>
            </RouterLink>
          </li>
          <li class="hover:text-rose">
            <RouterLink to="/#NFT">
              <h2> NFT</h2>
            </RouterLink>
          </li>
          <li class="hover:text-rose">
            <RouterLink to="/#FAQ">
              <h2>FAQ</h2>
            </RouterLink>
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
    <div class="  space-x-8 justify-end">
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