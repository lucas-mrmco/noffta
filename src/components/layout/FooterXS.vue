
<template>
  <footer class="foot p-6  bottom-0">
    <div class="px-5">

      <div class="">

        <div class="mt-6">
          <RouterLink to="/" class="">
            <img src="/logo/logo-ref-standart.svg" class="mr-3 h-8 mb-3 " alt="Logo Noffta" />
            <p class="text-white w-44 mb-6">An other way to leave a footstep in the OFFF.</p>
          </RouterLink>


        </div>

        <div class="">

          <ul class="text-gray-300 dark:text-gray-400">
            <li class="mb-3">
              <Routerlink to="/generator" class="hover:underline">Create your NFT</Routerlink>
            </li>
            <li class="mb-3">
              <Routerlink to="/profil" class="hover:underline">Your NFT(s)</Routerlink>
            </li>

            <li class="mb-3">
              <Routerlink to="/contact" class="hover:underline">Contact</Routerlink>
            </li>
            <li class="mb-3">
              <Routerlink to="/mentions" class="hover:underline">Terms & conditions</Routerlink>
            </li>
            <li class="mb-3">
              <Routerlink to="/conditions" class="hover:underline">Privacy Policy</Routerlink>
            </li>
          </ul>
        </div>




        <div class="flex space-x-4">
          <a href="http://mmimontbeliard.com/">
            <img src="/icons/mmi.svg" class="w-32 " alt="logo mmi montbéliard" />
            <p class=" text-xs text-gray-300  text-left">
              Project realized
              within the framework of an educational exercise in the
              <a href="http://mmimontbeliard.com/" class="liendeg hover:underline" target="_blank">
                MMi department of Montbéliard.
              </a>
            </p>
          </a>
        </div>
      </div>
      <div class="flex items-center justify-between">

        <div class="flex mt-10 space-x-4 justify-center">
          <a href="https://instagram.com/noffta_2023?igshid=YmMyMTA2M2Y="
            class="text-gray-500 hover:text-white dark:hover:text-white" target="_blank">
            <img src="/icons/instagram.svg" class="h-11 w-11" alt="logo instagram" />
          </a>

          <a href="https://www.behance.net/noffta2023" class="text-gray-500 hover:text-white dark:hover:text-white"
            target="_blank">
            <img src="/icons/behance.svg" class="h-11 w-11" alt="logo behance" />
          </a>

          <Routerlink to="" class="text-gray-500 hover:text-white dark:hover:text-white">
            <img src="/icons/dribbble.svg" class="h-11 w-11" alt="logo dribble" />
          </Routerlink>

        </div>
      </div>
      <div class="mx-3 py-4">
        <span class="text-sm text-gray-300 text-center ">© 2023
          <Routerlink to="https://noffta.com/" class="hover:underline"> Noffta </Routerlink> | All Rights Reserved.
        </span>
      </div>
    </div>









  </footer>
</template>

<script>


</script>

<style scoped >
.liendeg {
  background-image: linear-gradient(to left bottom, #F81DFB, white);
  -webkit-background-clip: text;
  color: transparent;
}

.liendeg:hover {
  background-image: linear-gradient(to right top, #F81DFB, white);
  -webkit-background-clip: text;
  color: transparent;
}

.foot {
  -webkit-backdrop-filter: blur(15px);
  /* assure la compatibilité avec safari */
  backdrop-filter: blur(15px);
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
