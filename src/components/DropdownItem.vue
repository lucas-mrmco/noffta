<script setup>
import { ref, computed } from 'vue';
const open = ref(false);
function invertState() {
    open.value = !open.value;
}
</script>
<template>
    <div class="lg:w-80 text-md lg:ml-0 mx-6  py-2 z-50">
        <h1 @click="invertState" :class="{ 'font-bold': open }"
            class="cursor-pointer text-white hover:text-mauve  my-3.5 flex items-center justify-between">
            <slot name="header"></slot>
            <img :class="{ 'rotate-180': open }" src="/icons/Vector.svg" alt="" />
        </h1>
        <p v-if="open" class="lg:mr-0 lg:text-left text-white my-3.5">
            <slot></slot>
        </p>
        <hr class="border-light-grayish-blue my-3.5" />
    </div>
</template>
