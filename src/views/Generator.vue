<template>

  <body>

    <h2 class="font-nunito-sans text-lg text-blanc-text pb-6 pt-10 text-center"> Create your own NFT in just a few
      seconds
      !</h2>
    <p class="text-blanc-text font-lato text-sm bold text-center">Free of charge !</p>
    <div class="grid">
      <img class="block mx-auto w-72 pt-20" src="/img/illustration-generator.png"
        alt="illustration générateur de NFT" />
    </div>
    <h3 class="text-blanc-text font-lato text-md px-20 bold pt-40 mb-10" id="discover">Discover all</h3>

    <div class="lg:grid-cols-4 grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-3 lg:gap-8 md:px-10 lg:px-20 px-6 ">
      <img src="/img/discover/card_1.webp" alt="" class="rounded-8xl">
      <img src="/img/discover/card_2.webp" alt="" class="rounded-8xl">
      <img src="/img/discover/card_3.webp" alt="" class="rounded-8xl">
      <img src="/img/discover/card_4.webp" alt="" class="rounded-8xl">
      <img src="/img/discover/card_5.webp" alt="" class="rounded-8xl">
      <img src="/img/discover/card_6.webp" alt="" class="rounded-8xl">
      <img src="/img/discover/card_7.webp" alt="" class="rounded-8xl">
      <img src="/img/discover/card_8.webp" alt="" class="rounded-8xl">

    </div>

    <h2 class="font-nunito-sans text-lg text-blanc-text px-6 lg:px-20 pb-6 pt-10 text-center">Coming Soon...</h2>

    <div class="lg:flex lg:space-x-10 space-x-4 px-6 lg:px-20 lg:pb-20">
      <img src="/img/offf-date.png" class=" lg:h-1/3 lg:w-1/3" alt="">
      <p class="font-nunito-sans text-base text-blanc-text px-6 lg:px-20 pb-6 pt-10 text-center">See you on March 20,
        2023
        to
        have the
        opportunity to test our NFT generator.</p>


    </div>


    <div class="flex lg:space-x-20 space-x-4 px-6 lg:px-20 justify-center">
      <video class="video w-1/2 md:w-1/6" src="/video/generator-comingsoon.mp4" controls preload="auto"
        alt="generation comming soon"></video>
      <h3 class="text-blanc-text font-lato text-md bold pt-40">Video preview</h3>
    </div>


    <p class="font-nunito-sans text-base text-blanc-text px-6 lg:px-20 pb-6 pt-10 text-center">You can still view the
      provisional questions of the form below.</p>

    <h2 class="font-nunito-sans text-lg text-blanc-text pb-6 pt-10 text-center" id="create">NFT in progress</h2>

    <div class="carousel relative shadow-2xl">
      <div class="carousel-inner relative overflow-hidden w-full">
        <!--Slide 1-->
        <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden=""
          checked="checked">
        <div class="carousel-item absolute opacity-0" style="height:50vh;">
          <p class="text-blanc-text font-nunito-sans text-sm text-center">Step 1/10</p>
          <div class="rounded-2xl w-80 h-60 mx-auto  mt-10 bg-gradient-to-r p-1 from-mauve to-orange">
            <div class="flex flex-col justify-between h-full bg-fond-site text-white rounded-lg p-4">
              <p class="text-blanc-text font-lato text-sm bold text-center">Have you ever attended the OFFF?</p>
              <div class="flex items-center">
                <input id="default-radio-1" type="radio" value="" name="default-radio"
                  class=" w-4 h-4 bg-gradient-to from-rose to-mauve border-rose focus:ring-rose">
                <label for="default-radio-1" class="ml-2 font-lato text-sm bold text-blanc-text">Yes</label>
              </div>
              <div class="flex items-center">
                <input checked id="default-radio-2" type="radio" value="" name="default-radio"
                  class="w-4 h-4 bg-gradient-to from-rose to-mauve border-rose ">
                <label for="default-radio-2" class="ml-2 font-lato text-sm bold text-blanc-text">No</label>
              </div>
            </div>
          </div>
        </div>
        <label for="carousel-10"
          class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-blanc-text hover:text-rose rounded-full leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        <label for="carousel-2"
          class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-blanc-text hover:text-rose rounded-full leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

        <!--Slide 2-->
        <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item absolute opacity-0" style="height:50vh;">
          <p class="text-blanc-text font-nunito-sans text-sm text-center">Step 2/10</p>
          <div class="rounded-2xl w-80 h-60 mx-auto  mt-10 bg-gradient-to-r p-1 from-mauve to-orange">
            <div class="flex flex-col justify-between h-full bg-fond-site text-white rounded-lg p-4">
              <p class="text-blanc-text font-lato text-sm bold text-center">When was the last time you went to the OFFF?
              </p>
              <div class="flex items-center">
                <input id="default-radio-1" type="radio" value="" name="default-radio"
                  class=" w-4 h-4 bg-gradient-to from-rose to-mauve border-rose focus:ring-rose">
                <label for="default-radio-1" class="ml-2 font-lato text-sm bold text-blanc-text">2022</label>
              </div>
              <div class="flex items-center">
                <input checked id="default-radio-2" type="radio" value="" name="default-radio"
                  class="w-4 h-4 bg-gradient-to from-rose to-mauve border-rose ">
                <label for="default-radio-2" class="ml-2 font-lato text-sm bold text-blanc-text">2019</label>
              </div>
              <div class="flex items-center">
                <input checked id="default-radio-3" type="radio" value="" name="default-radio"
                  class="w-4 h-4 bg-gradient-to from-rose to-mauve border-rose ">
                <label for="default-radio-3" class="ml-2 font-lato text-sm bold text-blanc-text">Before</label>
              </div>
            </div>
          </div>
        </div>
        <label for="carousel-1"
          class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-blanc-text hover:text-rose rounded-full leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        <label for="carousel-3"
          class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-blanc-text hover:text-rose rounded-full eading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

        <!--Slide 3-->
        <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item absolute opacity-0" style="height:50vh;">
          <p class="text-blanc-text font-nunito-sans text-sm text-center">Step 3/10</p>
          <div class="rounded-2xl w-80 h-60 mx-auto  mt-10 bg-gradient-to-r p-1 from-mauve to-orange">
            <div class="flex flex-col justify-between h-full bg-fond-site text-white rounded-lg p-4">
              <p class="text-blanc-text font-lato text-sm bold text-center">Which artists did you prefer?</p>
              <div class="flex items-center">
                <input id="default-radio-1" type="radio" value="" name="default-radio"
                  class=" w-4 h-4 bg-gradient-to from-rose to-mauve border-rose focus:ring-rose">
                <label for="default-radio-1" class="ml-2 font-lato text-sm bold text-blanc-text">Option 1</label>
              </div>
              <div class="flex items-center">
                <input checked id="default-radio-2" type="radio" value="" name="default-radio"
                  class="w-4 h-4 bg-gradient-to from-rose to-mauve border-rose ">
                <label for="default-radio-2" class="ml-2 font-lato text-sm bold text-blanc-text">Option 2</label>
              </div>
              <div class="flex items-center">
                <input checked id="default-radio-3" type="radio" value="" name="default-radio"
                  class="w-4 h-4 bg-gradient-to from-rose to-mauve border-rose ">
                <label for="default-radio-3" class="ml-2 font-lato text-sm bold text-blanc-text">Option 3</label>
              </div>
              <div class="flex items-center">
                <input checked id="default-radio-4" type="radio" value="" name="default-radio"
                  class="w-4 h-4 bg-gradient-to from-rose to-mauve border-rose ">
                <label for="default-radio-4" class="ml-2 font-lato text-sm bold text-blanc-text">Option 4</label>
              </div>
              <div class="flex items-center">
                <input checked id="default-radio-5" type="radio" value="" name="default-radio"
                  class="w-4 h-4 bg-gradient-to from-rose to-mauve border-rose ">
                <label for="default-radio-5" class="ml-2 font-lato text-sm bold text-blanc-text">Option 5</label>
              </div>
              <div class="flex items-center">
                <input checked id="default-radio-6" type="radio" value="" name="default-radio"
                  class="w-4 h-4 bg-gradient-to from-rose to-mauve border-rose ">
                <label for="default-radio-6" class="ml-2 font-lato text-sm bold text-blanc-text">Other...</label>
              </div>
            </div>
          </div>
        </div>
        <label for="carousel-2"
          class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-blanc-text hover:text-rose rounded-full  leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        <label for="carousel-4"
          class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-blanc-text hover:text-rose rounded-full  leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
      </div>

      <!--Slide 4-->
      <input class="carousel-open" type="radio" id="carousel-4" name="carousel" aria-hidden="true" hidden="">
      <div class="carousel-item absolute opacity-0" style="height:50vh;">
        <p class="text-blanc-text font-nunito-sans text-sm text-center">Step 4/10</p>
        <div class="rounded-2xl w-80 h-60 mx-auto  mt-10 bg-gradient-to-r p-1 from-mauve to-orange">
          <div class="flex flex-col h-full bg-fond-site text-white rounded-lg p-4">
            <p class="text-blanc-text font-lato text-sm bold text-center">Have you ever attended the OFFF?</p>
            <div class="flex justify-evenly mt-20">

              <p class="font-lato text-sm bold text-blanc-text mr-5">Bad</p>

              <input id="default-radio-1" type="radio" value="" name="default-radio"
                class=" w-4 h-4 bg-gradient-to from-rose to-mauve border-rose focus:ring-rose">
              <label for="default-radio-1" class="mr-2 font-lato text-sm bold text-blanc-text">1</label>


              <input checked id="default-radio-2" type="radio" value="" name="default-radio"
                class="w-4 h-4 bg-gradient-to from-rose to-mauve border-rose">
              <label for="default-radio-2" class="mr-2 font-lato text-sm bold text-blanc-text">2</label>


              <input checked id="default-radio-3" type="radio" value="" name="default-radio"
                class="w-4 h-4 bg-gradient-to from-rose to-mauve border-rose ">
              <label for="default-radio-3" class="mr-2 font-lato text-sm bold text-blanc-text">3</label>

              <input checked id="default-radio-4" type="radio" value="" name="default-radio"
                class="w-4 h-4 bg-gradient-to from-rose to-mauve border-rose ">
              <label for="default-radio-4" class="mr-2 font-lato text-sm bold text-blanc-text">4</label>

              <input checked id="default-radio-5" type="radio" value="" name="default-radio"
                class="w-4 h-4 bg-gradient-to from-rose to-mauve border-rose ">
              <label for="default-radio-5" class="font-lato text-sm bold text-blanc-text">5</label>

              <p class="font-lato text-sm bold text-blanc-text ml-5">Perfect</p>

            </div>
          </div>
        </div>
      </div>
      <label for="carousel-3"
        class="prev control-4 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-blanc-text hover:text-rose rounded-full leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
      <label for="carousel-5"
        class="next control-4 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-blanc-text hover:text-rose rounded-full eading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>


      <!--Slide 5-->
      <input class="carousel-open" type="radio" id="carousel-5" name="carousel" aria-hidden="true" hidden="">
      <div class="carousel-item absolute opacity-0" style="height:50vh;">
        <p class="text-blanc-text font-nunito-sans text-sm text-center">Step 5/10</p>
        <div class="rounded-2xl w-80 h-60 mx-auto  mt-10 bg-gradient-to-r p-1 from-mauve to-orange">
          <div class="flex flex-col justify-between h-full bg-fond-site text-white rounded-lg p-4">
            <p class="text-blanc-text font-lato text-sm bold text-center">Do you plan to go next season?</p>
            <div class="flex items-center">
              <input id="default-radio-1" type="radio" value="" name="default-radio"
                class=" w-4 h-4 bg-gradient-to from-rose to-mauve border-rose focus:ring-rose">
              <label for="default-radio-1" class="ml-2 font-lato text-sm bold text-blanc-text">Yes</label>
            </div>
            <div class="flex items-center">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio"
                class="w-4 h-4 bg-gradient-to from-rose to-mauve border-rose ">
              <label for="default-radio-2" class="ml-2 font-lato text-sm bold text-blanc-text">No</label>
            </div>
            <div class="flex items-center">
              <input checked id="default-radio-3" type="radio" value="" name="default-radio"
                class="w-4 h-4 bg-gradient-to from-rose to-mauve border-rose ">
              <label for="default-radio-3" class="ml-2 font-lato text-sm bold text-blanc-text">I don’t know</label>
            </div>
          </div>
        </div>
      </div>
      <label for="carousel-4"
        class="prev control-5 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-blanc-text hover:text-rose rounded-full leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
      <label for="carousel-6"
        class="next control-5 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-blanc-text hover:text-rose rounded-full eading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

      <!--Slide 6-->
      <input class="carousel-open" type="radio" id="carousel-6" name="carousel" aria-hidden="true" hidden=""
        checked="checked">
      <div class="carousel-item absolute opacity-0" style="height:50vh;">
        <p class="text-blanc-text font-nunito-sans text-sm text-center">Step 6/10</p>
        <div class="rounded-2xl w-80 h-60 mx-auto  mt-10 bg-gradient-to-r p-1 from-mauve to-orange">
          <div class="flex flex-col justify-between h-full bg-fond-site text-white rounded-lg p-4">
            <p class="text-blanc-text font-lato text-sm bold text-center">What subject interests you the most?</p>
            <div class="flex items-center">
              <input id="default-radio-1" type="radio" value="" name="default-radio"
                class=" w-4 h-4 bg-gradient-to from-rose to-mauve border-rose focus:ring-rose">
              <label for="default-radio-1" class="ml-2 font-lato text-sm bold text-blanc-text">Yes</label>
            </div>
            <div class="flex items-center">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio"
                class="w-4 h-4 bg-gradient-to from-rose to-mauve border-rose ">
              <label for="default-radio-2" class="ml-2 font-lato text-sm bold text-blanc-text">No</label>
            </div>
          </div>
        </div>
      </div>
      <label for="carousel-5"
        class="prev control-6 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-blanc-text hover:text-rose rounded-full leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
      <label for="carousel-7"
        class="next control-6 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-blanc-text hover:text-rose rounded-full leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

      <!--Slide 7-->
      <input class="carousel-open" type="radio" id="carousel-7" name="carousel" aria-hidden="true" hidden=""
        checked="checked">
      <div class="carousel-item absolute opacity-0" style="height:50vh;">
        <p class="text-blanc-text font-nunito-sans text-sm text-center">Step 7/10</p>
        <div class="rounded-2xl w-80 h-60 mx-auto  mt-10 bg-gradient-to-r p-1 from-mauve to-orange">
          <div class="flex flex-col justify-between h-full bg-fond-site text-white rounded-lg p-4">
            <p class="text-blanc-text font-lato text-sm bold text-center">Which NFT theme are you most interested in?
            </p>
            <div class="flex items-center">
              <input id="default-radio-1" type="radio" value="" name="default-radio"
                class=" w-4 h-4 bg-gradient-to from-rose to-mauve border-rose focus:ring-rose">
              <label for="default-radio-1" class="ml-2 font-lato text-sm bold text-blanc-text">Yes</label>
            </div>
            <div class="flex items-center">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio"
                class="w-4 h-4 bg-gradient-to from-rose to-mauve border-rose ">
              <label for="default-radio-2" class="ml-2 font-lato text-sm bold text-blanc-text">No</label>
            </div>
          </div>
        </div>
      </div>
      <label for="carousel-6"
        class="prev control-7 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-blanc-text hover:text-rose rounded-full leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
      <label for="carousel-8"
        class="next control-7 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-blanc-text hover:text-rose rounded-full leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

      <!--Slide 8-->
      <input class="carousel-open" type="radio" id="carousel-8" name="carousel" aria-hidden="true" hidden=""
        checked="checked">
      <div class="carousel-item absolute opacity-0" style="height:50vh;">
        <p class="text-blanc-text font-nunito-sans text-sm text-center">Step 8/10</p>
        <div class="rounded-2xl w-80 h-60 mx-auto  mt-10 bg-gradient-to-r p-1 from-mauve to-orange">
          <div class="flex flex-col justify-between h-full bg-fond-site text-white rounded-lg p-4">
            <p class="text-blanc-text font-lato text-sm bold text-center">What are your favorite colors?</p>
            <div class="flex items-center">
              <input id="default-radio-1" type="radio" value="" name="default-radio"
                class=" w-4 h-4 bg-gradient-to from-rose to-mauve border-rose focus:ring-rose">
              <label for="default-radio-1" class="ml-2 font-lato text-sm bold text-blanc-text">Yes</label>
            </div>
            <div class="flex items-center">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio"
                class="w-4 h-4 bg-gradient-to from-rose to-mauve border-rose ">
              <label for="default-radio-2" class="ml-2 font-lato text-sm bold text-blanc-text">No</label>
            </div>
          </div>
        </div>
      </div>
      <label for="carousel-7"
        class="prev control-8 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-blanc-text hover:text-rose rounded-full leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
      <label for="carousel-9"
        class="next control-8 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-blanc-text hover:text-rose rounded-full leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

      <!--Slide 9-->
      <input class="carousel-open" type="radio" id="carousel-9" name="carousel" aria-hidden="true" hidden=""
        checked="checked">
      <div class="carousel-item absolute opacity-0" style="height:50vh;">
        <p class="text-blanc-text font-nunito-sans text-sm text-center">Step 9/10</p>
        <div class="rounded-2xl w-80 h-60 mx-auto  mt-10 bg-gradient-to-r p-1 from-mauve to-orange">
          <div class="flex flex-col justify-between h-full bg-fond-site text-white rounded-lg p-4">
            <p class="text-blanc-text font-lato text-sm bold text-center">Would you like to personalize it further?</p>
            <div class="flex items-center">
              <input id="default-radio-1" type="radio" value="" name="default-radio"
                class=" w-4 h-4 bg-gradient-to from-rose to-mauve border-rose focus:ring-rose">
              <label for="default-radio-1" class="ml-2 font-lato text-sm bold text-blanc-text">Sign</label>
            </div>
            <div class="flex items-center">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio"
                class="w-4 h-4 bg-gradient-to from-rose to-mauve border-rose ">
              <label for="default-radio-2" class="ml-2 font-lato text-sm bold text-blanc-text">Distortion</label>
            </div>
          </div>
        </div>
      </div>
      <label for="carousel-8"
        class="prev control-9 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-blanc-text hover:text-rose rounded-full leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
      <label for="carousel-10"
        class="next control-9 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-blanc-text hover:text-rose rounded-full leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

      <!--Slide 10-->
      <input class="carousel-open" type="radio" id="carousel-10" name="carousel" aria-hidden="true" hidden=""
        checked="checked">
      <div class="carousel-item absolute opacity-0" style="height:50vh;">
        <p class="text-blanc-text font-nunito-sans text-sm text-center">Step 10/10</p>
        <div class="rounded-2xl w-80 h-60 mx-auto  mt-10 bg-gradient-to-r p-1 from-mauve to-orange">
          <div class="flex flex-col justify-between h-full bg-fond-site text-white rounded-lg p-4">
            <p class="text-blanc-text font-lato text-sm bold text-center">Do you want a ticket with your nft printed on
              it?</p>
            <div class="flex items-center">
              <input id="default-radio-1" type="radio" value="" name="default-radio"
                class=" w-4 h-4 bg-gradient-to from-rose to-mauve border-rose focus:ring-rose">
              <label for="default-radio-1" class="ml-2 font-lato text-sm bold text-blanc-text">Yes</label>
            </div>
            <div class="flex items-center">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio"
                class="w-4 h-4 bg-gradient-to from-rose to-mauve border-rose ">
              <label for="default-radio-2" class="ml-2 font-lato text-sm bold text-blanc-text">No</label>
            </div>
          </div>
        </div>
      </div>
      <label for="carousel-9"
        class="prev control-10 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-blanc-text hover:text-rose rounded-full leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
      <label for="carousel-1"
        class="next control-10 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-blanc-text hover:text-rose rounded-full leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

    </div>

    <h2 class="font-nunito-sans text-lg text-blanc-text px-6 lg:p-20 pb-6 pt-10 text-center">Do not hesitate
      to subscribe to our
      newsletter to benefit from the progress of the site, especially to be informed of the functionality of the nft
      generator.</h2>

    <div class=" mx-36 ">

      <div class="lg:bg-newsletter lg:bg-no-repeat block lg:px-20 mx-auto bg-contain pb-6 pt-6 lg:pb-56 lg:pt-28"
        alt="formulaire de la newsletter">
        <h2 class="font-nunito-sans text-lg  text-blanc-text  lg:pb-10 text-center lg:pt-32">
          Subscribe to our
          newsletter
        </h2>
        <form action="#">
          <div class="items-center lg:mx-auto lg:mb-3  lg:max-w-sm flex space-y-0">
            <div class="w-96  lg:w-96 mx-auto">
              <label for="email" class="hidden text-sm text-gray-300">Email address</label>
              <input class=" p-3 w-full text-sm text-black bg-gray-50 rounded-l-10xl  " placeholder="Info@yourgmail.com"
                type="email" id="email">
            </div>
            <a href="/">
              <button type="button"
                class=" text-base rounded-r-10xl bg-gradient-to-tl from-rose to-vermillon p-3 w-12  ">
                <img src="/icons/send.svg" alt="avion en papier" />
              </button>
            </a>
          </div>
        </form>
      </div>

    </div>

  </body>
  <footer>
    <FooterXS class="lg:hidden" />
    <FooterLG class="hidden lg:block" />
  </footer>
