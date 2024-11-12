<template>
  <NuxtLayout name="404">
    <v-responsive>
      <v-app :theme="theme">
        <v-main :style="`background: ${theme == 'myLight' ? '#F9FBFC' : '#1e2124'};`">
          <div
            :class="[useCookie('theme').value == 'myLight' ? 'text-black' : 'text-white', 'd-flex justify-center align-center h-100']">
            <div class="text-center">
              <h1 class="text-h1">404</h1>
              <h4 class="mt-15 text-h4 text-medium-emphasis" style="letter-spacing: 0 !important;">صفحه مورد نظر پیدا
                نشد!</h4>
              <nuxt-link to="/">
                <v-btn class="mt-15" size="x-large" color="light-blue-lighten-2" rounded="lg" text="بازگشت به صفحه اصلی"
                  flat></v-btn>
              </nuxt-link>
            </div>
          </div>
        </v-main>
      </v-app>
    </v-responsive>
  </NuxtLayout>
</template>

<script setup>

let currentTheme = useCookie('theme').value ? useCookie('theme').value : 'myDark'

let theme = ref(currentTheme)

</script>

<style></style>
