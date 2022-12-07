<template>
  <!-- <svg class="svg" width="174" height="58" viewBox="0 0 174 58" fill="#B00D9D" xmlns="http://www.w3.org/2000/svg">

    <path class="p1"
      d="M6 3.37209C6 1.50974 7.50974 0 9.37209 0H14.0196V58H9.37209C7.50973 58 6 56.4903 6 54.6279C6 52.7655 7.50974 51.2558 9.37209 51.2558H10.0098V6.74419H9.37209C7.50974 6.74419 6 5.23445 6 3.37209Z"
      fill="" />
    <path class="p1"
      d="M167.02 3.37209C167.02 1.50974 165.51 0 163.648 0H159V58H163.648C165.51 58 167.02 56.4903 167.02 54.6279C167.02 52.7655 165.51 51.2558 163.648 51.2558H163.01V6.74419H163.648C165.51 6.74419 167.02 5.23445 167.02 3.37209Z"
      fill="" />
    <path class="p1"
      d="M173.029 12.997C173.029 11.8897 172.132 10.9921 171.024 10.9921C169.917 10.9921 169.02 11.8897 169.02 12.997V45.003C169.02 46.1103 169.917 47.0079 171.024 47.0079C172.132 47.0079 173.029 46.1103 173.029 45.003V12.997Z"
      fill="" />
    <path class="p1"
      d="M0 12.4813C0 11.3741 0.897621 10.4764 2.00489 10.4764C3.11216 10.4764 4.00978 11.3741 4.00978 12.4813V46.5509C4.00978 47.6582 3.11216 48.5558 2.00489 48.5558C0.897621 48.5558 0 47.6582 0 46.5509V12.4813Z"
      fill="" />
    <path class="p1" d="M14 0H159V58H14V0Z" fill="" />

  </svg> -->
  <svg class="svg" width="174" height="60" viewBox="0 0 174 58" fill="#B00D9D" xmlns="http://www.w3.org/2000/svg">

    <g filter="url(#filter0_d_1392_49880)">
      <path
        d="M7 3.37209C7 1.50974 8.50974 0 10.3721 0H15.0196V58H10.3721C8.50973 58 7 56.4903 7 54.6279C7 52.7655 8.50974 51.2558 10.3721 51.2558H11.0098V6.74419H10.3721C8.50974 6.74419 7 5.23445 7 3.37209Z" />
      <path
        d="M168.02 3.37209C168.02 1.50974 166.51 0 164.648 0H160V58H164.648C166.51 58 168.02 56.4903 168.02 54.6279C168.02 52.7655 166.51 51.2558 164.648 51.2558H164.01V6.74419H164.648C166.51 6.74419 168.02 5.23445 168.02 3.37209Z" />
      <path
        d="M174.029 12.997C174.029 11.8897 173.132 10.9921 172.024 10.9921C170.917 10.9921 170.02 11.8897 170.02 12.997V45.003C170.02 46.1103 170.917 47.0079 172.024 47.0079C173.132 47.0079 174.029 46.1103 174.029 45.003V12.997Z" />
      <path
        d="M1 12.4813C1 11.3741 1.89762 10.4764 3.00489 10.4764C4.11216 10.4764 5.00978 11.3741 5.00978 12.4813V46.5509C5.00978 47.6582 4.11216 48.5558 3.00489 48.5558C1.89762 48.5558 1 47.6582 1 46.5509V12.4813Z" />
      <path d="M15 0H160V58H15V0Z" />
    </g>
    <defs>
      <filter id="filter0_d_1392_49880" x="0" y="0" width="174.029" height="59.5" filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha" />
        <feOffset dx="-1" dy="1.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.972549 0 0 0 0 0.113725 0 0 0 0 0.984314 0 0 0 1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1392_49880" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1392_49880" result="shape" />
      </filter>
    </defs>
  </svg>

</template>

<style scoped>
.svg:hover {
  animation-name: fill-color;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes fill-color {
  100% {
    fill: white;
  }


  0% {
    fill: #B00D9D;
  }
}

.p1 {
  box-shadow: 10px 5px 5px lightskyblue;
}
</style>