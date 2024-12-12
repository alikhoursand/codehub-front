<template>
  <div class="mt-5">
    <v-row class="ma-0 justify-end">
      <v-col cols="12" lg="3" class="pt-0 order-lg-1 order-2 d-none d-lg-block">
        <v-sheet :class="[useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border', 'py-3 rounding']">
          <v-list lines="two">
            <v-list-item>
              <template v-slot:prepend>
                <img src="/icons/user-square.svg" width="27" height="27" alt="">
              </template>
              <span class="mr-2 text-h6">صفحه پروفایل</span>
              <template v-slot:append>
                <div class="dot"></div>
              </template>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <img src="/icons/message-question.svg" width="27" height="27" alt="">
              </template>
              <span class="mr-2 text-h6">پرسش ها</span>
              <template v-slot:append>
                <div class="dot"></div>
              </template>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <img src="/icons/profile-2user.svg" width="27" height="27" alt="">
              </template>
              <span class="mr-2 text-h6">دنبال شده ها</span>
              <template v-slot:append>
                <div class="dot"></div>
              </template>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <img src="/icons/notification.svg" width="27" height="27" alt="">
              </template>
              <span class="mr-2 text-h6">اعلانات</span>
              <template v-slot:append>
                <div class="dot"></div>
              </template>
            </v-list-item>
            <v-list-item @click="logout()">
              <template v-slot:prepend>
                <img src="/icons/logout.svg" width="27" height="27" alt="">
              </template>
              <span class="mr-2 text-h6">خروج از حساب کاربری</span>
              <template v-slot:append>
                <div class="dot"></div>
              </template>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>
      <v-col cols="12" lg="9" class="pt-0 order-lg-2 order-1 ">
        <v-sheet class="rounding pa-3" flat>
          <v-sheet
            :class="[useCookie('theme').value == 'myLight' ? 'has-shadow' : 'no-shadow light-bg', ' bg-holder rounding']"
            height="250" flat>
            <img src="/icons/gallery-add.svg" class="add-img-icon" width="27" height="27" alt="">
            <!-- <v-icon icon="mdi-image-plus" size="x-large" class="add-img-icon" color="light-blue-lighten-2"></v-icon> -->


            <div class="editprofile-av-img">
              <!-- <v-img :eager="true" rounded="circle" class="mx-auto editprofile-avatar" cover
                src="https://picsum.photos/250/300?image=100" :aspect-ratio="1 / 1" width="180"></v-img> -->
              <div
                :class="[useCookie('theme').value == 'myLight' ? 'has-shadow bg-white' : 'no-shadow light-bg', 'editprofile-avatar d-flex justify-center align-center  alter']"
                :style="useCookie('theme').value == 'myLight' ? 'border: 12px solid rgba(255,255,255,0);' : 'border: 12px solid #14161a;'">
                <!-- <v-icon icon="mdi-image-plus" size="x-large" color="light-blue-lighten-2"></v-icon> -->
                <img src="/icons/gallery-add.svg" width="27" height="27" alt="">
              </div>
            </div>


          </v-sheet>
        </v-sheet>

        <div class="pt-15 mt-15">
          <v-btn @click="menuSheet = true" text="منوی پنل کاربری" prepend-icon="mdi-menu"
            class=" d-flex d-lg-none rounding " color="light-blue-lighten-2" flat size="large"></v-btn>
        </div>

        <Transition mode="out-in" name="fade">
          <editProfile v-if="editing" @cancelEdit="cancelEdit" @changePasswordEvent="changePassFunc" />
          <editPassword v-else-if="changePass" @cancelEdit="cancelEdit" />
          <profileInfo v-else="main" @editProfile="showEditProfile" @changePasswordEvent="changePassFunc" />
        </Transition>

      </v-col>
    </v-row>

    <v-bottom-sheet v-model="menuSheet">
      <v-sheet class="py-3">
        <v-list lines="two">
          <v-list-item>
            <template v-slot:prepend>
              <img src="/icons/user-square.svg" width="27" height="27" alt="">
            </template>
            <span class="mr-2 text-h6">صفحه پروفایل</span>
            <template v-slot:append>
              <div class="dot"></div>
            </template>
          </v-list-item>
          <v-list-item>
            <template v-slot:prepend>
              <img src="/icons/message-question.svg" width="27" height="27" alt="">
            </template>
            <span class="mr-2 text-h6">پرسش ها</span>
            <template v-slot:append>
              <div class="dot"></div>
            </template>
          </v-list-item>
          <v-list-item>
            <template v-slot:prepend>
              <img src="/icons/profile-2user.svg" width="27" height="27" alt="">
            </template>
            <span class="mr-2 text-h6">دنبال شده ها</span>
            <template v-slot:append>
              <div class="dot"></div>
            </template>
          </v-list-item>
          <v-list-item>
            <template v-slot:prepend>
              <img src="/icons/notification.svg" width="27" height="27" alt="">
            </template>
            <span class="mr-2 text-h6">اعلانات</span>
            <template v-slot:append>
              <div class="dot"></div>
            </template>
          </v-list-item>
          <v-list-item>
            <template v-slot:prepend>
              <img src="/icons/logout.svg" width="27" height="27" alt="">
            </template>
            <span class="mr-2 text-h6">خروج از حساب کاربری</span>
            <template v-slot:append>
              <div class="dot"></div>
            </template>
          </v-list-item>
        </v-list>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script setup>
import editProfile from '~/components/profile/editProfile.vue';
import profileInfo from '~/components/profile/profileInfo.vue';
import editPassword from '~/components/profile/editPassword.vue';
import { useToast } from "vue-toastification";

const toast = useToast();
const Route = useRoute()

let menuSheet = ref(false)
let editing = ref(false)
let changePass = ref(false)
let main = ref(false)

if (Route.query.page == 'edit') {
  editing.value = true
  changePass.value = false
  main.value = false
} else if (Route.query.page == 'change-password') {
  editing.value = false
  changePass.value = true
  main.value = false

} else {
  main.value = true
}


function changePassFunc() {

  editing.value = false
  changePass.value = true
  main.value = false

  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function cancelEdit() {
  editing.value = false
  changePass.value = false
  main.value = true

  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function showEditProfile() {
  editing.value = true
  changePass.value = false
  main.value = false

  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function logout() {
  localStorage.removeItem("token");
  useCookie("token").value = undefined;

  toast.success("خارج شدید");

  navigateTo("/");
}

</script>

<style>
.drop-gp {
  border: 1px solid rgb(133, 133, 133);
}


.editprofile-holder .v-field {
  border-radius: var(--border-radius-md) !important;
}

.bg-holder {
  position: relative;
}

.dot {
  background: #9E9E9E;
  border-radius: 50%;
  height: 10px;
  width: 10px;
}

.dot.active {
  background: #4FC3F7;
}

.text-h6 {
  letter-spacing: 0 !important;
}

.add-img-icon {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}





/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>