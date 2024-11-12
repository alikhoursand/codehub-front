<template>
  <div>
    <AskAndAnswer class="mt-15" :showTitle="false" />

    <div class="mt-15 pr-3">
      <span class="text-h4 ">وردپرس</span>
    </div>
    <div>
      <v-row class="ma-0 mt-10 align-center">
        <v-col cols="12" md="6" class="search">
          <v-text-field hide-details clearable
            :class="[useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border', 'rounding search-bar']"
            label="جستجو در پرسش ها" variant="solo" flat v-model="searchQuery">
            <template v-slot:prepend-inner>
              <img src="/icons/search-normal-1.svg"></img>
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="12" md="6" class="text-left buttons">
          <div class="d-none d-md-block">
            <v-menu location="bottom" transition="slide-y-transition">
              <template v-slot:activator="{ props }">

                <v-btn v-bind="props" text="مرتب سازی پرسش ها"
                  :class="[useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border', 'sorting rounding']"
                  size="x-large" variant="flat">

                  <template v-slot:prepend>
                    <img src="/icons/sort-blue.svg" alt="" />
                  </template>
                  <template v-slot:append>
                    <img src="/icons/arrow-down-blue.svg" alt="" />
                  </template>

                </v-btn>

              </template>

              <v-list class="drop-list">
                <v-list-item @click="x()">
                  <v-list-item-title>هفته گذشته</v-list-item-title>
                </v-list-item>
                <v-list-item @click="x()">
                  <v-list-item-title>جدید ترین</v-list-item-title>
                </v-list-item>
                <v-list-item @click="x()">
                  <v-list-item-title>محبوب ترین ها</v-list-item-title>
                </v-list-item>
                <v-list-item @click="x()">
                  <v-list-item-title>قدیمی ترین</v-list-item-title>
                </v-list-item>
                <v-list-item @click="x()">
                  <v-list-item-title>ماه گذشته</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-btn size="x-large" flat color="light-blue-lighten-2 mr-2" class=" rounding" text="ثبت پرسش">
              <template v-slot:append>
                <img src="/public/icons/add-square.svg" width="20" height="20" alt="" />
              </template>
            </v-btn>

          </div>

          <div class="d-block d-md-none">

            <v-btn block size="x-large" flat color="light-blue-lighten-2" class=" rounding" text="ثبت پرسش">
              <template v-slot:append>
                <img src="/public/icons/add-square.svg" width="20" height="20" alt="" />
              </template>
            </v-btn>


            <v-menu location="bottom" transition="slide-y-transition">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" block text="مرتب سازی پرسش ها"
                  :class="[useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border', 'rounding sorting  mt-3']"
                  size="x-large" variant="flat">


                  <template v-slot:prepend>
                    <img src="/icons/sort-blue.svg" alt="" />
                  </template>
                  <template v-slot:append>
                    <img src="/icons/arrow-down-blue.svg" alt="" />
                  </template>

                </v-btn>
              </template>

              <v-list class="drop-list">
                <v-list-item @click="x()">
                  <v-list-item-title>هفته گذشته</v-list-item-title>
                </v-list-item>
                <v-list-item @click="x()">
                  <v-list-item-title>جدید ترین</v-list-item-title>
                </v-list-item>
                <v-list-item @click="x()">
                  <v-list-item-title>محبوب ترین ها</v-list-item-title>
                </v-list-item>
                <v-list-item @click="x()">
                  <v-list-item-title>قدیمی ترین</v-list-item-title>
                </v-list-item>
                <v-list-item @click="x()">
                  <v-list-item-title>ماه گذشته</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

          </div>


        </v-col>

      </v-row>
    </div>
    <div class="mt-5 px-3 d-block d-lg-none">
      <v-btn color="light-blue-lighten-2" size="large" text="دسته بندی پرسش ها" class=" categories-btn" variant="flat"
        @click="showCategories()" flat></v-btn>
    </div>
    <div>
      <v-row class="ma-0 mt-5">
        <v-col cols="12" lg="3" class="d-none d-lg-block">
          <v-sheet :class="[useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border', 'px-4 py-6 sidebar']">
            <v-btn block flat size="x-large" color="light-blue-lighten-2 categories-btn" class="" text="ثبت پرسش">
              <template v-slot:append>
                <img src="/public/icons/add-square.svg" width="20" height="20" alt="" />
              </template>
            </v-btn>
            <div class="mt-8">
              <span class="text-high-emphasis" style="font-size: 18px;">دسته بندی پرسش ها</span>
            </div>
            <div class="text-medium-emphasis">
              <v-list lines="one">
                <v-list-item title="وردپرس" class="text-medium-emphasis"></v-list-item>
                <v-list-item title="بوت استرپ" class="text-medium-emphasis"></v-list-item>
                <v-list-item title="لاراول" class="text-medium-emphasis"></v-list-item>
                <v-list-item title="ری اکت" class="text-medium-emphasis"></v-list-item>
                <v-list-item title="جنگو" class="text-medium-emphasis"></v-list-item>
                <v-list-item title="HTML" class="text-medium-emphasis"></v-list-item>
                <v-list-item title="ویو" class="text-medium-emphasis"></v-list-item>
              </v-list>
            </div>
            <v-btn text="موارد بیشتر" variant="plain" style="opacity: 1;" :ripple="false" color="light-blue-lighten-2">
              <template v-slot:append>
                <img src="/icons/arrow-down-blue.svg" height="12" width="12" alt="">
              </template>
            </v-btn>
          </v-sheet>
        </v-col>
        <v-col cols="12" lg="9">
          <v-card v-for="q in 5" :key="q" href="/question/test" flat
            :class="[useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border', 'question-card']">

            <div class="pa-md-10 pa-3">

              <div class="d-flex justify-space-between align-center">
                <div class="d-flex align-center">
                  <div class="">
                    <div class="d-flex align-center">
                      <div>
                        <v-avatar image="https://picsum.photos/250/300?image=114" size="65">
                        </v-avatar>
                      </div>
                      <div class="mr-4" style="width: 200px; word-break: break-all; white-space: normal">
                        <span class="font-weight-medium" style="font-size: 1.4rem">
                          پریا سهیلی
                        </span>
                      </div>
                    </div>
                    <div>
                      <div class="d-sm-none mt-4 d-flex align-center">
                        <div>
                          <span class=" text-body-2 text-medium-emphasis">2 ساعت پیش</span>
                        </div>
                        <div>
                          <v-btn flat :color="useCookie('theme').value == 'myDark' ? '#1e2124' : '#F9FBFC'"
                            :class="[useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border', 'text-light-blue-lighten-2 mr-2 counter-btn']"
                            height="40" text="160">
                            <template v-slot:prepend>
                              <img src="/icons/eye.svg" alt="" />
                            </template>
                          </v-btn>

                          <v-btn flat :color="useCookie('theme').value == 'myDark' ? '#1e2124' : '#F9FBFC'"
                            :class="[useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border', 'text-light-blue-lighten-2 mr-2 counter-btn']"
                            size="small" height="40">
                            <img src="/icons/save-2.svg" alt="" />
                          </v-btn>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-sm-flex d-none align-center">
                  <div>
                    <span class=" text-body-2 text-medium-emphasis">2 ساعت پیش</span>
                  </div>
                  <div>
                    <v-btn flat :color="useCookie('theme').value == 'myDark' ? '#1e2124' : '#F9FBFC'"
                      :class="[useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border', 'text-light-blue-lighten-2 mr-2 counter-btn']"
                      height="40" text="160">
                      <template v-slot:prepend>
                        <img src="/icons/eye.svg" alt="" />
                      </template>
                    </v-btn>

                    <v-btn flat :color="useCookie('theme').value == 'myDark' ? '#1e2124' : '#F9FBFC'"
                      :class="[useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border', 'text-light-blue-lighten-2 mr-2 counter-btn']"
                      size="small" height="40">
                      <img src="/icons/save-2.svg" alt="" />
                    </v-btn>
                  </div>
                </div>
              </div>
              <div class="mt-5"><span class="font-weight-medium" style="font-size: 1.25rem">عنوان پرسش</span></div>
              <div class="mt-5">
                <p class="text-body-1 parag">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                  طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                  که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                  بهبود ابزارهای کاربردی می باشدلورم ایپسوم متن ساختگی با تولید سادگی
                  نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                  روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                  مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                </p>
              </div>
              <div class="mt-5">
                <div class="chip text-body-2 ml-3 px-3 py-2 border rounded-pill">#طراحی_وب</div>
                <div class="chip text-body-2 ml-3 px-3 py-2 border rounded-pill">#فرانت_اند</div>
              </div>
              <div class="mt-8 d-flex justify-space-between  align-center">
                <div class="d-block d-sm-none"></div>
                <div class="d-flex align-center">
                  <v-btn flat :color="useCookie('theme').value == 'myDark' ? '#1e2124' : '#F9FBFC'"
                    :class="[useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border', 'text-light-blue-lighten-2 counter-btn']"
                    height="40" text="4">
                    <template v-slot:prepend>
                      <img src="/icons/messages-2.svg" alt="" />
                    </template>
                  </v-btn>

                  <div class="d-flex align-center">
                    <v-img class="av-img" rounded="circle" height="40" cover width="40"
                      src="https://picsum.photos/250/300?image=100"></v-img>
                    <v-img class="av-img" rounded="circle" height="40" cover width="40"
                      src="https://picsum.photos/250/300?image=102"></v-img>
                    <v-img class="av-img" rounded="circle" height="40" cover width="40"
                      src="https://picsum.photos/250/300?image=104"></v-img>
                  </div>
                </div>
                <div class="d-none d-sm-block">
                  <v-btn text="پاسخ" color="light-blue-lighten-2"
                    :class="[useCookie('theme').value == 'myLight' ? 'tonal-bg' : '', 'reply-btn text-h6']" size="large"
                    variant="outlined">
                    <template v-slot:append>
                      <img
                        :src="useCookie('theme').value == 'myDark' ? '/icons/reply-fill.svg' : '/icons/reply-outline.svg'"
                        width="24" height="24" alt="">
                    </template>
                  </v-btn>
                </div>

              </div>
              <v-btn text="پاسخ" color="light-blue-lighten-2"
                :class="[useCookie('theme').value == 'myLight' ? 'tonal-bg' : '', 'reply-btn text-h6 mt-8 d-flex d-sm-none']"
                block size="x-large" variant="outlined">
                <template v-slot:append>
                  <img
                    :src="useCookie('theme').value == 'myDark' ? '/icons/reply-fill.svg' : '/icons/reply-outline.svg'"
                    width="24" height="24" alt="">
                </template>
              </v-btn>

            </div>


          </v-card>
        </v-col>
      </v-row>
    </div>
    <v-bottom-sheet v-model="categoriesSheet">
      <v-card flat class="">
        <div class="d-flex justify-space-between py-5 px-3 align-center">
          <span class="text-h6">دسته بندی پرسش ها</span>
          <v-icon @click="categoriesSheet = false" icon="mdi-close" size="large" color="error"></v-icon>
        </div>
        <v-divider class="mx-3" color="light-blue-lighten-2"></v-divider>
        <v-list lines="one">
          <v-list-item title="وردپرس"></v-list-item>
          <v-list-item title="بوت استرپ"></v-list-item>
          <v-list-item title="لاراول"></v-list-item>
          <v-list-item title="ری اکت"></v-list-item>
          <v-list-item title="جنگو"></v-list-item>
          <v-list-item title="HTML"></v-list-item>
          <v-list-item title="ویو"></v-list-item>
        </v-list>
      </v-card>
    </v-bottom-sheet>
  </div>
