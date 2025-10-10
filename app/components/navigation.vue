<template>
  <header
    :class="[
      '',
      view === 'portal'
        ? '_bg-portal bg-linear-to-r from-white via-gray-50 to-gray-100 border-b-2 border-[#65636340]'
        : 'bg-linear-to-r from-white via-gray-50 to-gray-100 border-b border-[#65636340]/20',
    ]"
  >
    <div
      class="container grid grid-cols-[auto_1fr_auto] gap-8 items-center mx-auto py-2 px-4 md:py-4 md:px-8"
    >
      <NuxtLink to="/">
        <img src="../assets/images/Logo.png" alt="Brand-Logo" />
      </NuxtLink>
      <div>
        <div
          :class="[
            'p-1.5 md:p-2 text-sm md:text-base inline-flex gap-1 rounded-full border border-gray-300',
            view === 'payment' ? '_bg-[#EAEEF0]' : '_bg-blue-400/90',
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
            <span class="inline md:hidden">Payment</span
            ><span class="hidden md:inline">Licensed Payment Network</span>
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

<style scoped>
.bg-portal {
  background-image: url("../assets/images/skye.png");
  background-position: center;
  background-size: cover;
}
</style>