</template>


<style scoped>
h2,
h3 {
  text-shadow: -1px 1.5px 0px #F81DFB;
}

.carousel-open:checked+.carousel-item {
  position: static;
  opacity: 100;
}

.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}

#carousel-1:checked~.control-1,
#carousel-2:checked~.control-2,
#carousel-3:checked~.control-3,
#carousel-4:checked~.control-4,
#carousel-5:checked~.control-5,
#carousel-6:checked~.control-6,
#carousel-7:checked~.control-7,
#carousel-8:checked~.control-8,
#carousel-9:checked~.control-9,
#carousel-10:checked~.control-10 {
  display: block;
}

#carousel-1:checked~.control-1~li:nth-child(1),
#carousel-2:checked~.control-2~li:nth-child(2),
#carousel-3:checked~.control-3~li:nth-child(3),
#carousel-4:checked~.control-4~li:nth-child(4),
#carousel-5:checked~.control-5~li:nth-child(5),
#carousel-6:checked~.control-6~li:nth-child(6),
#carousel-7:checked~.control-7~li:nth-child(7),
#carousel-8:checked~.control-8~li:nth-child(8),
#carousel-9:checked~.control-9~li:nth-child(9),
#carousel-10:checked~.control-10~li:nth-child(10) {
  color: violet;
}
</style>

<script setup>

import FooterXS from '../components/layout/FooterXS.vue';
import FooterLG from '../components/layout/FooterLG.vue';</script>

