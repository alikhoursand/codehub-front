<template>
  <v-responsive>
    <v-app>
      <v-main>
        <div class="d-flex justify-center h-100 align-center">
          <v-sheet
            class="pa-5 py-7 shadow-base"
            rounded="lg"
            flat
            max-width="500"
            width="500"
          >
            <h4 class="text-h4 text-center font-weight-bold text-orange">کدهاب</h4>

            <div class="d-flex justify-center align-center mt-10">
              <span>ورود</span>
              <v-divider
                :thickness="1"
                class="border-opacity-50 mx-2"
                vertical
              ></v-divider>
              <span>ثبت نام</span>
            </div>
            <div class="mt-5">
              <v-window v-model="stepper" reverse class="text-center">
                <v-window-item :value="0" class="pt-3">
                  <v-text-field
                    rounded="lg"
                    dir="ltr"
                    label="شماره موبایل"
                    variant="outlined"
                    @keypress.enter="sendCode()"
                    ref="loginPhone"
                    append-inner-icon="mdi-phone"
                    hide-details
                    v-model="phone"
                  ></v-text-field>

                  <v-btn
                    color="orange"
                    class="mt-5 text-white"
                    text="ارسال کد"
                    block
                    rounded="lg"
                    size="x-large"
                    :disabled="disableSendCode"
                    :loading="sendCodeLoading"
                    @click="sendCode()"
                    flat
                  ></v-btn>
                </v-window-item>
                <v-window-item :value="1" class="pt-3">
                  <v-otp-input
                    v-model="otp"
                    :length="5"
                    variant="underlined"
                    dir="ltr"
                    :loading="loginLoading"
                    :error="otpInputError"
                    class="elevation-0"
                  ></v-otp-input>
                  <div>
                    <v-btn
                      size="small"
                      variant="text"
                      @click="resendCode()"
                      flat
                      append-icon="mdi-chevron-left"
                      >تغییر شماره موبایل</v-btn
                    >
                  </div>
                  <v-btn
                    size="small"
                    :color="countDown == null ? '' : 'error'"
                    class="my-3"
                    flat
                    variant="text"
                    @click="resendCode()"
                    :ripple="false"
                  >
                    <div v-if="countDown == null">
                      <span>پیامک دریافت نشد؟ </span>&nbsp;
                      <span class="text-orange">ارسال دوباره</span>
                    </div>
                    <div v-else>
                      <span>{{ countDown }}</span
                      >&nbsp;
                      <span>دریافت مجدد کد تایید</span>
                    </div>
                  </v-btn>
                  <v-btn
                    color="orange"
                    class="mt-0 text-white"
                    text="ورود"
                    block
                    rounded="lg"
                    size="x-large"
                    :disabled="disableLogin"
                    :loading="loginLoading"
                    @click=""
                    flat
                  ></v-btn>
                </v-window-item>
              </v-window>
              <div class="mt-5 text-body-2 text-center">
                با ورود به سایت کلیه قوانین را میپذیرم.
              </div>
            </div>
          </v-sheet>
        </div>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script>
import { useToast } from "vue-toastification";

export default {
  setup() {
    definePageMeta({
      layout: "empty",
    });
    useHead({
      title: "ورود | ثبت نام",
    });

    const uStore = userStore();
    const runtimeConfig = useRuntimeConfig();
    const toast = useToast();
    return { toast, runtimeConfig, uStore };
  },
  watch: {},
  data() {
    return {
      disableSendCode: false,
      successDialog: false,
      disableLogin: true,
      sendCodeLoading: false,
      loginLoading: false,
      page: "login",
      errorText: "",
      formErrors: false,
      phone: null,
      otp: null,
      stepper: 0,
      otpInputError: false,
      countDown: "02:00",
      timer: 0,
      nextStep: "login",
    };
  },
  methods: {},
};
</script>

<style>
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
