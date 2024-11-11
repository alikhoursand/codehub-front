<template>
  <v-app :theme="theme.value" style="position: relative">
    <v-navigation-drawer v-model="showSideBar" disable-resize-watcher>
      <v-list class="pt-0">
        <nuxt-link to="/auth">
          <v-list-item class="login-menu">
            <template v-slot:prepend>
              <img src="/public/icons/login-1.svg"></img>
            </template>
            <div :class="['menu-item']">
              ورود / ثبت نام
            </div>
          </v-list-item>
        </nuxt-link>


        <NuxtLink to="/" class="mt-10">
          <v-list-item class="mt-10">
            <template v-slot:prepend>
              <img src="/icons/home-2.svg"></img>
            </template>
            <div :class="[page == 'index' ? 'text-light-blue-lighten-2' : '', 'menu-item']">
              صفحه اصلی
            </div>
          </v-list-item>


        </NuxtLink>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar scroll-behavior="elevate" height="120" height-md="20" class="top-menu">
      <template v-slot:prepend>
        <v-icon class="d-block d-lg-none" icon="mdi-menu" size="large" @click="showSideBar = true"></v-icon>
      </template>

      <v-row class="justify-space-between align-center ma-0 mx-auto" style="max-width: 1400px">
        <!-- <v-col cols="2" class="d-block d-lg-none text-right">
          <v-icon icon="mdi-menu" size="large" @click="showSideBar = true"></v-icon>
        </v-col> -->

        <v-col cols="3" lg="3" class="text-right">
          <NuxtLink to="/">
            <!-- <span class="text-h5 text-sm-h4 font-weight-bold text-light-blue-lighten-2"> -->
            <img :eager="true" class="logo" src="/images/logo.svg"></img>
            <!-- </span> -->
          </NuxtLink>
        </v-col>

        <v-col cols="6" lg="5" class="d-none d-md-block pl-0 search-holder">
          <v-text-field hide-details clearable max-width="400px" height="48" class="search-bar" label="جستجو در پرسش ها"
            variant="solo-filled" flat v-model="searchQuery">

            <template v-slot:prepend-inner>
              <img src="/icons/search-normal-1.svg"></img>
            </template>
          </v-text-field>
        </v-col>

        <v-col cols="2" lg="4" class="text-left pa-0 d-flex align-center justify-end">

          <img src="/icons/search-normal-2.svg" @click="searchDialog = true" class="ml-2 mr-2 d-block d-md-none" alt="">

          <NuxtLink to="/" class="d-inline-block">
            <!-- <v-icon icon="mdi-bell" class="ma-2 ml-5 d-block d-md-none" color="light-blue-lighten-2"></v-icon> -->
            <img src="/icons/notification.svg" class="ma-2 ml-2 mr-2 d-block d-lg-none"></img>

            <v-btn variant="outlined" color="light-blue-lighten-2" text="اعلان های من"
              class=" rounding ma-2 d-none d-lg-flex " size="x-large">
              <template v-slot:prepend>
                <img src="/icons/notification.svg"></img>
              </template>
            </v-btn>
          </NuxtLink>
          <NuxtLink to="/" class="d-inline-block">
            <!-- <v-icon icon="mdi-account" class="ma-2 ml-3 d-block d-md-none"></v-icon> -->
            <!-- <img src="/icons/login-2.svg" class="ma-2 ml-2 d-block d-lg-none"></img> -->
            <v-btn variant="flat" color="light-blue-lighten-2" text="ورود / ثبت نام"
              class=" rounding  mr-0 ma-2 d-none d-lg-flex " size="x-large">
              <template v-slot:prepend>
                <img src="/icons/login-1.svg"></img>
              </template></v-btn>
          </NuxtLink>

          <v-btn size="x-small" color="light-blue-lighten-2" :variant="theme == 'myDark' ? 'flat' : 'tonal'" icon=""
            class="ml-2 mr-2 d-flex d-lg-none" rounded="xl" flat>
            <img :src="theme == 'myDark' ? '/icons/moon.svg' : '/icons/sun-1.svg'" @click="changeTheme()"
              style="transform: scaleX(-1);" alt="">
          </v-btn>

          <v-btn size="small" color="light-blue-lighten-2" :variant="theme == 'myDark' ? 'flat' : 'tonal'" icon=""
            class="ml-2 mr-2 d-none d-lg-flex" rounded="xl" flat>
            <img :src="theme == 'myDark' ? '/icons/moon.svg' : '/icons/sun-1.svg'" @click="changeTheme()"
              style="transform: scaleX(-1);" alt="">
          </v-btn>


        </v-col>

        <!-- <v-col cols="12" class="d-block d-lg-none pt-0 pa-3">
          <v-text-field hide-details clearable class="search-bar" density="comfortable" label="جستجو..."
            variant="solo-filled" flat v-model="searchQuery">
            <template v-slot:prepend-inner>
              <img src="/icons/search-normal-1.svg"></img>
            </template>
          </v-text-field>
        </v-col> -->
      </v-row>
    </v-app-bar>
    <!-- background: #1e2124; -->
    <v-main class="main-holder" :style="`background: ${theme == 'myDark' ? '#1e2124' : '#F9FBFC'};`">
      <div style="max-width: 1400px; margin: auto;margin-bottom: 8rem">
        <NuxtPage />
      </div>
    </v-main>

    <v-footer class="mt-0 pa-5 pa-md-15 foot">
      <v-row class="ma-0 mx-auto justify-space-between text-center text-lg-right" style="max-width: 1400px">
        <v-col cols="12" md="3">
          <div class="">
            <!-- <span class="text-h4 font-weight-bold text-light-blue-lighten-2"> -->
            <img :eager="true" class="w-100" style="max-width: 236px;" src="/images/logo.svg"></img>
            <!-- </span> -->
          </div>
          <div class="mt-15  ">
            <span class="w-100">ما را در شبکه های اجتماعی دنبال کنید.</span>
          </div>
          <div class="mt-5 d-flex justify-space-between align-center mx-auto" style="max-width: 500px;">
            <v-icon size="large" icon="mdi-instagram"></v-icon>
            <v-icon size="large" icon="mdi-facebook"></v-icon>
            <v-icon size="large" icon="mdi-twitter"></v-icon>
          </div>
        </v-col>
        <v-col cols="12" md="3" class=" mt-10 mt-sm-0">
          <div class="text-h6 font-weight-normal text-white">ارتباط با ما</div>
          <div class=" mt-4 ">تماس با ما</div>
          <div class=" mt-3 ">پیشنهاد و انتقاد</div>
          <div class=" mt-3 ">سوالات متداول</div>
          <div class=" mt-3 ">وبلاگ</div>
        </v-col>
        <v-col cols="12" md="4" class=" mt-10 mt-sm-0">
          <div class="text-h6 font-weight-normal text-white">عضویت در خبرنامه</div>
          <div class=" mt-4 ">از جدیدترین مقالات باخبر شوید.</div>
          <div class="mt-3">
            <v-text-field label="ایمیل خود را وارد کنید" variant="solo-filled" flat density="comfortable" rounded="lg">
              <template v-slot:append-inner>
                <v-btn flat density="comfortable" text="عضویت" class="" rounded="lg"
                  color="light-blue-lighten-2"></v-btn>
              </template>
            </v-text-field>
          </div>
        </v-col>
      </v-row>
    </v-footer>

    <v-dialog v-model="searchDialog">
      <v-card flat class="rounding">

        <v-text-field hide-details clearable class="search-bar rounding" label="جستجو..." variant="solo-filled" flat
          v-model="searchQuery">
          <template v-slot:prepend-inner>
            <img src="/icons/search-normal-1.svg"></img>
          </template>
        </v-text-field>

        <div class="pa-5">
          <v-empty-state text="" title="موردی پیدا نشد"></v-empty-state>
        </div>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();

var currentTheme = useCookie('theme').value ? useCookie('theme').value : 'myDark'
useCookie('theme').value = currentTheme

let searchQuery = ref(null);
let page = ref("")
let cartCount = ref(0);
let theme = ref(currentTheme)
let searchDialog = ref(false)
let searchLoading = ref(false)
let showSideBar = ref(false)




function changeTheme() {
  theme.value == 'myDark' ? theme.value = 'myLight' : theme.value = 'myDark';
  useCookie('theme').value = theme.value
}

function scrollToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
</script>


<style>
a:link,
a:visited {
  text-decoration: none;
  color: unset;
}


.foot .v-field,
.top-menu .v-field {
  border-radius: var(--border-radius-md) !important;
}

.v-btn,
.v-card-subtitle {
  letter-spacing: 0 !important;
}

.v-badge__badge {
  color: white !important;
}
</style>
