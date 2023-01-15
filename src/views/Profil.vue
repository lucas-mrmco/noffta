<template>
  <main>

    <body>
      <div class="mx-28 pt-10">

        <div class="mx-auto pb-16">
          <div class="flex pb-6 place-content-center">
            <div>
              <img src="/img/profil.webp" class=" w-60 pt-10" alt="photo de profil" />
            </div>

            <div class="mt-56 ">
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


        <div class="mx-28">

          <div
            class="sm:grid sm:h-32 sm:grid-flow-row sm:gap-4 sm:grid-cols-3 space-x-7 space-y-7 sm-grid-row-3 h-60 max-h-60 ">

            <div id="jh-stats-neutral "
              class="flex flex-col justify-center px-4 py-3 mt-4 bg-gradient-to-tr from-violet-profil to-rose border border-white rounded-25xl h-60 sm:mt-0">
              <div class="">
                <p class="text-center text-white text-md">Add your new NFT</p>
              </div>
              <img src="/icons/add.svg" class="mx-auto w-20" alt="creer un nouveau NFT" />
            </div>

            <div id="jh-stats-neutral"
              class="flex flex-col justify-center px-4 py-4 mt-4 bg-gradient-to-tr from-violet-profil to-rose border border-white rounded-25xl sm:mt-0">
              <div>
                <img src="/icons/create.svg" class="mx-auto w-20" alt="creer un nouveau NFT" />
              </div>
            </div>

            <div id="jh-stats-neutral"
              class="flex flex-col justify-center px-4 py-4 mt-4 bg-gradient-to-tr from-violet-profil to-rose border border-white rounded-25xl sm:mt-0">
              <div>
                <img src="/icons/create.svg" class="mx-auto w-20" alt="creer un nouveau NFT" />
              </div>
            </div>

            <div id="jh-stats-neutral"
              class="flex flex-col justify-center px-4 py-4 mt-4 bg-gradient-to-tr from-violet-profil to-rose border border-white rounded-25xl sm:mt-0">
              <div>
                <img src="/icons/create.svg" class="mx-auto w-20" alt="creer un nouveau NFT" />
              </div>
            </div>

            <div id="jh-stats-neutral"
              class="flex flex-col justify-center px-4 py-4 mt-4 bg-gradient-to-tr from-violet-profil to-rose border border-white rounded-25xl sm:mt-0">
              <div>
                <img src="/icons/create.svg" class="mx-auto w-20" alt="creer un nouveau NFT" />
              </div>
            </div>

            <div id="jh-stats-neutral"
              class="flex flex-col justify-center px-4 py-4 mt-4 bg-fond-profil bg-opacity-30 h-60 border-white rounded-25xl sm:mt-0">
              <div class="space-y-4">
                <p class="text-center text-white text-md">5 Free NFT </p>
                <img src="/icons/buy.svg" class="mx-auto w-20" alt="creer un nouveau NFT" />
                <p class="text-center text-white text-md">If you want more +50cents</p>
              </div>
            </div>

            <div id="jh-stats-neutral"
              class="flex flex-col justify-center px-4 py-4 mt-4 bg-fond-profil bg-opacity-30 h-60 border-white rounded-25xl sm:mt-0">
              <div class="space-y-4">
                <p class="text-center text-white text-md">5 Free NFT </p>
                <img src="/icons/buy.svg" class="mx-auto w-20" alt="creer un nouveau NFT" />
                <p class="text-center text-white text-md">If you want more +50cents</p>
              </div>
            </div>

            <div id="jh-stats-neutral"
              class="flex flex-col justify-center px-4 py-4 mt-4 bg-fond-profil bg-opacity-30 h-60 border-white rounded-25xl sm:mt-0">
              <div class="space-y-4">
                <p class="text-center text-white text-md">5 Free NFT </p>
                <img src="/icons/buy.svg" class="mx-auto w-20" alt="creer un nouveau NFT" />
                <p class="text-center text-white text-md">If you want more +50cents</p>
              </div>
            </div>

            <div id="jh-stats-neutral"
              class="flex flex-col justify-center px-4 py-4 mt-4 bg-fond-profil bg-opacity-30 h-60 border-white rounded-25xl sm:mt-0">
              <div class="space-y-4">
                <p class="text-center text-white text-md">5 Free NFT </p>
                <img src="/icons/buy.svg" class="mx-auto w-20" alt="creer un nouveau NFT" />
                <p class="text-center text-white text-md">If you want more +50cents</p>
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
