<template>
  <main class="lg:mx-36 lg:pb-20 lg:pt-10 pt-40 mx-10">

    <h2 class="font-dark text-white text-5xl font-bold">404</h2>
    <p class="xl:text-xl font-light leading-normal md:text-xl text-white">Désolé, cette page n'existe pas.</p>
    <p class="mb-8 text-white">Retournez à la page d'accueil !</p>
    <RouterLink to="/">
      <button class="
                focus:shadow-outline-blue
                mb-10
                inline
                rounded-lg
                border border-transparent
                bg-rose
                px-4
                py-2
                text-sm
                font-medium
                leading-5
                text-white
                shadow
                transition-colors
                duration-150
              ">
        retour à l'accueil
      </button>

    </RouterLink>
  </main>
</template>

<style scoped>
p {
  text-shadow: -1px 1.5px 0px #F81DFB;

}

/* 
h2:hover {
  text-shadow: -1px 1.5px 0px white;


} */
</style>