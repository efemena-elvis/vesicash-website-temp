<template>
  <div class="py-[100px]">
    <div v-if="view === 'payment'" class="animate-in slide-in-from-left-2">
      <section class="bg-gray-100 py-16">
        <div
          class="container mx-auto grid gap-10 lg:grid-cols-[2fr_3fr] items-center px-8"
        >
          <div class="space-y-5">
            <h1 class="text-4xl md:text-5xl font-bold">
              Expand Faster with Local Payments across Africa
            </h1>
            <p class="text-lg text-[#525857]">
              From cards and bank transfers to mobile money, Vesicash connects
              your business to the payment rails customers actually use.
              Localized, reliable, and built for scale.
            </p>
            <button class="btn">Get Started</button>
          </div>
          <div class="w-full aspect-[1.25]">
            <img
              src="../assets/images/dashboard-illustration.png"
              class="w-full h-full object-contain objcet-center lg:object-right"
              alt="illustration-of-a-dashboard"
            />
          </div>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="container px-8 mx-auto text-center">
          <!-- Section Header -->
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
            Unlock Reliable Payment in Africa
          </h2>
          <p class="mt-3 text-[#525857] max-w-2xl mx-auto">
            We enable businesses to collect and disburse payments in these
            markets. Our payment processing capabilities allow us to serve
            businesses in these regions.
          </p>

          <!-- Cards -->
          <div class="mt-12 grid gap-8 md:grid-cols-3">
            <!-- Card 1 -->
            <div
              class="rounded-2xl overflow-hidden shadow-sm bg-gray-100 flex flex-col"
            >
              <div class="flex-1 flex items-center justify-center p-6">
                <!-- Replace with actual image -->
                <img
                  src="@/assets/images/collections.png"
                  alt="Collections"
                  class="w-full h-auto object-contain"
                />
              </div>
              <div class="bg-black text-white p-6 text-left">
                <h3 class="font-semibold text-lg">Collections</h3>
                <p class="text-sm mt-2">
                  Receive payments from all Mobile Money accounts and payment
                  cards.
                </p>
              </div>
            </div>

            <!-- Card 2 -->
            <div
              class="rounded-2xl overflow-hidden shadow-sm bg-gray-100 flex flex-col"
            >
              <div class="flex-1 flex items-center justify-center p-6">
                <!-- Replace with actual image -->
                <img
                  src="@/assets/images/remittance.png"
                  alt="Remittances"
                  class="w-full h-auto object-contain"
                />
              </div>
              <div class="bg-black text-white p-6 text-left">
                <h3 class="font-semibold text-lg">Remittances</h3>
                <p class="text-sm mt-2">
                  We help businesses send and receive cross-border payments
                  quickly, securely, and cost-effectively.
                </p>
              </div>
            </div>

            <!-- Card 3 -->
            <div
              class="rounded-2xl overflow-hidden shadow-sm bg-gray-100 flex flex-col"
            >
              <div class="flex-1 flex items-center justify-center p-6">
                <!-- Replace with actual image -->
                <img
                  src="@/assets/images/disbursements.png"
                  alt="Disbursements"
                  class="w-full h-auto object-contain"
                />
              </div>
              <div class="bg-black text-white p-6 text-left">
                <h3 class="font-semibold text-lg">Disbursements</h3>
                <p class="text-sm mt-2">
                  Payouts to Bank Accounts and Mobile Money wallets in real
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="w-full bg-white py-16">
        <div class="container mx-auto px-8">
          <!-- Licensed Entities Section -->
          <div class="mb-16">
            <h2 class="text-3xl font-bold text-center mb-6">
              Our licensed entities
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div class="flex justify-center p-8 bg-white rounded-lg">
                <img
                  src="@/assets/images/alexpay.png"
                  alt="AlexPay"
                  class="h-12 object-contain"
                />
              </div>
              <div class="flex justify-center p-8 bg-white rounded-lg">
                <img
                  src="@/assets/images/e-wallet.png"
                  alt="eWallet"
                  class="h-12 object-contain"
                />
              </div>
              <div class="flex justify-center p-8 bg-white rounded-lg">
                <img
                  src="@/assets/images/redstone.png"
                  alt="Redstone"
                  class="h-12 object-contain"
                />
              </div>
            </div>
          </div>

          <!-- Partners Section -->
          <div>
            <h2 class="text-3xl font-bold text-center mb-6">Our partners</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div class="flex justify-center p-8 bg-white rounded-lg">
                <img
                  src="@/assets/images/mno.png"
                  alt="Mastercard"
                  class="h-16 object-contain"
                />
              </div>
              <div class="flex justify-center p-8 bg-white rounded-lg">
                <img
                  src="@/assets/images/mastercard.png"
                  alt="Mastercard"
                  class="h-16 object-contain"
                />
              </div>
              <div class="flex justify-center p-8 bg-white rounded-lg">
                <img
                  src="@/assets/images/visa.png"
                  alt="Visa"
                  class="h-16 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-[#F1FAF3] py-16">
        <div class="container mx-auto px-8">
          <!-- Main Content Grid  -->
          <div class="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <!-- Left Column - Text Content  -->
            <div class="space-y-6">
              <h1
                class="text-5xl font-bold leading-tight text-gray-900 lg:text-6xl"
              >
                Ready to sell<br />in minutes?
              </h1>
              <p class="text-lg text-gray-600 leading-relaxed max-w-xl">
                Store by Vesicash lets businesses build stores quickly, list
                products, accept local payment methods, and sell in any African
                currency
              </p>
            </div>

            <!-- Right Column - Store Illustration  -->
            <div class="relative flex justify-center lg:justify-end">
              <img src="@/assets/images/shop.png" alt="shop" />
            </div>
          </div>

          <div class="mt-24 flex flex-wrap gap-4 justify-center">
            <span
              class="px-6 py-3 bg-[#6B7C01] text-white rounded-full border-2 border-[#CDDD67] text-sm font-medium shadow-md"
            >
              No developer required
            </span>
            <span
              class="px-6 py-3 bg-[#B063B0] border-2 border-[#E79CE7] text-white rounded-full text-sm font-medium shadow-md"
            >
              Cards
            </span>
            <span
              class="px-6 py-3 bg-[#004549] border-2 border-[#22C6D0] text-white rounded-full text-sm font-medium shadow-md"
            >
              Mobile money
            </span>
            <span
              class="px-6 py-3 bg-[#DA6C11] border-2 border-[#ECCDB4] text-white rounded-full text-sm font-medium shadow-md"
            >
              Local currency
            </span>
            <span
              class="px-6 py-3 bg-[#409A95] border-2 border-[#62CFC8] text-white rounded-full text-sm font-medium shadow-md"
            >
              Checkout
            </span>
          </div>
        </div>
      </section>
    </div>
    <div v-else class="animate-in slide-in-from-left-2">
      <section class="bg-gray-100 py-16 relative hero-section">
        <div
          class="container mx-auto grid gap-10 lg:grid-cols-[1fr_1fr] items-center px-8 relative"
        >
          <div class="space-y-5">
            <h1 class="text-5xl md:text-6xl font-bold text-white">
              Africa’s Merchant of Record Gateway
            </h1>
            <p class="text-lg text-[#E5EDEB]">
              Expand into Africa with one integration. Portal by Vesicash is the
              single door to compliant, seamless market access across the
              continent.
            </p>
            <button class="btn">Get Started</button>
          </div>
          <div class="w-full aspect-[0.95]">
            <img
              src="@/assets/images/Africa.png"
              class="w-full h-full object-contain objcet-center lg:object-right"
              alt="illustration-of-a-dashboard"
            />
          </div>
        </div>
      </section>

      <section class="py-16 bg-white feature-sections">
        <div class="text-center container mx-auto mb-16 px-4">
          <h2 class="text-3xl font-bold md:text-4xl">
            Portal by Vesicash: One API,<br />Full Coverage
          </h2>
          <p class="text-[#525857] mt-4 mx-auto max-w-xl">
            Portal is Africa’s unified Merchant of Record API. We handle
            payments, tax, and compliance so you can focus on growth.
          </p>
        </div>

        <div
          class="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4"
        >
          <div
            v-for="(feature, idx) in features"
            :key="idx"
            class="bg-[#F1F7F6] rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 class="text-3xl font-bold text-[#0B618F] mb-6">
              {{ feature.title }}
            </h3>
            <p class="text-[#696F6E] text-base mb-6">
              {{ feature.description }}
            </p>
            <img
              :src="feature.image"
              alt="feature icon"
              class="w-[237.41px] h-[168.5px] mt-16 mx-auto object-contain object-center"
            />
          </div>
        </div>
      </section>

      <section class="py-16 bg-[#EEF9FD]">
        <div class="container mx-auto px-8">
          <!-- Heading -->
          <div class="text-center mb-12 px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-[#171918]">
              Trusted by businesses<br class="hidden md:block" />
              across Africa
            </h2>
          </div>

          <!-- Map Placeholder -->
          <div
            class="max-w-5xl mx-auto bg-black rounded-full overflow-hidden p-6 flex justify-center"
          >
            <img
              src="@/assets/images/globe.png"
              alt="Africa Map Placeholder"
              class="w-full object-cover rounded-[32px]"
            />
          </div>

          <!-- Stats Section -->
          <div
            class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-6 text-center"
          >
            <div>
              <p class="text-3xl font-bold text-teal-600">50+</p>
              <p class="text-gray-600 mt-2">
                Businesses use our platform to<br />
                process their transactions.
              </p>
            </div>

            <div>
              <p class="text-3xl font-bold text-teal-600">7+</p>
              <p class="text-gray-600 mt-2">
                Markets, including Ghana, South<br />
                Africa, Zambia and Tanzania
              </p>
            </div>

            <div>
              <p class="text-3xl font-bold text-teal-600">4+</p>
              <p class="text-gray-600 mt-2">
                Payment licenses secured,<br />
                doubling by Q1 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        class="bg-[#011A27] text-white py-20 flex items-center justify-center"
      >
        <div class="container mx-auto px-8 text-center">
          <h2
            class="text-3xl font-bold text-white sm:text-4xl max-w-[350px] mx-auto"
          >
            Ready to open the door to Africa?
          </h2>
          <p class="mt-6 text-lg text-[#F1F7F6] max-w-[500px] mx-auto">
            Get started with Portal by Vesicash and launch in new markets
            quickly and compliantly.
          </p>
          <div class="mt-8">
            <a href="#" class="btn"> Get started </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import coins from "@/assets/images/coins.png";
import routing from "@/assets/images/route.png";
import equality from "@/assets/images/equals.png";
import bars from "@/assets/images/bars.png";
import guard from "@/assets/images/guard.png";
import currencies from "@/assets/images/currency.png";
import { useAppState } from "~/app-state";
const features = [
  {
    title: "Simple, transparent pricing",
    description:
      "No setup fees. No monthly costs. Commission-only pricing so you can scale into Africa without upfront commitments.",
    image: coins,
  },
  {
    title: "Smart Payment Routing",
    description: "Route payments to the optimal rails to maximize conversion.",
    image: routing,
  },
  {
    title: "Seamless Onboarding",
    description: "B2B onboarding flows tailored to each supported market.",
    image: equality,
  },
  {
    title: "Automated Tax and Reporting",
    description: "Local compliance is handled automatically.",
    image: bars,
  },
  {
    title: "Chargeback Protection",
    description: "Dispute handling and protection managed by Vesicash as MoR.",
    image: guard,
  },
  {
    title: "Localized Collections",
    description:
      "Collect funds and transact your business in the local currency.",
    image: currencies,
  },
];

const store = useAppState();
const view = computed(() => store.appState);
</script>

<style>
.hero-section {
  background-image: url("../assets/images/skye.png");
  background-position: center;
  background-size: cover;
}

.feature-sections {
  background-image: url("../assets/images/curve-2.png");
  background-position: right;
  background-size: contain;
}
</style>
