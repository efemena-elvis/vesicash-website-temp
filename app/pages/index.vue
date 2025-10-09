<template>
  <div class="pt-16">
    <div v-if="view === 'portal'" class="animate-in slide-in-from-left-2">
      <section class="bg-gray-100 py-16 relative hero-section">
        <div
          class="container mx-auto grid gap-10 lg:grid-cols-[1fr_1.35fr] items-center px-8 relative"
        >
          <div class="space-y-5 max-w-[500px]">
            <h1
              class="text-5xl md:text-[94px] md:leading-[108px] font-bold text-white"
            >
              Africa’s Merchant of Record Gateway
            </h1>
            <p class="text-lg text-[#E5EDEB]">
              Portal by Vesicash intelligently orchestrates local payments,
              compliance, and tax handling across the continent, giving you
              seamless access to every market.
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

      <section class="py-16 bg-gradient-to-r bg-[#F1F7F6] ocrhe">
        <div class="container px-8 grid sm:grid-cols-[1fr_1.7fr] gap-6">
          <div></div>
          <div class="space-y-10 sm:py-16">
            <h2
              class="text-4xl md:text-[56px] md:leading-[72px] font-bold text-[#171918]"
            >
              Orchestrated Payments, Built for Africa’s Complexity
            </h2>
            <div class="space-y-3 text-[#525857] text-lg">
              <p>
                Portal by Vesicash intelligently routes payments across mobile
                money, cards, and bank transfers in each market by using our
                network of licensed processors and banks. We handle
                <b>Compliance</b>, <b>Settlement</b>, and <b>Taxes</b>, so you
                don’t have to.
              </p>
              <p>
                Our smart orchestration engine automatically selects the most
                reliable, cost-effective rail for each transaction thereby
                maximizing uptime and optimizing your margins. That’s how we
                turn Africa’s fragmented payment landscape into one seamless
                API.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-white feature-sections">
        <div class="text-center container mx-auto mb-16 px-4">
          <h2 class="text-4xl font-bold md:text-6xl">
            Portal by Vesicash: One API,<br />Full Coverage
          </h2>
          <p class="text-[#525857] mt-4 mx-auto max-w-xl text-lg">
            Portal is Africa’s unified Merchant of Record API. We handle
            payments, tax, and compliance so you can focus on growth.
          </p>
        </div>

        <div
          class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4"
        >
          <div
            v-for="(feature, idx) in features"
            :key="idx"
            class="bg-[#F1F7F6] rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col"
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
              class="w-[237.41px] h-[168.5px] mt-auto mx-auto object-contain object-bottom block"
            />
          </div>
        </div>
      </section>

      <section class="py-16 bg-[#EEF9FD]">
        <div class="container mx-auto px-8">
          <!-- Heading -->
          <div class="text-center mb-12 px-4">
            <h2
              class="text-4xl md:text-6xl font-bold text-[#171918] max-w-2xl mx-auto"
            >
              Trusted by Global Brands Across Africa
            </h2>
          </div>

          <!-- Map Placeholder -->
          <div
            class="max-w-5xl mx-auto bg-black rounded-full overflow-hidden p-6 _flex justify-center"
          >
            <img
              src="@/assets/images/globe.png"
              alt="Africa Map Placeholder"
              class="w-full object-cover rounded-[32px]"
            />
          </div>

          <div
            class="_grid hidden grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] [&>img]:justify-self-center gap-10 mt-16 mb-28"
          >
            <img src="../assets/images/yas.png" alt="yas" />
            <img src="../assets/images/flutterwave.png" alt="flutterwave" />
            <img src="../assets/images/m-pesa.png" alt="m-pesa" />
            <img src="../assets/images/tico.png" alt="tigo" />
            <img src="../assets/images/e-wallet.png" alt="e-wallet" />
            <img src="../assets/images/visa.png" alt="visa" />
            <img src="../assets/images/alexpay.png" alt="alexpay" />
            <img src="../assets/images/mastercard.png" alt="mastercard" />
            <img src="../assets/images/redstone.png" alt="redstone" />
          </div>

          <!-- Stats Section -->
          <div
            class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-6 text-center"
          >
            <div>
              <p class="text-5xl font-bold text-[#24ACEE]">50+</p>
              <p class="text-[#525857] mt-2 text-lg">
                Businesses use our platform to<br />
                process their transactions.
              </p>
            </div>

            <div>
              <p class="text-5xl font-bold text-[#24ACEE]">7+</p>
              <p class="text-[#525857] text-lg mt-2">
                Markets, including Ghana, South<br />
                Africa, Zambia and Tanzania
              </p>
            </div>

            <div>
              <p class="text-5xl font-bold text-[#24ACEE]">4+</p>
              <p class="text-[#525857] text-lg mt-2">
                Payment licenses secured,<br />
                doubling by Q1 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        class="bg-[#011A27] text-white py-[100px] flex items-center justify-center"
      >
        <div class="container mx-auto px-8 text-center">
          <h2
            class="text-4xl font-bold text-white sm:text-[46px] sm:leading-[60px] max-w-[500px] mx-auto"
          >
            Ready to Expand into Africa?
          </h2>
          <p
            class="mt-6 text-[24px] leading-[32px] text-[#F1F7F6] max-w-[500px] mx-auto font-light"
          >
            Get started with Portal by Vesicash and launch in new markets
            quickly and compliantly.
          </p>
          <div class="mt-8">
            <a href="#" class="btn"> Get started </a>
          </div>
        </div>
      </section>
    </div>
    <div v-else class="animate-in slide-in-from-left-2">
      <section class="bg-gray-100 py-16">
        <div
          class="container mx-auto grid gap-10 lg:grid-cols-[2fr_3fr] items-center px-8 relative"
        >
          <div class="space-y-5">
            <h1 class="text-5xl md:text-6xl md:leading-[80px] font-bold">
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

      <section class="py-16">
        <h4 class="text-[#171918] text-xl text-center mb-10 font-semibold">
          Powered by Licensed Processors Across Africa
        </h4>
        <shared-auto-scroll-carousel
          wrapper-classes="justify-between gap-x-24 mr-24"
        >
          <img src="../assets/images/yas.png" alt="yas" />
          <img src="../assets/images/flutterwave.png" alt="flutterwave" />
          <img src="../assets/images/m-pesa.png" alt="m-pesa" />
          <img src="../assets/images/tico.png" alt="tigo" />
          <img src="../assets/images/e-wallet.png" alt="e-wallet" />
          <img src="../assets/images/visa.png" alt="visa" />
          <img src="../assets/images/alexpay.png" alt="alexpay" />
          <img src="../assets/images/mastercard.png" alt="mastercard" />
          <img src="../assets/images/redstone.png" alt="redstone" />
          <img src="../assets/images/yas.png" alt="yas" />
          <img src="../assets/images/flutterwave.png" alt="flutterwave" />
          <img src="../assets/images/m-pesa.png" alt="m-pesa" />
          <img src="../assets/images/tico.png" alt="tigo" />
          <img src="../assets/images/e-wallet.png" alt="e-wallet" />
          <img src="../assets/images/visa.png" alt="visa" />
          <img src="../assets/images/alexpay.png" alt="alexpay" />
          <img src="../assets/images/mastercard.png" alt="mastercard" />
          <img src="../assets/images/redstone.png" alt="redstone" />
        </shared-auto-scroll-carousel>
        <div class="flex [&_>img]:shrink-0 overflow-hidden gap-x-20"></div>
      </section>

      <section class="py-16 bg-white">
        <div class="container px-8 mx-auto space-y-4">
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl"
          >
            Built on Trusted Local Payment Infrastructure Across Africa
          </h2>

          <div
            class="grid md:grid-cols-[1fr_auto] items-center gap-y-8 gap-x-2"
          >
            <div class="space-y-6 text-[18px] leading-[32px]">
              <p class="text-gray-600 leading-relaxed">
                Vesicash partners with licensed financial institutions and PSPs
                in every market we operate, thereby providing compliant,
                reliable payment infrastructure that’s built for Africa.
              </p>
              <p class="text-gray-600 leading-relaxed">
                We don't just offer generic rails. Our system localizes the
                experience by detecting the buyer’s market and automatically
                presenting the most trusted local payment methods; whether
                that’s <b>mobile money in Tanzania</b>,
                <b>bank transfers in Nigeria</b>, or
                <b>card payments in Ghana</b>.
              </p>
              <p class="text-gray-600 leading-relaxed">
                Through one integration, you gain access to a growing network of
                regulated local rails, ensuring every collection or payout is
                fast, secure, and aligned with local rules.
              </p>
            </div>
            <img
              src="@/assets/images/Africa-glow.png"
              alt="Africa Payment Collage"
              class="h-[398px] w-[558px] object-contain mx-auto block"
            />
          </div>

          <div class="grid md:grid-cols-[244px_1fr] gap-10 mt-32">
            <div>
              <h1 class="text-5xl font-bold text-[#171918]">Why it Matters</h1>
            </div>
            <div
              class="grid md:grid-cols-[repeat(auto-fill,_minmax(270px,_1fr))] gap-8"
            >
              <div class="space-y-4">
                <div
                  class="size-[70px] rounded-full border border-[#E5EDEB] bg-white grid place-items-center"
                >
                  <!-- <icon-judge class="text-4xl text-blue-400/80" /> -->
                  <img src="../assets/images/judge.svg" alt="" />
                </div>
                <div class="space-y-2">
                  <h3 class="text-xl text-[#171918] font-semibold">
                    Compliant From Day One
                  </h3>
                  <p class="text-[#525857]">
                    Every transaction runs through licensed, locally approved
                    partners.
                  </p>
                </div>
              </div>

              <div class="space-y-4">
                <div
                  class="size-[70px] rounded-full border border-[#E5EDEB] grid place-items-center"
                >
                  <!-- <icon-arrows class="text-4xl" /> -->
                  <img src="../assets/images/arrows.svg" alt="" />
                </div>
                <div class="space-y-2">
                  <h3 class="text-xl text-[#171918] font-semibold">
                    Optimised For Conversion
                  </h3>
                  <p class="text-[#525857]">
                    Increase checkout success by presenting the right methods at
                    the right time.
                  </p>
                </div>
              </div>

              <div class="space-y-4">
                <div
                  class="size-[70px] rounded-full border border-[#E5EDEB] grid place-items-center"
                >
                  <!-- <icon-globe class="text-4xl text-blue-500/30" /> -->
                  <img src="../assets/images/globe.svg" alt="" />
                </div>
                <div class="space-y-2">
                  <h3 class="text-xl text-[#171918] font-semibold">
                    Local Rails, Not Just Global Pipes
                  </h3>
                  <p class="text-[#525857]">
                    We prioritize payment methods your customers actually trust
                    in each market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-[#EEF9FD]">
        <div class="container px-8 mx-auto text-center">
          <!-- Section Header -->
          <h2 class="text-4xl font-bold md:text-6xl text-gray-900">
            Unlock Reliable Payment in Africa
          </h2>
          <p
            class="mt-3 text-[#525857]/80 text-lg text-center max-w-2xl mx-auto"
          >
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
              <div class="bg-black text-white p-6 text-left min-h-[162px]">
                <h3 class="font-bold text-xl">Collections</h3>
                <p class="mt-2">
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
              <div class="bg-black text-white p-6 text-left min-h-[162px]">
                <h3 class="font-bold text-xl">Remittances</h3>
                <p class="mt-2">
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
              <div class="bg-black text-white p-6 text-left min-h-[162px]">
                <h3 class="font-bold text-xl">Disbursements</h3>
                <p class="mt-2">
                  Payouts to Bank Accounts and Mobile Money wallets in real
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="w-full bg-[#EEF9FD] py-16 hidden">
        <div class="container mx-auto px-8">
          <div class="divide-y divide-dashed divide-[#D5DDDC]">
            <div>
              <h2 class="text-xl font-bold text-center mb-4">
                Our licensed entities
              </h2>
              <div
                class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center md:divide-x divide-dashed divide-[#D5DDDC] pb-6"
              >
                <div class="flex justify-center p-8">
                  <img
                    src="@/assets/images/alexpay.png"
                    alt="AlexPay"
                    class="h-12 object-contain"
                  />
                </div>
                <div class="flex justify-center p-8">
                  <img
                    src="@/assets/images/e-wallet.png"
                    alt="eWallet"
                    class="h-12 object-contain"
                  />
                </div>
                <div class="flex justify-center p-8">
                  <img
                    src="@/assets/images/redstone.png"
                    alt="Redstone"
                    class="h-12 object-contain"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 class="text-xl font-bold text-center mt-4">Our partners</h2>
              <div
                class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center md:divide-x divide-dashed divide-[#D5DDDC]"
              >
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
        </div>
      </section>

      <section class="bg-white py-16">
        <div class="container mx-auto px-8 space-y-8">
          <h1
            class="text-5xl font-bold leading-tight text-gray-900 lg:text-6xl text-center"
          >
            Introducing Vesicash Storefront
          </h1>
          <div
            class="grid sm:grid-cols-2 gap-8 items-stretch max-w-3xl mx-auto"
          >
            <div
              class="space-y-6 p-6 rounded-3xl bg-[#F1F7F6] grid items-center"
            >
              <h4 class="text-4xl font-bold text-[#171918]">Sell in minutes</h4>

              <p class="text-lg text-gray-600 leading-relaxed max-w-xl">
                Storo by Vesicash lets businesses build stores quickly, list
                products, accept local payment methods, and sell in any African
                currency
              </p>
              <button class="btn btn-primary">Start Selling</button>
            </div>
            <div class="p-6 bg-[#F1F7F6] rounded-3xl">
              <img src="@/assets/images/shop.png" alt="shop" />
            </div>
          </div>

          <div class="mt-24 flex flex-wrap gap-4 justify-center">
            <span
              class="px-6 py-3 bg-[#E5EDEB] text-[#171918] rounded-full border-2 border-[#C1C9C8] text-sm font-medium shadow-md"
            >
              No developer required
            </span>
            <span
              class="px-6 py-3 bg-[#E5EDEB] text-[#171918] rounded-full border-2 border-[#C1C9C8] text-sm font-medium shadow-md"
            >
              Cards
            </span>
            <span
              class="px-6 py-3 bg-[#E5EDEB] text-[#171918] rounded-full border-2 border-[#C1C9C8] text-sm font-medium shadow-md"
            >
              Mobile money
            </span>
            <span
              class="px-6 py-3 bg-[#E5EDEB] text-[#171918] rounded-full border-2 border-[#C1C9C8] text-sm font-medium shadow-md"
            >
              Local currency
            </span>
            <span
              class="px-6 py-3 bg-[#E5EDEB] text-[#171918] rounded-full border-2 border-[#C1C9C8] text-sm font-medium shadow-md"
            >
              Checkout
            </span>
          </div>
        </div>
      </section>
      <section
        class="bg-[#011A27] text-white py-[100px] flex items-center justify-center"
      >
        <div class="container mx-auto px-8 text-center">
          <h2
            class="text-4xl font-bold text-white sm:text-5xl max-w-[500px] mx-auto"
          >
            Let’s Simplify Your Payments.
          </h2>
          <p class="mt-6 text-lg text-[#F1F7F6] max-w-[500px] mx-auto">
            Go live across Africa on licensed local rails.
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

const brands = ["yas"];
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
  background-repeat: no-repeat;
}

.ocrhe {
  background-image: url("../assets/images/left-curve.png");
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
