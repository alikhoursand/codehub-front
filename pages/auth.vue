<template>
  <v-responsive>
    <v-app :theme="theme">
      <v-main class="" :style="`background: ${useCookie('theme').value == 'myLight' ? '#F9FBFC' : '#1e2124'
        };`">
        <v-row class="justify-center py-5 h-100">
          <v-col cols="12" lg="5" class="align-self-center">
            <div class="d-block d-lg-none">
              <img src="/images/logo.svg" class="d-block mx-auto mt-5 mb-10" alt="" />
            </div>
            <v-sheet max-width="500" width="100%" :class="[
              useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border',
              'mx-auto rounding pa-5 px-md-13 py-md-5 auth pt-3',
            ]" elevation="0">
              <v-tabs v-model="tab" selected-class="text-light-blue-lighten-2" slider-color="light-blue-lighten-2"
                fixed-tabs>
                <v-tab value="login" :ripple="false">
                  <div class="text-h5 py-3">ورود</div>
                </v-tab>
                <v-tab value="register" :ripple="false">
                  <div class="text-h5 py-3">ثبت نام</div>
                </v-tab>
              </v-tabs>
              <v-tabs-window class="mt-5" v-model="tab">
                <v-tabs-window-item value="login">
                  <Transition name="slide-fade" mode="out-in">
                    <div v-if="loginType == 'password'">
                      <label for="" class="d-block mt-5">ایمیل</label>
                      <v-text-field v-model="loginUser.email" flat hide-details class="mt-2" dir="ltr"
                        variant="outlined"></v-text-field>

                      <label for="" class="d-block mt-5">رمز عبور</label>
                      <v-text-field @keypress.enter="login()" v-model="loginUser.password"
                        :type="visible3 ? 'text' : 'password'" placeholder="" dir="ltr" flat hide-details class="mt-2"
                        variant="outlined">
                        <template v-slot:append-inner></template>
                        <template v-slot:prepend-inner>
                          <img src="/icons/eye-dark.svg" class="eye" @click="visible3 = false" v-if="visible3" alt="" />
                          <img src="/icons/eye-slash.svg" class="eye" @click="visible3 = true" v-else alt="" />
                        </template>
                      </v-text-field>

                      <div class="mt-8 text-center">
                        <div class="d-none d-md-block">
                          <v-btn color="light-blue-lighten-2" @click="login()" :loading="loginLoading" flat text="ورود"
                            size="x-large" density="comfortable" max-width="200" width="100%" class="rounding"></v-btn>
                        </div>

                        <div class="d-block d-md-none">
                          <v-btn color="light-blue-lighten-2" @click="login()" :loading="loginLoading" flat block
                            text="ورود" size="x-large" density="comfortable" class="rounding"></v-btn>
                        </div>

                        <div class="d-none d-md-block">
                          <v-btn color="light-blue-lighten-2" flat text="ورود با رمز یکبار مصرف"
                            @click="loginType = 'otp'" variant="outlined" size="large" max-width="200" width="100%"
                            class="mt-5 rounding"></v-btn>
                        </div>

                        <div class="d-block d-md-none">
                          <v-btn color="light-blue-lighten-2" block flat text="ورود با رمز یکبار مصرف"
                            @click="loginType = 'otp'" variant="outlined" size="large" class="mt-5 rounding"></v-btn>
                        </div>
                      </div>
                    </div>
                    <div v-else>
                      <Transition name="slide-fade" mode="out-in">
                        <div v-if="loginStep == 1">
                          <label for="" class="d-block mt-5">ایمیل</label>
                          <v-text-field flat hide-details class="mt-2" dir="ltr" variant="outlined"></v-text-field>

                          <div class="mt-8 text-center">
                            <div class="d-none d-md-block">
                              <v-btn color="light-blue-lighten-2" flat text="دریافت رمز یکبار مصرف"
                                @click="loginStep = 2" size="x-large" density="comfortable" max-width="200" width="100%"
                                class="rounding"></v-btn>
                            </div>

                            <div class="d-block d-md-none">
                              <v-btn color="light-blue-lighten-2" flat block text="دریافت رمز یکبار مصرف"
                                @click="loginStep = 2" size="x-large" density="comfortable" class="rounding"></v-btn>
                            </div>

                            <div class="d-none d-md-block">
                              <v-btn color="light-blue-lighten-2" flat text="ورود با رمز عبور"
                                @click="loginType = 'password'" variant="outlined" size="large" max-width="200"
                                width="100%" class="mt-5 rounding"></v-btn>
                            </div>

                            <div class="d-block d-md-none">
                              <v-btn color="light-blue-lighten-2" block flat text="ورود با رمز عبور"
                                @click="loginType = 'password'" variant="outlined" size="large"
                                class="mt-5 rounding"></v-btn>
                            </div>
                          </div>
                        </div>
                        <div v-else>
                          <label for="" class="d-block mt-5">رمز یکبار مصرف</label>
                          <v-otp-input :length="5" dir="ltr" class="mt-2" rounded="lg" flat hide-details></v-otp-input>

                          <div class="mt-8 text-center">
                            <div class="d-none d-md-block">
                              <v-btn color="light-blue-lighten-2" flat text="تایید و ورود" size="x-large"
                                density="comfortable" max-width="200" width="100%" class="rounding"></v-btn>
                            </div>

                            <div class="d-block d-md-none">
                              <v-btn color="light-blue-lighten-2" flat block text="تایید و ورود" size="x-large"
                                density="comfortable" class="rounding"></v-btn>
                            </div>

                            <div class="d-none d-md-block">
                              <v-btn color="light-blue-lighten-2" flat text="ورود با رمز عبور" @click="
                                loginType = 'password';
                              loginStep = 1;
                              " variant="outlined" size="large" max-width="200" width="100%"
                                class="mt-5 rounding"></v-btn>
                            </div>

                            <div class="d-block d-md-none">
                              <v-btn color="light-blue-lighten-2" block flat text="ورود با رمز عبور" @click="
                                loginType = 'password';
                              loginStep = 1;
                              " variant="outlined" size="large" class="mt-5 rounding"></v-btn>
                            </div>
                          </div>
                        </div>
                      </Transition>
                    </div>
                  </Transition>

                  <div class="d-flex align-center my-10">
                    <v-divider class="border-opacity-75" color="#BEDEFF"></v-divider>
                    <div class="mx-8" style="font-size: 18px">یا</div>
                    <v-divider class="border-opacity-75" color="#BEDEFF"></v-divider>
                  </div>

                  <v-row class="justify-space-between align-center">
                    <v-col cols="12" sm="6">
                      <v-btn flat variant="outlined" size="large" color="light-blue-lighten-2" block
                        class="rounding text-body-2 third-party-btn">
                        <span :class="useCookie('theme').value == 'myLight'
                          ? 'text-black'
                          : 'text-white'
                          ">
                          ورود با گوگل
                        </span>
                        <template v-slot:prepend>
                          <img src="/icons/google.svg" alt="" />
                        </template>
                      </v-btn>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-btn flat variant="outlined" size="large" color="light-blue-lighten-2" block
                        class="rounding text-body-2 third-party-btn">
                        <span :class="useCookie('theme').value == 'myLight'
                          ? 'text-black'
                          : 'text-white'
                          ">
                          ورود با گیت هاب
                        </span>
                        <template v-slot:prepend>
                          <img src="/icons/github.svg" alt="" />
                        </template>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-tabs-window-item>

                <v-tabs-window-item value="register">
                  <label for="" class="d-block mt-5">ایمیل</label>
                  <v-text-field flat :error-messages="errors.register.email.text" v-model="registerUser.email"
                    class="rounding mt-2" dir="ltr" variant="outlined"></v-text-field>

                  <label for="" class="d-block mt-5">رمز عبور</label>
                  <v-text-field v-model="registerUser.password" :type="visible ? 'text' : 'password'" placeholder=""
                    flat hide-details dir="ltr" class="rounding mt-2" variant="outlined">
                    <template v-slot:append-inner></template>
                    <template v-slot:prepend-inner>
                      <img src="/icons/eye-dark.svg" class="eye" @click="visible = false" v-if="visible" alt="" />
                      <img src="/icons/eye-slash.svg" class="eye" @click="visible = true" v-else alt="" />
                    </template>
                  </v-text-field>

                  <label for="" class="d-block mt-5">تکرار رمز عبور</label>
                  <v-text-field v-model="registerUser.passwordRepeat" :type="visible2 ? 'text' : 'password'"
                    placeholder="" flat hide-details class="rounding mt-2" variant="outlined" dir="ltr">
                    <template v-slot:append-inner></template>
                    <template v-slot:prepend-inner>
                      <img src="/icons/eye-dark.svg" class="eye" @click="visible2 = false" v-if="visible2" alt="" />
                      <img src="/icons/eye-slash.svg" class="eye" @click="visible2 = true" v-else alt="" />
                    </template>
                  </v-text-field>

                  <label for="" class="d-block mt-5">نام و نام خانوادگی (به فارسی)</label>
                  <v-text-field v-model="registerUser.fullName" flat hide-details class="rounding mt-2"
                    variant="outlined"></v-text-field>

                  <div class="mt-8 text-center">
                    <v-btn color="light-blue-lighten-2" flat text="ثبت نام" :loading="registerLoading"
                      @click="register()" size="x-large" density="comfortable" max-width="200" width="100%"
                      class="d-none mx-auto d-md-flex rounding"></v-btn>

                    <v-btn color="light-blue-lighten-2" flat text="ثبت نام" :loading="registerLoading"
                      @click="register()" size="x-large" density="comfortable" block
                      class="d-flex d-md-none rounding"></v-btn>
                  </div>

                  <div class="d-flex align-center my-10">
                    <v-divider class="border-opacity-75" color="#BEDEFF"></v-divider>
                    <div class="mx-8" style="font-size: 18px">یا</div>
                    <v-divider class="border-opacity-75" color="#BEDEFF"></v-divider>
                  </div>

                  <v-row class="justify-space-between align-center">
                    <v-col cols="12" sm="6">
                      <v-btn flat variant="outlined" size="large" color="light-blue-lighten-2" block
                        class="rounding text-body-2 text-white third-party-btn">
                        <span :class="useCookie('theme').value == 'myLight'
                          ? 'text-black'
                          : 'text-white'
                          ">
                          ثبت نام با گوگل
                        </span>
                        <template v-slot:prepend>
                          <img src="/icons/google.svg" alt="" />
                        </template>
                      </v-btn>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-btn flat variant="outlined" size="large" color="light-blue-lighten-2" block
                        class="rounding text-body-2 text-white third-party-btn" text="ثبت نام با گیت هاب">
                        <span :class="useCookie('theme').value == 'myLight'
                          ? 'text-black'
                          : 'text-white'
                          ">
                          ثبت نام با گیت هاب
                        </span>
                        <template v-slot:prepend>
                          <img src="/icons/github.svg" alt="" />
                        </template>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-tabs-window-item>
              </v-tabs-window>
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
import { useToast } from "vue-toastification";

definePageMeta({
  layout: "empty",
});


const toast = useToast();
const runtimeConfig = useRuntimeConfig();



let theme = ref(useCookie("theme"));

let tab = ref(null);
let visible = ref(false);
let visible2 = ref(false);
let visible3 = ref(false);
let loginType = ref("password");
let loginStep = ref(1);
let registerLoading = ref(false)
let loginLoading = ref(false)

let registerUser = ref({
  email: null,
  password: null,
  passwordRepeat: null,
  fullName: null
})

let loginUser = ref({
  email: null,
  password: null,
})

let errors = ref({
  register: {
    email: {
      text: null,
      status: false,
    },
    password: {
      text: null,
      status: false,
    },
    passwordRepeat: {
      text: null,
      status: false,
    },
    fullName: {
      text: null,
      status: false,
    },
  }
})

function login() {
  loginLoading.value = true;

  $fetch(`${runtimeConfig.public.apiUrl}/login`, {
    method: "POST",
    body: {
      name: loginUser.value.fullName,
      email: loginUser.value.email,
      password: loginUser.value.password,
      password_confirmation: loginUser.value.passwordRepeat,
    }
  }).then((response) => {
    console.log(response);
    loginLoading.value = false;

    useCookie('token').value = response.token;
    localStorage.token = response.token

    toast.success('خوش آمدید! در حال انتقال...')

    setTimeout(() => {
      navigateTo('/')
    }, 1000);

  }).catch((error) => {
    loginLoading.value = false;

    console.log(error.response);


    toast.error('خطا در ورود')

  })
}

function register() {
  registerLoading.value = true;

  errors.value.register = {
    email: {
      text: null,
      status: false,
    },
    password: {
      text: null,
      status: false,
    },
    passwordRepeat: {
      text: null,
      status: false,
    },
    fullName: {
      text: null,
      status: false,
    },
  }

  $fetch('https://backend.code-hub.site/api/register', {
    method: "POST",
    body: {
      name: registerUser.value.fullName,
      email: registerUser.value.email,
      password: registerUser.value.password,
      password_confirmation: registerUser.value.passwordRepeat,
    }
  }).then((response) => {
    console.log(response);
    registerLoading.value = false;

  }).catch((error) => {
    registerLoading.value = false;

    errors.value.register.email = {
      status: true,
      text: error.response._data.errors.email[0]
    };

    toast.error('خطا در ثبت نام')

  })
}

</script>

<style>
.eye {
  cursor: pointer;
}

/* .third-party-btn .v-btn__content {
  color: white;
} */

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
