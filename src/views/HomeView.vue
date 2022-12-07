<script setup>
import RocketVue from '../components/Rocket.vue';
import FooterVue from '../components/layout/Footer.vue';
import maposm from '../components/map/maposm.vue';
import BoutonSecondaryA from '../components/buttons/BoutonSign.vue';
</script>

<template>
  <main>

    <div class="px-36">

      <div class="flex content-between space-x-32 pb-8">
        <div class="w-2/4">
          <h2 class="font-nunito-sans text-xl text-blanc-text  pb-6 pt-10">Noffta supports you in the creation of NFT
          </h2>
          <p class="text-blanc-text font-lato text-lg w-4/5 ">Indeed, you will be able to design, modify, sign, publish
            and even
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

        <button class="text-white items-center z-10 h-11 w-44 text-center place-content-center " type="button">
          <BoutonSecondaryA />
          <span class="text-blanc-text font-lato text-sm uppercase text-center">Sign in</span>
        </button>


      </div>

    </div>
    <img src="/img/Looper-dk.png" class="-z-30 w-screen -mt-96" alt="looper" />


    <img src="/img/logos.png" class="pb-28 w-4/6 mx-auto" alt="éléments du projet" />

    <div class="px-36">

      <h3 class="font-nunito-sans text-lg  text-blanc-text pb-20">What is NOFFTA ?</h3>
      <p class=" text-white italic text-base w-72 pb-12 ">Another way to leave a footstep in the OFFF.</p>


      <img src="/img/offf.webp" class="w-72 pb-12" alt="logo du OFFF" />
      <p class="text-white w-96 pb-20">Our project is linked to the OFFF Festival in Barcelona. We are setting up an NFT
        generator accessible to festival
        goers and we would like to have a stand to give them a ticket with their nft printed on it.</p>
      <maposm />

      <h3 class="font-nunito-sans text-lg  text-blanc-text ">HOW CREATE YOUR WITH NOFFTA ?</h3>
    </div>


    <div class="bg-tuto-texture bg-no-repeat pb-10 pt-32">

      <div class="grid grid-cols-3 pb-16 px-60">
        <div>
          <h4 class="text-white text-center text-lg">1</h4>
          <img src="icons/1.svg" class="mx-auto" alt="étape 1" />
          <p class="text-white  text-center">Open the form Preferably on your smartphone</p>
        </div>


        <div>
          <h4 class="text-white text-center text-lg">2</h4>
          <img src="icons/2.svg" class="mx-auto" alt="étape 2" />
          <p class="text-white  text-center">Answer 10 questions</p>
        </div>


        <div>
          <h4 class="text-white text-center text-lg">3</h4>
          <img src="icons/3.svg" class="mx-auto" alt="étape 3" />
          <p class="text-white  text-center">Select your favorite NFT amoung 3</p>
        </div>
      </div>


      <div class="grid grid-cols-3  px-60">
        <div>
          <h4 class="text-white text-center text-lg">4</h4>
          <img src="icons/4.svg" class="mx-auto" alt="étape 4" />
          <p class="text-white  text-center">Customize your NFT (sign & distort)</p>
        </div>


        <div>
          <h4 class="text-white text-center text-lg">5</h4>
          <img src="icons/5.svg" class="mx-auto" alt="étape 5" />
          <p class="text-white  text-center">Save it to your account</p>
        </div>


        <div>
          <h4 class="text-white text-center text-lg">6</h4>
          <img src="icons/6.svg" class="mx-auto" alt="étape 6" />
          <p class="text-white  text-center">Join us at OFFF to receive your ticket with printed NFT</p>
        </div>
      </div>

    </div>


    <div class="px-36">
      <img src="/img/BARCELONA.png" class="w-2/5 ml-auto pb-20" alt="barcelone" />


      <h3 class="font-nunito-sans text-lg  text-blanc-text pb-20">Frequently Asked Questions</h3>

      <p class="text-white">FAQ à faire ici</p>


      <div>

        <div class="bg-newsletter bg-no-repeat pb-96 pt-32" alt="formulaire de la newsletter">
          <h2 class="font-nunito-sans text-lg  text-blanc-text pb-10 text-center pt-32"> Subscribe to our newsletter
          </h2>
          <form action="#">
            <div class="items-center mx-auto mb-3 space-y-4 max-w-sm sm:flex sm:space-y-0">
              <div class=" w-96 mx-auto">
                <label for="email" class="hidden text-sm text-gray-300">Email address</label>
                <input class=" p-3 w-full text-sm text-black bg-gray-50 rounded-l-10xl  "
                  placeholder="Info@yourgmail.com" type="email" id="email">
              </div>
              <a href="/">
                <button type="button" class="w-12 text-base rounded-r-10xl bg-mauve p-3 ">
                  <img src="icons/send.svg" alt="avion en papier" />
                </button>
              </a>
            </div>
          </form>
        </div>

      </div>

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