<template>
  <v-app theme="myCustomDarkTheme" style="position: relative">
    <v-navigation-drawer v-model="showSideBar" disable-resize-watcher>
      <v-icon icon="mdi-close" class="ma-5 mt-8" @click="showSideBar = false"></v-icon>

      <v-list>
        <NuxtLink to="/" class="">
          <v-list-item>
            <template v-slot:prepend>
              <v-icon :color="page == 'index' ? 'light-blue-lighten-2' : ''" icon="mdi-home"></v-icon>
            </template>
            <div :class="page == 'index' ? 'text-light-blue-lighten-2' : ''">
              صفحه اصلی
            </div>
          </v-list-item>
        </NuxtLink>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar scroll-behavior="elevate" height="150" class="top-menu">
      <v-row class="justify-space-between align-center ma-0 mx-auto" style="max-width: 1400px">
        <v-col cols="2" class="d-block d-md-none text-right">
          <v-icon icon="mdi-menu" size="large" @click="showSideBar = true"></v-icon>
        </v-col>

        <v-col cols="5" md="2" class="text-right">
          <NuxtLink to="/">
            <span class="text-h5 text-sm-h4 font-weight-bold text-light-blue-lighten-2">
              <span>کد هاب</span>
            </span>
          </NuxtLink>
        </v-col>

        <v-col cols="4" class="d-none d-md-block">
          <v-text-field hide-details clearable max-width="400px" class="search-bar" prepend-inner-icon="mdi-magnify"
            label="جستجو در پرسش ها" variant="solo-filled" flat density="comfortable" v-model="searchQuery">
          </v-text-field>
        </v-col>

        <v-col cols="5" md="6" class="text-left pa-0">
          <NuxtLink to="/" class="d-inline-block">
            <v-icon icon="mdi-bell" class="ma-2 ml-5 d-block d-md-none" color="light-blue-lighten-2"></v-icon>
            <v-btn prepend-icon="mdi-bell" variant="text" color="light-blue-lighten-2" text="اعلان های من"
              class="ma-2 d-none d-md-flex font-weight-light" size="large"></v-btn>
          </NuxtLink>
          <NuxtLink to="/" class="d-inline-block">
            <v-icon icon="mdi-account" class="ma-2 ml-3 d-block d-md-none"></v-icon>
            <v-btn variant="flat" prepend-icon="mdi-login" color="light-blue-lighten-2" text="ورود / ثبت نام"
              class="ma-2 d-none d-md-flex font-weight-light" rounded="lg" size="large"></v-btn>
          </NuxtLink>
        </v-col>

        <v-col cols="12" md="12" class="d-block d-md-none pt-0">
          <v-text-field hide-details clearable class="search-bar" density="comfortable" prepend-inner-icon="mdi-magnify"
            label="جستجو..." variant="solo-filled" flat v-model="searchQuery">
          </v-text-field>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <div style="max-width: 1400px; margin: auto;margin-bottom: 8rem">
        <NuxtPage />
      </div>
    </v-main>

    <v-footer class="mt-0 pa-5 pa-md-15 foot">
      <v-row class="ma-0 mx-auto justify-space-between" style="max-width: 1400px">
        <v-col cols="12" md="3">
          <div class="">
            <span class="text-h4 font-weight-bold text-light-blue-lighten-2">
              <span>کد هاب</span>
            </span>
          </div>
          <div class="mt-10 text-h6 font-weight-light">
            <span>ما را در شبکه های اجتماعی دنبال کنید.</span>
          </div>
          <div class="mt-5 d-flex justify-space-between align-center">
            <v-icon size="large" icon="mdi-instagram"></v-icon>
            <v-icon size="large" icon="mdi-facebook"></v-icon>
            <v-icon size="large" icon="mdi-twitter"></v-icon>
          </div>
        </v-col>
        <v-col cols="12" md="3" class="text-h6 mt-10 mt-sm-0">
          <div class="text-h5 font-weight-normal text-white">ارتباط با ما</div>
          <div class="text-h6 mt-4 font-weight-light">تماس با ما</div>
          <div class="text-h6 mt-3 font-weight-light">پیشنهاد و انتقاد</div>
          <div class="text-h6 mt-3 font-weight-light">سوالات متداول</div>
          <div class="text-h6 mt-3 font-weight-light">وبلاگ</div>
        </v-col>
        <v-col cols="12" md="4" class="text-h6 mt-10 mt-sm-0">
          <div class="text-h5 font-weight-normal text-white">عضویت در خبرنامه</div>
          <div class="text-h6 mt-4 font-weight-light">از جدیدترین مقالات باخبر شوید.</div>
          <div class="mt-3">
            <v-text-field label="ایمیل خود را وارد کنید" variant="solo-filled" flat density="comfortable" rounded="lg">
              <template v-slot:append-inner>
                <v-btn flat density="comfortable" text="عضویت" class="font-weight-light" rounded="lg"
                  color="light-blue-lighten-2"></v-btn>
              </template>
            </v-text-field>
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  setup() {
    const cStore = cartStore();
    const runtimeConfig = useRuntimeConfig();
    return { cStore, runtimeConfig };
  },
  watch: {
    $route(route) {
      this.page = route.name;
    },
  },
  data() {
    return {
      searchQuery: null,
      page: "",
      theme: "light",
      cartCount: 0,
      productList: [],
      searchLoading: true,
      showSideBar: false,
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
  components: {},

  mounted() {
    setTimeout(() => {
      this.page = this.$route.name;
    }, 500);
  },
  methods: {
    scrollToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
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

.top-menu .v-btn {
  border-radius: var(--border-radius-md) !important;
}

.v-btn,
.v-card-subtitle {
  letter-spacing: 0 !important;
}

.v-badge__badge {
  color: white !important;
}

.v-main {
  background: #1e2124;
}
</style>
