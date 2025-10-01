<template>
  <header class="bg-white">
    <div
      class="container grid grid-cols-[auto_1fr_auto] gap-8 items-center mx-auto py-2 px-2 md:py-4 md:px-8"
    >
      <NuxtLink to="/">
        <img src="../assets/images/Logo.svg" alt="Logo" />
      </NuxtLink>
      <div>
        <div
          :class="[
            'p-1.5 md:p-2 text-sm md:text-base inline-flex gap-1 rounded-full',
            view === 'payment' ? 'bg-[#EAEEF0]' : 'bg-[#EAEEF0]',
          ]"
        >
          <div
            :class="[
              'rounded-full py-2 px-4 font-semibold transition-colors cursor-pointer',
              view === 'portal'
                ? 'text-white bg-[#043B56] hover:bg-[#043B56]/90'
                : 'hover:bg-[#043B56]/10',
            ]"
            @click="setAppState('portal')"
          >
            Portal <span class="hidden md:inline">by Vesicash</span>
          </div>
          <div
            :class="[
              'rounded-full py-2 px-4 font-semibold transition-colors cursor-pointer',
              view === 'payment'
                ? 'text-white bg-[#043B56] hover:bg-[#043B56]/90'
                : 'hover:bg-[#043B56]/10',
            ]"
            @click="setAppState('payment')"
          >
            Payment <span class="hidden md:inline">suite</span>
          </div>
        </div>
      </div>
      <button class="btn">Contact Sales</button>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useAppState } from "~/app-state";
const store = useAppState();
const { setAppState } = store;
const view = computed(() => store.appState);
</script>
