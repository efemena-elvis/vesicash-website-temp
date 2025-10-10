<template>
  <footer class="bg-white text-gray-700 pt-12">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-8">
      <div class="flex flex-col space-y-4">
        <img
          src="../assets/images/Logo.png"
          alt="Logo"
          class="h-auto w-[175px] object-left object-cover"
        />
        <div class="text-base space-y-2 [&_>a]:block my-6">
          <a href="mailto:support@vesicash.com" class="hover:underline"
            >support@vesicash.com</a
          >
          <a href="mailto:support@vesicash.co.uk" class="hover:underline"
            >support@vesicash.co.uk</a
          >
        </div>
        <div class="flex space-x-8 mt-2">
          <nuxt-link
            to="https://www.instagram.com/vesicash"
            target="_blank"
            external
          >
            <icon-instagram class="text-2xl" />
          </nuxt-link>
          <nuxt-link
            to="https://www.facebook.com/vesicash"
            target="_blank"
            external
          >
            <icon-facebook class="text-2xl" />
          </nuxt-link>
          <nuxt-link to="https://twitter.com/Vesicash" target="_blank" external>
            <icon-twitter class="text-2xl text-green-400" />
          </nuxt-link>
          <nuxt-link
            to="https://www.linkedin.com/company/vesicash"
            target="_blank"
            external
          >
            <icon-linkedin class="text-2xl" />
          </nuxt-link>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:col-span-3">
        <div>
          <h3 class="font-semibold mb-2"></h3>
          <ul class="space-y-6 text-sm">
            <li><a href="#" class="hover:underline">About Us</a></li>
            <li><a href="#" class="hover:underline">Blog</a></li>
            <li><a href="#" class="hover:underline">Privacy Policy</a></li>
            <li><a href="#" class="hover:underline">Terms of Use</a></li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold mb-2"></h3>
          <ul class="space-y-6 text-sm">
            <li><a href="#" class="hover:underline">API Documentation</a></li>
            <li><a href="#" class="hover:underline">Status Page</a></li>
            <li>
              <a href="#" class="hover:underline"
                >What is Merchant of Record (MoR)</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold mb-2"></h3>
          <ul class="space-y-6 text-sm">
            <li><a href="#" class="hover:underline">Portal by Vesicash</a></li>
            <li><a href="#" class="hover:underline">Payment suite</a></li>
            <li><a href="#" class="hover:underline">Escrow</a></li>
          </ul>
        </div>
      </div>

      <hr class="my-8 border-gray-200 col-span-full" />
    </div>

    <div
      class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm px-8"
    >
      <div class="flex items-center space-x-2">
        <span class="text-xl">🇳🇬</span>
        <p>16 Alhaji Mudashiru Eletu Way, Osapa Estate, Lekki, Lagos.</p>
      </div>
      <div class="flex items-center space-x-2">
        <span class="text-xl">🇬🇭</span>
        <p>No.30 Independence Avenue, North Ridge, Accra.</p>
      </div>
      <div class="flex items-center space-x-2">
        <span class="text-xl">🇪🇬</span>
        <p>24 Al Tayaran Street, Near City, Cairo.</p>
      </div>
      <div class="flex items-center space-x-2">
        <span class="text-xl">🇺🇸</span>
        <p>
          251 Little Falls Drive, Wilmington, New Castle County, Delaware 19808
        </p>
      </div>
      <div class="flex items-center space-x-2">
        <span class="text-xl">🇬🇧</span>
        <p>2 Minster Court, London.</p>
      </div>
      <div class="flex items-center space-x-2">
        <span class="text-xl">🇰🇪</span>
        <p>
          The Mirage towers, Chiromo road, Westlands District, Nairobi-Kenya.
        </p>
      </div>
      <div class="flex items-center space-x-2">
        <span class="text-xl">🇿🇲</span>
        <p>LN2260/27 Off Lilayi Road, Shaft Five, Kafue</p>
      </div>
      <div class="flex items-center space-x-2">
        <span class="text-xl">🇷🇼</span>
        <p>Remera, Gasabo, Umujyi wa, Kigali.</p>
      </div>
      <div class="flex items-center space-x-2">
        <span class="text-xl">🇿🇦</span>
        <p>4 Cade Street, Southcrest, Alberton</p>
      </div>
      <div class="flex items-center space-x-2">
        <span class="text-xl">🇹🇿</span>
        <p>
          2nd Floor Elegant House, Nyerere Road, Dar es Salaam in Ilala
          Municipality.
        </p>
      </div>
      <div class="flex flex-col space-y-1">
        <p>A member of the stellar</p>
        <div class="flex items-center space-x-2">
          <img src="@/assets/images/stellar.png" alt="stellar" />
          <p>Stellar</p>
        </div>
      </div>
      <hr class="border-gray-200 col-span-full" />
    </div>

    <div class="container mx-auto text-center text-sm text-gray-500 py-6 px-8">
      <p>
        Copyright {{ new Date().getFullYear() }}. Vesicash Innovative
        Technologies.
      </p>
    </div>
  </footer>
</template>

<script setup>
// no script needed for static footer
</script>
