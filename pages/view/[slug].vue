<template>
  <div>
    <AskAndAnswer class="mt-15" :showTitle="false" />
    <div class="mt-5 px-3">
      <v-card elevation="0" class="question-card">
        <div class="pa-md-10 pa-3 ">
          <div class="d-flex justify-space-between align-center">
            <div class="d-flex align-center">
              <div class="">
                <div class="d-flex align-center">
                  <div>
                    <v-avatar image="https://picsum.photos/250/300?image=114" size="65">
                    </v-avatar>
                  </div>
                  <div class="mr-4" style="width: 200px; word-break: break-all; white-space: normal">
                    <span class="font-weight-light" style="font-size: 1.4rem">
                      پریا سهیلی
                    </span>
                  </div>
                </div>
                <div>
                  <div class="d-sm-none mt-4 d-flex align-center">
                    <div>
                      <span class="font-weight-light text-body-1 text-medium-emphasis">2 ساعت پیش</span>
                    </div>
                    <div>
                      <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 mr-2 counter-btn" height="40"
                        text="160" prepend-icon="mdi-eye"></v-btn>

                      <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 mr-2 counter-btn" size="small"
                        height="40" icon="mdi-bookmark-multiple"></v-btn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-sm-flex d-none align-center">
              <div>
                <span class="font-weight-light text-body-1 text-medium-emphasis">2 ساعت پیش</span>
              </div>
              <div>
                <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 mr-2 counter-btn" height="40" text="160"
                  prepend-icon="mdi-eye"></v-btn>

                <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 mr-2 counter-btn" size="small" height="40"
                  icon="mdi-bookmark-multiple"></v-btn>
              </div>
            </div>
          </div>



          <div class="mt-5"><span class="font-weight-medium" style="font-size: 1.25rem">عنوان پرسش</span></div>
          <div class="mt-5">
            <p class="text-body-1">
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
            <div class="chip ml-3 px-3 py-2 border rounded-pill">#طراحی_وب</div>
            <div class="chip ml-3 px-3 py-2 border rounded-pill">#فرانت_اند</div>
          </div>
          <div class="mt-8 d-flex justify-space-between  align-center">
            <div class="d-block d-sm-none"></div>
            <div class="d-flex align-center">
              <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 counter-btn  " height="40" text="4"
                prepend-icon="mdi-forum"></v-btn>

            </div>
            <div class="d-none d-sm-block">
              <v-btn text="پاسخ" class="reply-btn" size="x-large" variant="outlined" append-icon="mdi-reply"
                color="light-blue-lighten-2"></v-btn>
            </div>

          </div>
          <v-btn text="پاسخ" class="reply-btn mt-8 d-flex d-sm-none" block size="x-large" variant="outlined"
            append-icon="mdi-reply" color="light-blue-lighten-2"></v-btn>
        </div>
      </v-card>
    </div>
    <div class="mt-10 px-3 text-left">
      <v-menu location="bottom" transition="slide-y-transition">
        <template v-slot:activator="{ props }">

          <v-btn v-bind="props" text="مرتب سازی پرسش ها" class="font-weight-light sorting" size="x-large"
            prepend-icon="mdi-sort-variant" append-icon="mdi-menu-down" variant="flat"></v-btn>

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

    <div>
      <v-row class="ma-0 mt-5">
        <v-col cols="12" lg="3" class="d-none d-lg-block">
          <v-sheet class="px-4 py-6 sidebar">
            <v-btn block size="x-large" color="light-blue-lighten-2 categories-btn" append-icon="mdi-plus-box"
              class="font-weight-light" text="ثبت پرسش"></v-btn>
            <div class="mt-8">
              <span class="text-h6">دسته بندی پرسش ها</span>
            </div>
            <div>
              <v-list lines="one">
                <v-list-item title="وردپرس"></v-list-item>
                <v-list-item title="بوت استرپ"></v-list-item>
                <v-list-item title="لاراول"></v-list-item>
                <v-list-item title="ری اکت"></v-list-item>
                <v-list-item title="جنگو"></v-list-item>
                <v-list-item title="HTML"></v-list-item>
                <v-list-item title="ویو"></v-list-item>
              </v-list>
            </div>
            <v-btn text="موارد بیشتر" variant="plain" style="opacity: 1;" :ripple="false" color="light-blue-lighten-2"
              append-icon="mdi-menu-down"></v-btn>
          </v-sheet>
        </v-col>

        <v-col cols="12" lg="9">
          <v-card v-for="q in 5" :key="q" elevation="0" class=" question-card">
            <div v-if="q % 2 == 0" class="reply-bg px-md-10 px-3 py-5">
              <div class="right-border pr-3">
                <div class="text-body-1 font-weight-medium d-flex align-center">
                  <div class="ml-3">یوزر ۱</div>
                  <div dir="ltr" class=" text-light-blue-lighten-2">@user1</div>
                </div>
                <div class="text-body-2 mt-3 rep-ans">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
                  و
                  متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                </div>
              </div>
            </div>
            <div class="px-md-10 py-md-7 pa-3 ">
              <div class="d-flex justify-space-between align-center">
                <div class="d-flex align-center">
                  <div class="">
                    <div class="d-flex align-center">
                      <div>
                        <v-avatar image="https://picsum.photos/250/300?image=114" size="65">
                        </v-avatar>
                      </div>
                      <div class="mr-4" style="width: 200px; word-break: break-all; white-space: normal">
                        <span class="font-weight-light" style="font-size: 1.4rem">
                          پریا سهیلی
                        </span>
                      </div>
                    </div>
                    <div>
                      <div class="d-sm-none mt-4 d-flex align-center">
                        <div>
                          <span class="font-weight-light text-body-1 text-medium-emphasis">2 ساعت پیش</span>
                        </div>
                        <div>
                          <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 mr-2 counter-btn" size="small"
                            height="40" icon="mdi-card-multiple"></v-btn>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-sm-flex d-none align-center">
                  <div>
                    <span class="font-weight-light text-body-1 text-medium-emphasis">2 ساعت پیش</span>
                  </div>
                  <div>
                    <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 mr-2 counter-btn" size="small"
                      height="40" icon="mdi-card-multiple"></v-btn>
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <p class="text-body-1">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                  طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                  که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                  بهبود ابزارهای کاربردی می باشدلورم ایپسوم متن ساختگی با تولید سادگی
                  نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                  روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                  مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                </p>
              </div>

              <div class="mt-8 d-flex justify-space-between  align-center">
                <div class="d-block d-sm-none"></div>
                <div class="d-flex align-center">
                  <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 counter-btn" height="40"
                    text="1 پاسخ"></v-btn>

                  <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 mr-2 counter-btn" height="40" text="3"
                    prepend-icon="mdi-heart-outline"></v-btn>


                </div>
                <div class="d-none d-sm-block">
                  <v-btn text="پاسخ" class="reply-btn" size="x-large" variant="outlined" append-icon="mdi-reply"
                    color="light-blue-lighten-2"></v-btn>
                </div>

              </div>
              <v-btn text="پاسخ" class="reply-btn mt-8 d-flex d-sm-none" block size="x-large" variant="outlined"
                append-icon="mdi-reply" color="light-blue-lighten-2"></v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import AskAndAnswer from '~/components/AskAndAnswer.vue';
</script>

<style>
.reply-bg {
  background: #242b37;
}

.sorting {
  border-radius: var(--border-radius-md) !important;
}

.right-border {
  border-right: 3px solid #ddd;
}

.rep-ans {
  height: 25px;
  line-height: 1.6rem;
  text-align: justify;
  overflow: hidden;
  word-break: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;
}
</style>