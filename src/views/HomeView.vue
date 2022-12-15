<script setup>
import RocketVue from '../components/Rocket.vue';
import FooterVue from '../components/layout/Footer.vue';
import maposm from '../components/map/maposm.vue';
import BoutonSecondaryA from '../components/buttons/BoutonSign.vue';

import DropdownItem from '../components/DropdownItem.vue';
</script>

<template>
  <main>

    <div class="px-36">

      <div class="flex  space-x-32  pb-8 z-0">
        <div class="w-2/4">
          <h2 class="font-nunito-sans space-y-8 text-xl text-blanc-text  pb-6 pt-10">Noffta supports you in the creation
            of NFT
          </h2>
          <p class="text-blanc-text font-lato text-md w-4/6 space-x-2  ">Indeed, you will be able to design, modify,
            sign,
            publish
            and even
            print your own NFT.</p>
        </div>
        <div>
          <img class="content-center w-72 pt-20 " src="/img/illustration.png" alt="illustration réseau NFT" />
        </div>
      </div>


      <div class="flex space-x-10 z-30 -mt-10 ">
        <RouterLink to="/generator/#create" class="">
          <button
            class="rounded-7xl h-11 w-32  bg-gradient-to-r from-mauve to-orange inline-flex items-center p-6 hover:shadow-drop/drop-pink">
            <RocketVue />
            <span class="text-blanc-text font-lato text-sm">Create</span>
          </button>
        </RouterLink>

        <RouterLink to="/generator/#explore" class="">
          <button
            class="rounded-7xl h-11 w-32 box-s hover:shadow-drop/drop-white-s  inline-flex items-center py-6 px-2 space-x-2 ">
            <img src="/icons/explore.svg" alt="" class="pl-2 w-8">
            <span class="text-blanc-text font-lato text-sm">Explore all</span>
          </button>

        </RouterLink>

      </div>

    </div>
    <img src="/img/Looper-dk.png" class="-z-50 w-screen -mt-80" alt="looper" />


    <img src="/img/logos.png" class="pb-28 w-4/6 mx-auto" alt="éléments du projet" />
    <div class="bg-map-barcelone bg-no-repeat bg-contain h-200vh ">
      <div class="px-36 ">

        <h3 class="font-nunito-sans text-lg  text-blanc-text pb-20">What is NOFFTA ?</h3>
        <p class=" text-white italic text-base w-72 pb-12 ">Another way to leave a footstep in the OFFF.</p>


        <img src="/img/offf.webp" class="w-72 pb-12" alt="logo du OFFF" />
        <p class="text-white w-96 pb-20">Our project is linked to the OFFF Festival in Barcelona. We are setting up an
          NFT
          generator accessible to festival
          goers and we would like to have a stand to give them a ticket with their nft printed on it.</p>
        <maposm />

        <h3 class="font-nunito-sans text-lg pt-20  text-blanc-text ">HOW CREATE YOUR WITH NOFFTA ?</h3>
      </div>


      <div class="bg-tuto-texture bg-no-repeat pb-3 pt-20 bg-cover ">

        <div class="grid grid-cols-3 pb-28 pt-9 px-60">
          <div class="block -space-y-8">
            <h4 class="text-white text-center text-lg">1</h4>
            <img src="icons/1.svg" class="mx-auto" alt="étape 1" />
            <p class="text-white  text-center">Open the form Preferably on your smartphone</p>
          </div>


          <div class="-space-y-8">
            <h4 class="text-white text-center text-lg">2</h4>
            <img src="icons/2.svg" class="mx-auto" alt="étape 2" />
            <p class="text-white  text-center">Answer 10 questions</p>
          </div>


          <div class="-space-y-8 pb-20">
            <h4 class="text-white text-center text-lg">3</h4>
            <img src="icons/3.svg" class="mx-auto" alt="étape 3" />
            <p class="text-white  text-center">Select your favorite NFT amoung 3</p>
          </div>
        </div>


        <div class="grid grid-cols-3 -mt-36 pb-14    px-60">
          <div class="-space-y-8">
            <h4 class="text-white text-center text-lg">4</h4>
            <img src="icons/4.svg" class="mx-auto" alt="étape 4" />
            <p class="text-white  text-center">Customize your NFT (sign & distort)</p>
          </div>


          <div class="-space-y-8">
            <h4 class="text-white text-center text-lg">5</h4>
            <img src="icons/5.svg" class="mx-auto" alt="étape 5" />
            <p class="text-white  text-center">Save it to your account</p>
          </div>


          <div class="-space-y-8">
            <h4 class="text-white text-center text-lg">6</h4>
            <img src="icons/6.svg" class="mx-auto" alt="étape 6" />
            <p class="text-white  text-center">Join us at OFFF to receive your ticket with printed NFT</p>
          </div>
        </div>
      </div>
    </div>


    <div class="px-36 ">
      <img src="/img/BARCELONA.png" class="w-2/5 ml-auto pb-20" alt="barcelone" />


      <h3 class="font-nunito-sans text-lg  text-blanc-text pb-20">Frequently Asked Questions</h3>


      <div
        class="lg:w-auto lg:flex lg:justify-center lg:items-stretch lg:mt-0 w-80 min-h-[33rem] mt-12 shadow-drop/drop-pink relative bg-fond site rounded-3xl">
        <div class="lg:w-1/2 relative">
          <div class="lg:overflow-hidden lg:relative lg:flex lg:items-center h-full">
            <!-- <picture>
              <source srcset="/img/Rectangle.gif" media="(min-width: 1024px)">
              <img
                class="lg:-left-[4.25rem] lg:top-0 lg:relative rounded-full opacity-70 lg:z-10 lg:w-auto lg:max-w-full lg:drop-shadow-none w-60 absolute -top-[6.75rem] left-11 mx-auto drop-shadow-[0_2rem_0_#aaaaff30]"
                src="/img/Rectangle.gif" alt="illustration">

            </picture> -->
            <img class="hidden lg:block   rounded-full  lg:z-10  w-2/3 pr-5  " src="/img/Rectangle.gif"
              alt="illustration">
            <img class="hidden lg:block  w-1/3  r-10 pt-20 " src="/img/Faq.png" alt="background pattern">
          </div>

        </div>

        <div class="lg:pr-16 lg:w-1/2 lg:p-20">

          <DropdownItem>
            <template #header>What is an NFT ? </template>
            An NFT is an interchangeable and unique digital realization, which can be traded in cryptocurrency. They are
            disrupting markets around the world, from art to video games, from events to insurance.
          </DropdownItem>
          <DropdownItem>
            <template #header>What is a blockchain? </template>
            Unlike a traditional database, a blockchain is a series of linked "blocks" of data. This chain of blocks
            creates a shared digital ledger (collection of data) that records activity and information within the chain.
          </DropdownItem>
          <DropdownItem>
            <template #header>What is the price ? </template>
            You can create 5 free NFTs with NOFFTA !

            After 5 attempts, an NFT will be 1€. Furthermore, if you want to take a printed ticket of your unique
            creation, the ticket will be 50 cents.
          </DropdownItem>
          <DropdownItem>
            <template #header>What is the offf festival? </template>

            OFFF in Barcelona is the most innovative festival in the field of digital culture. Many events take place
            simultaneously during the festival, including conferences, exhibitions, performances, activities,
            interactive installations, networking spaces and inspiring parties.
          </DropdownItem>
          <DropdownItem>
            <template #header>Where & how to follow us ? </template>
            We will be present at the OFFF from 23 to 25 March 2023. If you wish to contact us, please contact us at the
            following address : contact
          </DropdownItem>
        </div>
      </div>





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
                <button type="button"
                  class="w-12 text-base rounded-r-10xl bg-gradient-to-tl from-rose to-vermillon  p-3 ">
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

h2:hover {
  text-shadow: -1px 1.5px 0px white;

}
</style>