</template>

<script setup>
import AskAndAnswer from '~/components/AskAndAnswer.vue';

let searchQuery = ref(null)
let categoriesSheet = ref(false)

function x() {
  console.log('x');
}

function showCategories() {
  categoriesSheet.value = true;
}
</script>

<style>
.parag {
  letter-spacing: 0 !important;
  height: 98px;
  line-height: 1.6rem;
  text-align: justify;
  overflow: hidden;
  word-break: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  line-clamp: 4;
}

.av-img:nth-child(1) {
  position: relative;
  left: -30px;
  z-index: 5;
}

.av-img:nth-child(2) {
  position: relative;
  left: -15px;
  z-index: 4;
}

.sidebar {
  border-radius: var(--border-radius-md) !important;
}

.question-card {
  border-radius: var(--border-radius-md) !important;
}

.question-card:nth-child(n+2) {
  margin-top: 1rem;
}

.sidebar .v-btn {
  border-radius: var(--border-radius-md) !important;
}


.search .v-field {
  border-radius: var(--border-radius-md) !important;

}

.search .v-field--variant-solo-filled {
  background-color: #14161a !important;
  opacity: 1 !important;
}

/* .search .v-field--variant-solo.v-theme--myLight {
 background-color: #FCFCFC; 
  }
*/

.search .v-field--variant-solo.v-theme--myDark {
  background-color: #14161a;

}
</style>
