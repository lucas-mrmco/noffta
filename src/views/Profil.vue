<template>
  <main>

    <body>
      <div class="lg:mx-28 pt-20 mx-10  lg:pt-10">

        <div class="mx-auto pb-4 lg:pb-16">
          <div class="flex pb-6 place-content-center">
            <div>
              <img src="/img/profil.webp" class=" w-60 pt-10" alt="photo de profil" />
            </div>

            <div class="lg:mt-56 mt-20 ">
              <router-link to="/modifications">
                <img src="/icons/edit.svg" alt="modifier le profil" />
              </router-link>
            </div>
          </div>


          <div class="flex space-x-4 justify-center pb-3">
            <h4 class="text-white text-center mt-1">Vera Royelese</h4>
            <img src="/icons/logout.svg" class="w-7" alt="se déconnecter" />
          </div>
          <p class="text-white text-center">VERA.ROYELESE@GMAIL.COM</p>

          <div
            class="justify-center w-24 py-4 mt-4 bg-gradient-to-tr from-violet-profil to-rose border border-white rounded-17xl ">
            <img src="/icons/create.svg" class="mx-auto w-12" alt="creer un nouveau NFT" />
          </div>
        </div>
      </div>

      <div class=" bg-looper bg-no-repeat">
        <!-- <img src="/img/Looper-dk.png" class="-z-30 w-screen -mt-" alt="looper" /> -->


        <div class="lg:mx-28 mx-10">

          <div
            class="grid  grid-flow-row grid-cols-2 h-40 lg:gap-4 lg:grid-cols-3 lg:space-x-7 space-x-4 space-y-4 lg:space-y-7 sm-grid-row-3 lg:h-60 max-h-60 ">

            <div id="jh-stats-neutral "
              class="flex flex-col justify-center px-4 py-3 mt-4 bg-gradient-to-tr from-violet-profil to-rose border border-white rounded-25xl lg:h-60 h-32 sm:mt-0">
              <div class="">
                <p class="text-center text-white text-base lg:text-md">Add your new NFT</p>
              </div>
              <img src="/icons/add.svg" class="mx-auto lg:w-20 w-14" alt="creer un nouveau NFT" />
            </div>

            <div id="jh-stats-neutral"
              class="flex flex-col justify-center px-4 py-4 mt-4 bg-gradient-to-tr from-violet-profil to-rose border border-white rounded-25xl sm:mt-0">
              <div>
                <img src="/icons/create.svg" class="mx-auto lg:w-20 w-14" alt="creer un nouveau NFT" />
              </div>
            </div>

            <div id="jh-stats-neutral"
              class="flex flex-col justify-center px-4 py-4 mt-4 bg-gradient-to-tr from-violet-profil to-rose border border-white rounded-25xl sm:mt-0">
              <div>
                <img src="/icons/create.svg" class="mx-auto lg:w-20 w-14" alt="creer un nouveau NFT" />
              </div>
            </div>

            <div id="jh-stats-neutral"
              class="flex flex-col justify-center px-4 py-4 mt-4 bg-gradient-to-tr from-violet-profil to-rose border border-white rounded-25xl sm:mt-0">
              <div>
                <img src="/icons/create.svg" class="mx-auto lg:w-20 w-14" alt="creer un nouveau NFT" />
              </div>
            </div>

            <div id="jh-stats-neutral"
              class="flex flex-col justify-center px-4 py-4 mt-4 bg-gradient-to-tr from-violet-profil to-rose border border-white rounded-25xl sm:mt-0">
              <div>
                <img src="/icons/create.svg" class="mx-auto lg:w-20 w-14" alt="creer un nouveau NFT" />
              </div>
            </div>

            <div id="jh-stats-neutral"
              class="flex flex-col justify-center px-4 py-4 mt-4 bg-fond-profil bg-opacity-30 lg:h-60 h-40 border-white rounded-25xl sm:mt-0">
              <div class="space-y-4">
                <p class="text-center text-white lg:text-md text-base">5 Free NFT </p>
                <img src="/icons/buy.svg" class="mx-auto lg:w-20 w-14" alt="creer un nouveau NFT" />
                <p class="text-center text-white lg:text-md text-base">If you want more +50cents</p>
              </div>
            </div>

            <div id="jh-stats-neutral"
              class="flex flex-col justify-center px-4 py-4 mt-4 bg-fond-profil bg-opacity-30 lg:h-60 h-40 border-white rounded-25xl sm:mt-0">
              <div class="space-y-4">
                <p class="text-center text-white lg:text-md text-base">5 Free NFT </p>
                <img src="/icons/buy.svg" class="mx-auto lg:w-20 w-14" alt="creer un nouveau NFT" />
                <p class="text-center text-white lg:text-md text-base">If you want more +50cents</p>
              </div>
            </div>

            <div id="jh-stats-neutral"
              class="flex flex-col justify-center px-4 py-4 mt-4 bg-fond-profil bg-opacity-30 lg:h-60 h-40 border-white rounded-25xl sm:mt-0">
              <div class="space-y-4">
                <p class="text-center text-white lg:text-md text-base">5 Free NFT </p>
                <img src="/icons/buy.svg" class="mx-auto lg:w-20 w-14" alt="creer un nouveau NFT" />
                <p class="text-center text-white lg:text-md text-base">If you want more +50cents</p>
              </div>
            </div>

            <div id="jh-stats-neutral"
              class="flex flex-col justify-center px-4 py-4 mt-4 bg-fond-profil bg-opacity-30 lg:h-60 h-40 border-white rounded-25xl sm:mt-0">
              <div class="lg:space-y-4 space-y-2">
                <p class="text-center text-white lg:text-md text-base">5 Free NFT </p>
                <img src="/icons/buy.svg" class="mx-auto lg:w-20 w-14" alt="creer un nouveau NFT" />
                <p class="text-center text-white lg:text-md text-base">If you want more +50cents</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </body>
    <footer>
      <FooterXS class="lg:hidden" />
      <FooterLG class="hidden lg:block" />
    </footer>
  </main>
</template>





<script>

import FooterXS from '../components/layout/FooterXS.vue';
import FooterLG from '../components/layout/FooterLG.vue';
</script>
