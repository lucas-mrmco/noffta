<template>
  <header class="p-5 top-0 fixed z-50 flex h-16 w-screen items-center shadow-xl">
    <Menu1 class="absolute right-4 w-12 h-auto" @click="MenuOpen = !MenuOpen" v-if="!MenuOpen" />
    <Close class="absolute right-4 z-50 w-12 h-auto" @click="MenuOpen = !MenuOpen" v-if="MenuOpen" />
    <RouterLink class="p-4" to="/"><img src="../../assets/logo.svg" class="w-24 mt-10 " alt=""></RouterLink>
    <nav
      class="absolute left-0 top-24 bottom-0 right-0 h-screen -translate-x-full bg-gradient-to-br from-fond-site to-violet opacity-0 z-50"
      :class="MenuOpen && 'translate-x-0 opacity-100'">
      <ul
        class="flex gap-10 sm:gap-20 my-20 sm:my-40 flex-col items-center justify-center text-left text-base  font-montserrat">

        <li>
          <RouterLink to="/#OFFF" @click="MenuOpen = !MenuOpen">
            <button class="text-white bg-vermillon p-5">OFFF</button>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/#NFT" @click="MenuOpen = !MenuOpen">
            NFT
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/#FAQ" @click="MenuOpen = !MenuOpen">
            FAQ
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" @click="MenuOpen = !MenuOpen">
            Contact
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
