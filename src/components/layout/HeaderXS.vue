<template>
  <header class="head p-5 top-0 fixed z-10   flex h-20 w-screen items-center shadow-xl backdrop-blur-2xl">
    <Menu1 class="absolute mt-4 right-4 w-12 z-50 h-auto" @click="MenuOpen = !MenuOpen" v-if="!MenuOpen" />
    <Close class="absolute right-4 z-50 w-12 h-auto" @click="MenuOpen = !MenuOpen" v-if="MenuOpen" />
    <RouterLink class="p-4" to="/"><img src="/logo/logo-ref-standart.svg" class="w-32 mt-4 " alt=""></RouterLink>
    <nav
      class="absolute left-0 top-0 bottom-0 right-0 h-screen -translate-x-full bg-gradient-to-b from-fond-site to-rose opacity-0"
      :class="MenuOpen && 'translate-x-0 opacity-100'">

      <ul
        class="flex text-white text-md gap-8  my-40 font-bold flex-col items-center justify-center text-left  font-nunito-sans">

        <li>
          <RouterLink to="/" @click="MenuOpen = !MenuOpen">
            <img src="/logo/logo-ref-standart.svg" alt="">
          </RouterLink>

        </li>
        <span class="w-4/5 bg-rose h-0.5"></span>
        <li>
          <RouterLink to="/generator" @click="MenuOpen = !MenuOpen">
            NFT Generator
          </RouterLink>
        </li>
        <span class="w-4/5 bg-rose h-0.5"></span>
        <li>
          <RouterLink to="/contact" @click="MenuOpen = !MenuOpen">
            Contact
          </RouterLink>
        </li>
        <span class="w-4/5 bg-rose h-0.5"></span>
        <li>
          <RouterLink to="/login" @click="MenuOpen = !MenuOpen">
            Sign In
          </RouterLink>
        </li>
        <span class="w-4/5 bg-rose h-0.5"></span>
        <li>
          <RouterLink to="/registration" @click="MenuOpen = !MenuOpen" class="bg-white text-rose px-5 py-3 rounded-8xl">
            Sign Up
          </RouterLink>
        </li>

      </ul>
    </nav>
  </header>
</template> 


<script>

import Menu1 from "../icons/Menu.vue";

import Close from "../icons/Close.vue";
export default {
  data() {
    return {
      MenuOpen: false,
    };
  },
  components: { Menu1, Close },
};
</script> 

<style scoped>
.head {
  -webkit-backdrop-filter: blur(15px);
  /* assure la compatibilité avec safari */
  backdrop-filter: blur(15px);
  background-color: rgba(255, 255, 255, 0.2);
}
</style>