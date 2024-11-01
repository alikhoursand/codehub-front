<template>
  <v-responsive>
    <v-app>
      <v-main>
        <v-row class="justify-center h-100 align-center">
          <v-col cols="12" lg="5">
            <v-sheet class="rounding pa-8 auth" elevation="0">

              <v-tabs selected-class="text-light-blue-lighten-2" slider-color="light-blue-lighten-2" class="rounding "
                fixed-tabs>
                <v-tab :ripple="false">
                  <div class="text-h5 py-3">ورود</div>
                </v-tab>
                <v-tab :ripple="false">
                  <div class="text-h5 py-3">ثبت نام</div>
                </v-tab>
              </v-tabs>

            </v-sheet>
          </v-col>
          <v-col cols="12" lg="5">
            <img src="/images/logo.svg" class="d-block mx-auto" alt="">
            <img src="/images/auth.svg" class="d-block mx-auto mt-15" alt="">
          </v-col>
        </v-row>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup>

definePageMeta({
  layout: 'empty'
})


</script>

<style>
.auth .v-btn__overlay {
  background: none !important;
}


.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-input__details {
  letter-spacing: 0 !important;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
