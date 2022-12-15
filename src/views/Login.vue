<script>
</script>

<template>

<main class="pt-10 px-28">
    <body>

        <h2 class="sm:text-1xl md:text-lg lg:text-xl font-nunito-sans text-blanc-text mb-10 text-center">Login</h2>
    
        <div class="box bg-mauve bg-opacity-20 w-2/3 mx-auto p-20 rounded-15xl ">
            
        <form class=" rounded px-20 pt-6  mb-4 ">
        <div class="mb-4 px-14">
            <label class="block text-white text-sm mb-2" for="userna">
            EMAIL
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" >
        </div>
        <div class="mb-6 px-14">
            <label class="block text-white text-sm mb-2" for="password">
            PASSWORD
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password">
        </div>
        <div class="text-center">
            <a class="inline-block align-baseline text-white  text-sm mb-9 " href="#">
            I’ve forgotten my password
            </a>
        </div>
        <div class="flex space-x-6 justify-center">
            <div>
            <RouterLink to="/registration" class="flex-row justify-end ">
                <button type="button" class="w-36 text-base rounded-3xl border-2 border-mauve p-3 text-center text-white font-light ">
                    SIGN UP
                </button>
            </RouterLink>
            </div>
            <div>
            <RouterLink to="/profil" class="flex-row justify-end">
                <button type="button" class="w-36 text-base rounded-3xl border-2 bg-mauve p-3 text-center text-white font-light ">
                    SIGN IN
                </button>
            </RouterLink>
            </div>
        </div>
        </form>
    </div>

    <h4 class="text-white text-center mb-8 pt-10">Other ways to login</h4>
    <div class="space-x-6 flex justify-center">
        <img src="/public/icons/google.png" alt="google connexion">
        <img src="/public/icons/facebook.png" alt="facebook connexion">
        <img src="/public/icons/apple.png" alt="apple connexion">
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

