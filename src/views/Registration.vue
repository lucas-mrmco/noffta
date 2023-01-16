<script>
</script>

<template>

    <main class="lg:pt-10 pt-28 px-10 lg:px-28">

        <body>

            <h2 class="  text-lg lg:text-xl font-nunito-sans text-blanc-text mb-10 text-center">
                Registration</h2>

            <div class="box bg-mauve bg-opacity-20 lg:w-2/3 w-full mx-auto lg:p-20 p-10 rounded-15xl  ">

                <form class="rounded lg:px-20  pt-6  mb-4 ">

                    <div class="flex space-x-3">
                        <div class="mb-4 lg:px-14 ">
                            <label class="block text-white text-sm mb-2" for="firstname">
                                FIRST NAME
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="firstname" type="text">
                        </div>
                        <div class="mb-4 ">
                            <label class="block text-white text-sm mb-2" for="name">
                                NAME
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name" type="text">
                        </div>
                    </div>

                    <div class="mb-4 lg:px-14">
                        <label class="block text-white text-sm mb-2" for="userna">
                            EMAIL
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text">
                    </div>
                    <div class="mb-4 lg:px-14">
                        <label class="block text-white text-sm mb-2" for="password">
                            PASSWORD
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" type="password">
                    </div>
                    <div class="mb-4 lg:px-14">
                        <label class="block text-white text-sm mb-2" for="password">
                            CONFIRM PASSWORD
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" type="password">
                    </div>

                    <div class="justify-center text-white mb-4 flex">
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value=""
                                class="w-4 h-4 bg-gray-100 rounded border-gray-300 ">
                            <label for="default-checkbox"
                                class="ml-2 text-sm font-medium text-white  dark:text-gray-300">I accept the Conditions
                                Generals of Utilisation</label>
                        </div>
                    </div>
                    <div class="flex space-x-6 justify-center">
                        <div>
                            <a href="/login" class="flex-row justify-end ">
                                <button type="button"
                                    class="lg:w-36 w-24 text-base rounded-3xl border-2 border-mauve p-3 text-center text-white font-light">
                                    SIGN IN
                                </button>
                            </a>
                        </div>
                        <div>
                            <a href="/login" class="flex-row justify-end">
                                <button type="button"
                                    class="lg:w-36 w-24 text-base rounded-3xl border-2 bg-mauve p-3 text-center text-white font-light ">
                                    SIGN UP
                                </button>
                            </a>
                        </div>
                    </div>
                </form>
            </div>

            <h4 class="text-white text-center mb-8 pt-10">Other ways to register an account</h4>
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