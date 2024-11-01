<template>
  <div>
    <div class=" editprofile-holder">
      <v-sheet class="mt-5 rounding pa-0 py-3 pa-lg-8">
        <v-row class="ma-0">
          <v-col cols="12" lg="6">
            <label for="" class="text-h6">نام و نام خانوادگی (به فارسی)</label>
            <v-text-field placeholder="نام و نام خانوادگی" flat hide-details class="rounding mt-2"
              variant="outlined"></v-text-field>
          </v-col>
          <v-col cols="12" lg="6">
            <label for="" class="text-h6">ایمیل</label>
            <v-text-field placeholder="Email Address" flat hide-details class="rounding mt-2" dir="ltr"
              variant="outlined"></v-text-field>
          </v-col>
          <v-col cols="12" lg="6">
            <label for="" class="text-h6">نام کاربری</label>
            <v-text-field placeholder="Username" flat hide-details class="rounding mt-2" dir="ltr"
              variant="outlined"></v-text-field>
          </v-col>
          <v-col cols="12" class="text-left">
            <v-btn @click="changePass()" block class="rounding mt-5 d-flex d-lg-none" height="56" size="x-large"
              density="comfortable" text="تغییر رمز عبور" flat variant="outlined" color="light-blue-lighten-2">
              <template v-slot:prepend>
                <img src="/public/icons/key.svg" alt="">
              </template>
            </v-btn>

            <v-btn @click="changePass()" class="d-none d-lg-flex rounding mr-auto" size="x-large" density="comfortable"
              text="تغییر رمز عبور" flat variant="outlined" color="light-blue-lighten-2">
              <template v-slot:prepend>
                <img src="/public/icons/key.svg" alt="">
              </template>
            </v-btn>
          </v-col>
        </v-row>
      </v-sheet>

      <div class="mt-15">
        <h5 class="text-h5 font-weight-bold">اطلاعات شخصی</h5>
      </div>
      <v-sheet class="mt-5 pa-0 pa-lg-5 py-3  rounding">
        <v-row class="ma-0">
          <v-col cols="12" lg="6">
            <label for="" class="text-h6">تاریخ تولد</label>
            <div class="drop-gp  mt-2 d-flex rounding justify-space-between align-center">
              <div style="width: 30%;">
                <v-select label="روز" flat height="56" :items="days" variant="solo" hide-details></v-select>
              </div>
              <v-divider vertical></v-divider>
              <div style="width: 39%;">
                <v-select class="pl-0" label="ماه" flat height="56" :items="months" variant="solo"
                  hide-details></v-select>
              </div>
              <v-divider vertical></v-divider>
              <div style="width: 30%;">
                <v-select label="سال" flat height="56" :items="years" variant="solo" hide-details></v-select>
              </div>
            </div>
          </v-col>
          <v-col cols="12" lg="6">
            <label for="" class="text-h6">حرفه یا شغل</label>
            <v-text-field placeholder="" flat hide-details class="rounding mt-2" variant="outlined"></v-text-field>
          </v-col>
          <v-col cols="12">
            <label for="" class="text-h6">درباره من</label>
            <v-textarea variant="outlined" class="mt-2"></v-textarea>
          </v-col>
        </v-row>
      </v-sheet>

      <div class="mt-15">
        <h5 class="text-h5 font-weight-bold">اطلاعات تماس</h5>
      </div>
      <v-sheet class="mt-5 pa-0 pa-lg-5 py-3  rounding">
        <v-row class="ma-0">
          <v-col cols="12" lg="6">
            <label for="" class="text-h6">شماره موبایل</label>
            <v-text-field type="number" placeholder="" dir="ltr" flat hide-details class="rounding mt-2"
              variant="outlined">
              <template v-slot:append-inner>
                <div class="d-flex align-center pl-2" style="width: 80px;">
                  <span class="ml-2 text-disabled" dir="ltr">+98 - </span>
                  <img src="/public/icons/flag.svg" alt="">
                </div>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="6"></v-col>
          <v-col cols="12" lg="6">
            <label for="" class="text-h6">آدرس وب سایت</label>
            <v-text-field placeholder="" dir="ltr" flat hide-details class="rounding mt-2" variant="outlined">
              <template v-slot:append-inner></template>
              <template v-slot:prepend-inner>
                <img src="/public/icons/link-square.svg" alt="">
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="6">
            <label for="" class="text-h6">آدرس لینکدین</label>
            <v-text-field placeholder="" dir="ltr" flat hide-details class="rounding mt-2" variant="outlined">
              <template v-slot:append-inner></template>
              <template v-slot:prepend-inner>
                <img src="/public/icons/link-square.svg" alt="">
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="12" lg="6">
            <label for="" class="text-h6">آدرس تلگرام</label>
            <v-text-field placeholder="" dir="ltr" flat hide-details class="rounding mt-2" variant="outlined">
              <template v-slot:append-inner></template>
              <template v-slot:prepend-inner>
                <img src="/public/icons/link-square.svg" alt="">
              </template>
            </v-text-field>
          </v-col>

        </v-row>
      </v-sheet>
    </div>
    <div class="mt-5 text-left pa-3">
      <v-btn size="x-large" text="انصراف" @click="cancelEditing()" variant="outlined" flat
        color="light-blue-lighten-2 font-weight-light rounding"></v-btn>
      <v-btn size="x-large" text="ذخیره اطلاعات" variant="flat" flat
        color="light-blue-lighten-2 font-weight-light rounding  mr-2"></v-btn>
    </div>
  </div>
</template>

<script setup>

const p2e = s => s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))

let years = ref([]);

let x = new Intl.DateTimeFormat("fa-IR", {
  year: "numeric",
}).format(new Date());



for (let i = p2e(x) - 10; i >= 1340; i--) {
  years.value.push(i);
}

let months = ref([
  'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند',
]);

let days = ref([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
])
const emit = defineEmits(['cancelEdit', 'changePasswordEvent']);

function changePass() {
  emit('changePasswordEvent')
}

function cancelEditing() {
  emit('cancelEdit')
}
</script>

<style>
.editprofile-holder .v-field--appended {
  padding-inline-end: 5px;
}
</style>