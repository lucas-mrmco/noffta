<template>
  <main class="pt-12 px-20">

    <body>
      <h2 class="font-nunito-sans text-center text-xl text-blanc-text pb-10">Contact</h2>
      <div class="box bg-mauve bg-opacity-20 w-2/3 mx-auto p-20 rounded-15xl ">
        <p class="text-blanc-text font-lato text-sm pb-9">If you wish to contact us, please fill in the following information
          :</p>
        <form class="w-full max-w-lg mx-auto">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
                First Name
              </label>
              <input
                class="appearance-none block w-full  bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name" type="text" >
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                id="grid-last-name" type="text" >
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
          <div class="md:flex md:items-center">
            <div class="md:w-1/3 content-center">
              <button
                class="shadow bg-rose hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button">
                Send
              </button>
            </div>
            <div class="md:w-2/3"></div>
          </div>
        </form>

      </div>

    </body>


  </main>
</template>

<style scoped>
h2,
h3 {
  text-shadow: -1px 1.5px 0px #F81DFB;
}
</style>