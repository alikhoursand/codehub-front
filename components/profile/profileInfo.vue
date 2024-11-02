<template>
  <div>
    <div class=" editprofile-holder">
      <v-sheet class="mt-5 rounding pa-0 py-3 pa-lg-8">
        <v-row class="ma-0">
          <v-col cols="12" lg="6" class=" text-white">
            <span>نام و نام خانوادگی: </span>
            <span>کاربر تستی</span>
          </v-col>
          <v-col cols="12" lg="6" class=" text-white">
            <span>نام کاربری: </span>
            <span>کاربر تستی</span>
          </v-col>
          <v-col cols="12" lg="6" class=" text-white">
            <span>ایمیل: </span>
            <span>test_user@test.com</span>
          </v-col>
          <v-col cols="12" class="text-left">
            <v-btn block class="rounding mt-5 d-flex d-lg-none" height="56" size="x-large" density="comfortable"
              text="تغییر رمز عبور" flat variant="outlined" color="light-blue-lighten-2">
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
          <v-col cols="12" lg="6" class=" text-white">
            <span>تاریخ تولد: </span>
            <span>1376/02/02</span>
          </v-col>
          <v-col cols="12" lg="6" class=" text-white">
            <span>حرفه یا شغل: </span>
            <span>کاربر تستی</span>
          </v-col>

          <v-col cols="12" class=" text-white">
            <span>درباره من: </span>
            <div>
              -
            </div>
          </v-col>
        </v-row>
      </v-sheet>

      <div class="mt-15">
        <h5 class="text-h5 font-weight-bold">اطلاعات تماس</h5>
      </div>
      <v-sheet class="mt-5 pa-0 pa-lg-5 py-3  rounding">
        <v-row class="ma-0">
          <v-col cols="12" lg="6" class=" text-white">
            <span>شماره موبایل: </span>
            <span>09123456789</span>
          </v-col>
          <v-col cols="12" lg="6" class=" text-white">
            <span>آدرس وبسایت: </span>
            <span>test.com</span>
          </v-col>
          <v-col cols="12" lg="6" class=" text-white">
            <span>آدرس لینکدین: </span>
            <span>www.linkedin.com</span>
          </v-col>
          <v-col cols="12" lg="6" class=" text-white">
            <span>آدرس تلکرام: </span>
            <span>09123456789</span>
          </v-col>

        </v-row>
      </v-sheet>
    </div>
    <div class="mt-5 text-left">

      <v-btn @click="editProfile()" size="x-large" text="ویرایش پروفایل" variant="flat" flat
        color="light-blue-lighten-2  rounding  mr-2">
        <template v-slot:prepend>
          <img src="/icons/edit-2.svg" alt="">
        </template>
      </v-btn>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['editProfile', 'changePasswordEvent']);


function changePass() {
  emit('changePasswordEvent')
}


function editProfile() {
  emit('editProfile')

}
</script>

<style></style>