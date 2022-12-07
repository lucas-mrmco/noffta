<template>
  <svg class="svg " width="174" height="62" viewBox="0 0 174 62" fill="#B00D9D00" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_1404_49882)">
      <rect x="1" y="12.4528" width="3.54872" height="36.2264" rx="1.77436" fill="#AD1AAF" />
      <rect class="rect" x="5.36163" y="0.5" width="164.903" height="59" rx="9.5" fill="#" fill-opacity="0.05"
        stroke="#AD1AAF" />
      <rect width="3.54871" height="36.2264" rx="1.77436" transform="matrix(-1 0 0 1 174 12.4528)" fill="#AD1AAF" />
    </g>
    <defs>
      <filter id="filter0_d_1404_49882" x="0" y="0" width="174" height="61.5" filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha" />
        <feOffset dx="-1" dy="1.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.972549 0 0 0 0 0.113725 0 0 0 0 0.984314 0 0 0 1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1404_49882" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1404_49882" result="shape" />
      </filter>
    </defs>
  </svg>


</template>

<style scoped>
.rect:hover {
  animation-name: fill-color;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes fill-color {
  100% {

    fill: white;
    fill-opacity: 1;

  }


  0% {
    fill: #FFFFFF00;
    fill-opacity: 0.05;
  }
}

.p1 {
  box-shadow: 10px 5px 5px lightskyblue;
}
</style>