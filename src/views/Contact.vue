<template>
  <main class="mx-36 pb-20 pt-10">

    <body>
      <h2 class=" sm:text-1xl md:text-lg lg:text-xl font-nunito-sans text-center text-blanc-text pb-10">Contact</h2>
      <div class="box bg-mauve bg-opacity-20 w-2/3 mx-auto p-20 rounded-15xl ">
        <p class="text-blanc-text font-lato text-sm pb-9">If you wish to contact us, please fill in the following
          information
          :</p>
        <form class="w-full max-w-lg mx-auto">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
                First Name
              </label>
              <input
                class="appearance-none block w-full  bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name" type="text">
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                id="grid-last-name" type="text">
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-white  text-xs font-bold mb-2" for="grid-password">
                E-mail
              </label>
              <input
                class="appearance-none block w-full  bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email" type="email">
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                Message
              </label>
              <textarea
                class=" no-resize appearance-none block w-full  bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"></textarea>
            </div>
          </div>
          <div class="w-full">
            <button
              class="rounded-2xl  mx-auto h-11 w-32 space-x-2  bg-gradient-to-tr from-violet to-rose inline-flex items-center p-6 hover:shadow-drop/drop-white-s">
              <img src="/icons/send.svg" alt="" class="w-8">
              <span class="text-blanc-text font-lato text-sm">Create</span>
            </button>
          </div>

        </form>
      </div>


      <div class="pt-96 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 gap-x-4 justify-items-center ">

        <div>
          <img src="/img/marion.png" class="w-52" alt="photo de marion gillot" />
          <p class="text-white pt-4 pb-4 text-center">Marion Gillot</p>
        </div>
        <div>
          <img src="/img/lucas.png" class="w-52" alt="photo de lucas moramarco" />
          <p class="text-white pt-4 pb-4 text-center">Lucas Moramarco</p>
        </div>
        <div>
          <img src="/img/arthur.png" class="w-52 " alt="photo de arthur meyer" />
          <p class="text-white pt-4 pb-4 text-center">Arthur Meyer</p>
        </div>
        <div>
          <img src="/img/agathe.png" class="w-52 " alt="photo de agathe eccher" />
          <p class="text-white pt-4 pb-4 text-center">Agathe Eccher</p>
        </div>

      </div>


      <div class="pt-20 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 pb-20 justify-items-center ">

        <div>
          <h3 class="font-nunito-sans text-lg text-blanc-text pb-10">Who are we?</h3>
          <p class="text-white pt-4 pb-4 w-2/3 ">We are 2 designers, 1 communicator, and 1 developer.
            All four of us are second year students in MMi, Métier du Multimédia et de l'Internet, at the IUT of
            Montbéliard (25) in France. </p>
        </div>
        <div>
          <h3 class="font-nunito-sans text-lg text-blanc-text pb-10">What are our missions?</h3>
          <p class="text-white pt-4 pb-4 w-2/3 ">As a pedagogical exercise, our mission is to create an online NFT
            generator, while offering you the best possible use and experience. </p>
        </div>
      </div>


      <div class="flex space-x-20">
        <img src="/img/paypal.png" class="w-20 h-24" />
        <h2 class="font-nunito-sans text-xl text-blanc-text pb-10">Support us !</h2>
      </div>

      <p class="text-white mx-40 w-2/5 pb-3">If you are interested in our project, you can contribute to its success!
      </p>

      <span class="text-sm text-white mx-40 w-2/5 font-bold sm:text-center ">Here is our paypal link :
        <Routerlink to="https://noffta.com/" class="hover:underline"> https://</Routerlink>
      </span>


    </body>


  </main>
</template>

<style scoped>
h2,
h3 {
  text-shadow: -1px 1.5px 0px #F81DFB;
  color: white;
}
</style>