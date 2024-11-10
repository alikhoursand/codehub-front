<template>
  <v-responsive>
    <v-app>
      <v-main class="">
        <v-row class="justify-center py-5 h-100">
          <v-col cols="12" lg="5" class="align-self-center">
            <div class="d-block d-lg-none">
              <img src="/images/logo.svg" class="d-block mx-auto mt-5 mb-10" alt="" />
            </div>
            <v-sheet
              max-width="600"
              width="100%"
              class="mx-auto rounding pa-5 pa-md-15 auth"
              elevation="0"
            >
              <v-tabs
                v-model="tab"
                selected-class="text-light-blue-lighten-2"
                slider-color="light-blue-lighten-2"
                class="rounding"
                fixed-tabs
              >
                <v-tab value="login" :ripple="false">
                  <div class="text-h5 py-3">ورود</div>
                </v-tab>
                <v-tab value="register" :ripple="false">
                  <div class="text-h5 py-3">ثبت نام</div>
                </v-tab>
              </v-tabs>
              <div class="mt-5">
                <v-tabs-window v-model="tab">
                  <v-tabs-window-item value="login">
                    <label for="" class="d-block mt-5">ایمیل</label>
                    <v-text-field
                      placeholder="Email Address"
                      flat
                      hide-details
                      class="mt-2"
                      dir="ltr"
                      variant="outlined"
                    ></v-text-field>

                    <label for="" class="d-block mt-5">رمز عبور</label>
                    <v-text-field
                      :type="visible3 ? 'text' : 'password'"
                      placeholder=""
                      dir="ltr"
                      flat
                      hide-details
                      class="mt-2"
                      variant="outlined"
                    >
                      <template v-slot:append-inner></template>
                      <template v-slot:prepend-inner>
                        <img
                          src="/icons/eye-dark.svg"
                          class="eye"
                          @click="visible3 = false"
                          v-if="visible3"
                          alt=""
                        />
                        <img
                          src="/icons/eye-slash.svg"
                          class="eye"
                          @click="visible3 = true"
                          v-else
                          alt=""
                        />
                      </template>
                    </v-text-field>

                    <div class="mt-8 text-center">
                      <div class="d-none d-md-block">
                        <v-btn
                          color="light-blue-lighten-2"
                          flat
                          text="ورود"
                          size="x-large"
                          max-width="200"
                          width="100%"
                          class="rounding"
                        ></v-btn>
                      </div>

                      <div class="d-block d-md-none">
                        <v-btn
                          color="light-blue-lighten-2"
                          flat
                          block
                          text="ورود"
                          size="x-large"
                          class="rounding"
                        ></v-btn>
                      </div>

                      <div class="d-none d-md-block">
                        <v-btn
                          color="light-blue-lighten-2"
                          flat
                          text="ورود با رمز یکبار مصرف"
                          variant="outlined"
                          size="x-large"
                          max-width="200"
                          width="100%"
                          class="mt-5 rounding"
                        ></v-btn>
                      </div>

                      <div class="d-block d-md-none">
                        <v-btn
                          color="light-blue-lighten-2"
                          block
                          flat
                          text="ورود با رمز یکبار مصرف"
                          variant="outlined"
                          size="x-large"
                          class="mt-5 rounding"
                        ></v-btn>
                      </div>
                    </div>

                    <div class="d-flex align-center my-10">
                      <v-divider class="border-opacity-75"></v-divider>
                      <div class="mx-8" style="font-size: 18px">یا</div>
                      <v-divider class="border-opacity-75"></v-divider>
                    </div>

                    <v-row class="justify-space-between align-center">
                      <v-col cols="12" sm="6">
                        <v-btn
                          flat
                          variant="outlined"
                          size="x-large"
                          color="light-blue-lighten-2"
                          block
                          class="rounding text-white third-party-btn"
                          text="ورود با گوگل"
                        >
                          <template v-slot:prepend>
                            <img src="/icons/google.svg" alt="" />
                          </template>
                        </v-btn>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-btn
                          flat
                          variant="outlined"
                          size="x-large"
                          color="light-blue-lighten-2"
                          block
                          class="rounding text-white third-party-btn"
                          text="ورود با گیت هاب"
                        >
                          <template v-slot:prepend>
                            <img src="/icons/github.svg" alt="" />
                          </template>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-tabs-window-item>

                  <v-tabs-window-item value="register">
                    <label for="" class="d-block mt-5">ایمیل</label>
                    <v-text-field
                      placeholder="Email Address"
                      flat
                      hide-details
                      class="rounding mt-2"
                      dir="ltr"
                      variant="outlined"
                    ></v-text-field>

                    <label for="" class="d-block mt-5">رمز عبور</label>
                    <v-text-field
                      :type="visible ? 'text' : 'password'"
                      placeholder=""
                      flat
                      hide-details
                      dir="ltr"
                      class="rounding mt-2"
                      variant="outlined"
                    >
                      <template v-slot:append-inner></template>
                      <template v-slot:prepend-inner>
                        <img
                          src="/icons/eye-dark.svg"
                          class="eye"
                          @click="visible = false"
                          v-if="visible"
                          alt=""
                        />
                        <img
                          src="/icons/eye-slash.svg"
                          class="eye"
                          @click="visible = true"
                          v-else
                          alt=""
                        />
                      </template>
                    </v-text-field>

                    <label for="" class="d-block mt-5">تکرار رمز عبور</label>
                    <v-text-field
                      :type="visible2 ? 'text' : 'password'"
                      placeholder=""
                      flat
                      hide-details
                      class="rounding mt-2"
                      variant="outlined"
                      dir="ltr"
                    >
                      <template v-slot:append-inner></template>
                      <template v-slot:prepend-inner>
                        <img
                          src="/icons/eye-dark.svg"
                          class="eye"
                          @click="visible2 = false"
                          v-if="visible2"
                          alt=""
                        />
                        <img
                          src="/icons/eye-slash.svg"
                          class="eye"
                          @click="visible2 = true"
                          v-else
                          alt=""
                        />
                      </template>
                    </v-text-field>

                    <label for="" class="d-block mt-5"
                      >نام و نام خانوادگی (به فارسی)</label
                    >
                    <v-text-field
                      placeholder="نام و نام خانوادگی"
                      flat
                      hide-details
                      class="rounding mt-2"
                      variant="outlined"
                    ></v-text-field>

                    <div class="mt-8 text-center">
                      <v-btn
                        color="light-blue-lighten-2"
                        flat
                        text="ثبت نام"
                        size="x-large"
                        max-width="200"
                        width="100%"
                        class="d-none mx-auto d-md-flex rounding"
                      ></v-btn>

                      <v-btn
                        color="light-blue-lighten-2"
                        flat
                        text="ثبت نام"
                        size="x-large"
                        block
                        class="d-flex d-md-none rounding"
                      ></v-btn>
                    </div>

                    <div class="d-flex align-center my-10">
                      <v-divider class="border-opacity-75"></v-divider>
                      <div class="mx-8" style="font-size: 18px">یا</div>
                      <v-divider class="border-opacity-75"></v-divider>
                    </div>

                    <v-row class="justify-space-between align-center">
                      <v-col cols="12" sm="6">
                        <v-btn
                          flat
                          variant="outlined"
                          size="x-large"
                          color="light-blue-lighten-2"
                          block
                          class="rounding text-white third-party-btn"
                          text="ثبت نام با گوگل"
                        >
                          <template v-slot:prepend>
                            <img src="/icons/google.svg" alt="" />
                          </template>
                        </v-btn>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-btn
                          flat
                          variant="outlined"
                          size="x-large"
                          color="light-blue-lighten-2"
                          block
                          class="rounding text-white third-party-btn"
                          text="ثبت نام با گیت هاب"
                        >
                          <template v-slot:prepend>
                            <img src="/icons/github.svg" alt="" />
                          </template>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-tabs-window-item>
                </v-tabs-window>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="12" lg="4" class="d-none d-lg-block pt-15">
            <div style="max-width: 500px; width: 100%" class="mt-15 pt-5">
              <img src="/images/logo.svg" class="d-block mx-auto" alt="" />
              <img src="/images/auth.svg" class="d-block mx-auto w-100 mt-15" alt="" />
            </div>
          </v-col>
        </v-row>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup>
definePageMeta({
  layout: "empty",
});

let tab = ref(null);
let visible = ref(false);
let visible2 = ref(false);
let visible3 = ref(false);
</script>

<style>
.eye {
  cursor: pointer;
}

.third-party-btn .v-btn__content {
  color: white;
}

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

.editprofile-holder .v-field {
  border-radius: var(--border-radius-md);
}
</style>
