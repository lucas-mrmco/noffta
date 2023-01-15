<template>
  <footer class="bg-footer-texture p-6 dark:bg-white bottom-0">
    <div class="px-10 md:flex md:justify-between ">

      <div class="grid space-x-8 gap-6 grid-cols-5">

        <div class="mt-6">
          <RouterLink to="/" class="">
            <img src="/logo/logo-ref-standart.svg" class="mr-3 h-8 mb-3 " alt="Logo Noffta" />
            <p class="text-white w-44 mb-16">An other way to leave a footstep in the OFFF.</p>
          </RouterLink>
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

              <Routerlink to="#" class="text-gray-500 hover:text-white dark:hover:text-white">
                <img src="/icons/dribbble.svg" class="h-11 w-11" alt="logo dribble" />
              </Routerlink>

            </div>
          </div>
        </div>

        <div class="mt-6">
          <h4 class="mb-6 text-sm font-semibold text-white uppercase ">Noffta</h4>
          <ul class="text-gray-300 dark:text-gray-400">
            <li class="mb-3">
              <Routerlink to="/contact" class="hover:underline">How Noffta works ?</Routerlink>
            </li>
            <li class="mb-3">
              <Routerlink to="/generator" class="hover:underline">Create your NFT</Routerlink>
            </li>
            <li class="mb-3">
              <Routerlink to="/generator" class="hover:underline">Explore all</Routerlink>
            </li>
          </ul>
        </div>

        <div class="mt-6 ">
          <h4 class="mb-6 text-sm font-semibold text-white uppercase ">Subscribe Us</h4>

          <form action="#">
            <div class="items-center mx-auto mb-3  max-w-screen-sm flex space-y-0">
              <div class="relative w-full">
                <label for="email" class="hidden text-sm text-gray-300">Email address</label>
                <input class=" p-3 w-full text-sm text-black bg-gray-50 rounded-l-10xl  "
                  placeholder="Info@yourgmail.com" type="email" id="email">
              </div>
              <a href="/">
                <button type="button"
                  class="w-12 text-base rounded-r-10xl bg-gradient-to-tl from-rose to-vermillon p-3 ">
                  <img src="/icons/send.svg" alt="avion en papier" />
                </button>
              </a>
            </div>
          </form>

        </div>

        <div class="mt-6 ">
          <h4 class="mb-6 text-sm font-semibold text-white uppercase  ">Contact</h4>
          <ul class="text-gray-300 dark:text-gray-400">
            <li class="mb-3">
              <Routerlink to="" class="hover:underline ">Help & Support</Routerlink>
            </li>
            <li class="mb-3">
              <Routerlink to="" class="hover:underline">Contact us</Routerlink>
            </li>
            <li class="mb-3">
              <Routerlink to="" class="hover:underline">CSupport us</Routerlink>
            </li>
          </ul>
        </div>



        <div class=" w-60 pr-6">
          <a href="http://mmimontbeliard.com/">
            <img src="/icons/mmi.svg" class="mx-10 w-14 " alt="logo mmi montbéliard" />
            <p class="mb-3 text-sm text-gray-300  text-left">
              Project realized
              within the framework of an educational exercise in the
              <a href="http://mmimontbeliard.com/" class="liendeg hover:underline" target="_blank">
                MMi department of Montbéliard.
              </a>
            </p>
          </a>
        </div>
      </div>

    </div>

    <div class="flex mr-20 pt-9">
      <div class="mx-20">
        <span class="text-sm text-gray-300 text-center ">© 2023
          <Routerlink to="https://noffta.com/" class="hover:underline"> Noffta </Routerlink> | All Rights Reserved.
        </span>
      </div>

      <div class="flex space-x-6 text-sm text-gray-300 text-center ml-auto ">
        <RouterLink to="/mentions" class="hover:underline ">Privacy Policy</RouterLink>
        <RouterLink to="/conditions" class="hover:underline ">Terms of Service</RouterLink>
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
</style>