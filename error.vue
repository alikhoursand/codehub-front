<template>
  <NuxtLayout name="404">
    <v-responsive>
      <v-app :theme="theme">
        <v-main>
          <div class="d-flex justify-center align-center h-100">
            <div class="text-center">
              <h1 class="text-h1">404</h1>
              <h4 class="mt-15 text-h4 text-medium-emphasis">صفحه مورد نظر پیدا نشد!</h4>
              <nuxt-link to="/">
                <v-btn
                  class="mt-15"
                  size="x-large"
                  color="light-blue-lighten-2"
                  rounded="lg"
                  text="بازگشت به صفحه اصلی"
                  flat
                ></v-btn>
              </nuxt-link>
            </div>
          </div>
        </v-main>
      </v-app>
    </v-responsive>
  </NuxtLayout>
</template>

<script>
export default {
  data() {
    return {
      theme: "myDark",
    };
  },
  methods: {},
};
</script>

<style>
.v-main {
  background: #1e2124;
}
</style>
