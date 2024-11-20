<template>
  <div>
    <AskAndAnswer class="mt-15" :showTitle="false" />
    <div class="mt-5 px-3">
      <v-card
        flat
        :class="[
          useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border',
          'question-card',
        ]"
      >
        <div class="pa-md-10 pa-3">
          <div class="d-flex justify-space-between align-center">
            <div class="d-flex align-center">
              <div class="">
                <div class="d-flex align-center">
                  <div>
                    <v-avatar image="https://picsum.photos/250/300?image=114" size="65">
                    </v-avatar>
                  </div>
                  <div
                    class="mr-4"
                    style="width: 200px; word-break: break-all; white-space: normal"
                  >
                    <span class="" style="font-size: 1.4rem"> پریا سهیلی </span>
                  </div>
                </div>
                <div>
                  <div class="d-sm-none mt-4 d-flex align-center">
                    <div>
                      <span class="text-body-2 text-medium-emphasis">2 ساعت پیش</span>
                    </div>
                    <div>
                      <v-btn
                        flat
                        :color="
                          useCookie('theme').value == 'myLight' ? '#F9FBFC' : '#1e2124'
                        "
                        :class="[
                          useCookie('theme').value == 'myLight'
                            ? 'has-border'
                            : 'no-border',
                          'text-light-blue-lighten-2 mr-2 counter-btn',
                        ]"
                        height="40"
                        text="160"
                      >
                        <template v-slot:prepend>
                          <img src="/icons/eye.svg" alt="" />
                        </template>
                      </v-btn>

                      <v-btn
                        flat
                        :color="
                          useCookie('theme').value == 'myLight' ? '#F9FBFC' : '#1e2124'
                        "
                        :class="[
                          useCookie('theme').value == 'myLight'
                            ? 'has-border'
                            : 'no-border',
                          'text-light-blue-lighten-2 mr-2 counter-btn',
                        ]"
                        size="small"
                        height="40"
                      >
                        <img src="/icons/save-2.svg" alt="" />
                      </v-btn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-sm-flex d-none align-center">
              <div>
                <span class="text-body-2 text-medium-emphasis">2 ساعت پیش</span>
              </div>
              <div>
                <v-btn
                  flat
                  :color="useCookie('theme').value == 'myLight' ? '#F9FBFC' : '#1e2124'"
                  :class="[
                    useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border',
                    'text-light-blue-lighten-2 mr-2 counter-btn',
                  ]"
                  height="40"
                  text="160"
                >
                  <template v-slot:prepend>
                    <img src="/icons/eye.svg" alt="" />
                  </template>
                </v-btn>

                <v-btn
                  flat
                  :color="useCookie('theme').value == 'myLight' ? '#F9FBFC' : '#1e2124'"
                  :class="[
                    useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border',
                    'text-light-blue-lighten-2 mr-2 counter-btn',
                  ]"
                  size="small"
                  height="40"
                >
                  <img src="/icons/save-2.svg" alt="" />
                </v-btn>
              </div>
            </div>
          </div>

          <div class="mt-5">
            <span class="font-weight-medium" style="font-size: 1.25rem">عنوان پرسش</span>
          </div>
          <div class="mt-5">
            <p class="text-body-1">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
              لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
              ابزارهای کاربردی می باشدلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
              صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
              مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
              کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
          </div>
          <div class="mt-5">
            <div class="chip text-body-2 ml-3 px-3 py-2 border rounded-pill">
              #طراحی_وب
            </div>
            <div class="chip text-body-2 ml-3 px-3 py-2 border rounded-pill">
              #فرانت_اند
            </div>
          </div>
          <div class="mt-8 d-flex justify-space-between align-center">
            <div class="d-block d-sm-none"></div>
            <div class="d-flex align-center">
              <v-btn
                flat
                :color="useCookie('theme').value == 'myLight' ? '#F9FBFC' : '#1e2124'"
                :class="[
                  useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border',
                  'text-light-blue-lighten-2 counter-btn',
                ]"
                height="40"
                text="4"
              >
                <template v-slot:prepend>
                  <img src="/icons/messages-2.svg" alt="" />
                </template>
              </v-btn>
            </div>
            <div class="d-none d-sm-block">
              <v-btn
                text="پاسخ"
                :class="[
                  useCookie('theme').value == 'myLight' ? 'tonal-bg' : '',
                  'reply-btn',
                ]"
                size="x-large"
                variant="outlined"
                color="light-blue-lighten-2"
              >
                <template v-slot:append>
                  <img
                    :src="
                      useCookie('theme').value == 'myLight'
                        ? '/icons/reply-outline.svg'
                        : '/icons/reply-fill.svg'
                    "
                    width="24"
                    height="24"
                    alt=""
                  />
                </template>
              </v-btn>
            </div>
          </div>
          <v-btn
            text="پاسخ"
            :class="[
              useCookie('theme').value == 'myLight' ? 'tonal-bg' : '',
              'reply-btn mt-8 d-flex d-sm-none',
            ]"
            block
            size="x-large"
            variant="outlined"
            color="light-blue-lighten-2"
          >
            <template v-slot:append>
              <img
                :src="
                  useCookie('theme').value == 'myLight'
                    ? '/icons/reply-outline.svg'
                    : '/icons/reply-fill.svg'
                "
                width="24"
                height="24"
                alt=""
              />
            </template>
          </v-btn>
        </div>
      </v-card>
    </div>

    <div class="pt-15">
      <v-row class="ma-0 mt-15">
        <v-col cols="12" lg="3" class="d-none d-lg-block">
          <v-sheet
            :class="[
              useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border',
              'px-4 py-6 sidebar',
            ]"
          >
            <v-btn
              block
              size="x-large"
              flat
              color="light-blue-lighten-2 categories-btn"
              class=""
              text="ثبت پرسش"
            >
              <template v-slot:append>
                <img src="/public/icons/add-square.svg" width="20" height="20" alt="" />
              </template>
            </v-btn>
            <div class="mt-8">
              <span class="text-high-emphasis" style="font-size: 18px"
                >دسته بندی پرسش ها</span
              >
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
            <v-btn
              text="موارد بیشتر"
              variant="plain"
              style="opacity: 1"
              :ripple="false"
              color="light-blue-lighten-2"
            >
              <template v-slot:append>
                <img src="/icons/arrow-down-blue.svg" height="12" width="12" alt="" />
              </template>
            </v-btn>
          </v-sheet>
        </v-col>

        <v-col cols="12" lg="9">
          <v-card
            v-for="q in 5"
            :key="q"
            flat
            :class="[
              useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border',
              'question-card',
            ]"
          >
            <div
              v-if="q % 2 == 0"
              :class="[
                useCookie('theme').value == 'myLight' ? 'lighter-bg' : 'light-bg',
                'px-md-10 px-3 py-5',
              ]"
            >
              <div class="right-border pr-3">
                <div class="text-body-1 font-weight-medium d-flex align-center">
                  <div
                    class="ml-3"
                    :style="`color:${
                      useCookie('theme').value == 'myLight' ? '#000000DE' : '#EBEBEB'
                    }`"
                  >
                    یوزر ۱
                  </div>
                  <div dir="ltr" class="text-light-blue-lighten-2">@user1</div>
                </div>
                <div
                  class="text-body-2 mt-3 rep-ans"
                  :style="`color:${
                    useCookie('theme').value == 'myLight' ? '#000000DE' : '#EBEBEB'
                  }`"
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                  از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
                  سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                </div>
              </div>
            </div>
            <div class="px-md-10 py-md-7 pa-3">
              <div class="d-flex justify-space-between align-center">
                <div class="d-flex align-center">
                  <div class="">
                    <div class="d-flex align-center">
                      <div>
                        <v-avatar
                          image="https://picsum.photos/250/300?image=114"
                          size="65"
                        >
                        </v-avatar>
                      </div>
                      <div
                        class="mr-4"
                        style="width: 200px; word-break: break-all; white-space: normal"
                      >
                        <div class="d-block d-md-flex" style="font-size: 1.2rem">
                          <div>پریا سهیلی</div>
                          <div
                            class="text-light-blue-lighten-2 mr-md-6 mt-1 mt-md-0 text-md-left text-right"
                            style="font-size: 1.2rem"
                            dir="ltr"
                          >
                            @user1
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="d-sm-none mt-4 d-flex align-center">
                        <div>
                          <span class="text-body-2 text-medium-emphasis">2 ساعت پیش</span>
                        </div>
                        <div>
                          <v-btn
                            flat
                            :color="
                              useCookie('theme').value == 'myLight'
                                ? '#F9FBFC'
                                : '#1e2124'
                            "
                            :class="[
                              useCookie('theme').value == 'myLight'
                                ? 'has-border'
                                : 'no-border',
                              'text-light-blue-lighten-2 mr-2 counter-btn',
                            ]"
                            size="small"
                            height="40"
                          >
                            <img src="/icons/copy.svg" width="24" height="24" alt="" />
                          </v-btn>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-sm-flex d-none align-center">
                  <div>
                    <span class="text-body-2 text-medium-emphasis">2 ساعت پیش</span>
                  </div>
                  <div>
                    <v-btn
                      flat
                      :color="
                        useCookie('theme').value == 'myLight' ? '#F9FBFC' : '#1e2124'
                      "
                      :class="[
                        useCookie('theme').value == 'myLight'
                          ? 'has-border'
                          : 'no-border',
                        'text-light-blue-lighten-2 mr-2 counter-btn',
                      ]"
                      size="small"
                      height="40"
                    >
                      <img src="/icons/copy.svg" width="24" height="24" alt="" />
                    </v-btn>
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <p class="text-body-1">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                  از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
                  سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                  متنوع با هدف بهبود ابزارهای کاربردی می باشدلورم ایپسوم متن ساختگی با
                  تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                  برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                  ابزارهای کاربردی می باشد
                </p>
              </div>

              <div class="mt-8 d-flex justify-space-between align-center">
                <div class="d-block d-sm-none"></div>
                <div class="d-flex align-center">
                  <v-btn
                    flat
                    :color="useCookie('theme').value == 'myLight' ? '#F9FBFC' : '#1e2124'"
                    :class="[
                      useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border',
                      'text-light-blue-lighten-2 counter-btn',
                    ]"
                    height="40"
                    text="1 پاسخ"
                  ></v-btn>

                  <v-btn
                    flat
                    :color="useCookie('theme').value == 'myLight' ? '#F9FBFC' : '#1e2124'"
                    :class="[
                      useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border',
                      'text-light-blue-lighten-2 mr-2 counter-btn',
                    ]"
                    height="40"
                    text="3"
                  >
                    <template v-slot:prepend>
                      <img src="/icons/heart.svg" width="24" height="24" alt="" />
                    </template>
                  </v-btn>
                </div>
                <div class="d-none d-sm-block">
                  <v-btn
                    text="پاسخ"
                    :class="[
                      useCookie('theme').value == 'myLight' ? 'tonal-bg' : '',
                      'reply-btn',
                    ]"
                    size="x-large"
                    variant="outlined"
                    color="light-blue-lighten-2"
                  >
                    <template v-slot:append>
                      <img
                        :src="
                          useCookie('theme').value == 'myLight'
                            ? '/icons/reply-outline.svg'
                            : '/icons/reply-fill.svg'
                        "
                        width="24"
                        height="24"
                        alt=""
                      />
                    </template>
                  </v-btn>
                </div>
              </div>
              <v-btn
                text="پاسخ"
                :class="[
                  useCookie('theme').value == 'myLight' ? 'tonal-bg' : '',
                  'reply-btn mt-8 d-flex d-sm-none',
                ]"
                block
                size="x-large"
                variant="outlined"
                color="light-blue-lighten-2"
              >
                <template v-slot:append>
                  <img
                    :src="
                      useCookie('theme').value == 'myLight'
                        ? '/icons/reply-outline.svg'
                        : '/icons/reply-fill.svg'
                    "
                    width="24"
                    height="24"
                    alt=""
                  />
                </template>
              </v-btn>
            </div>
          </v-card>

          <div class="d-flex mt-10">
            <img src="/public//icons/reply-fill.svg" alt="" width="32" height="32" />
            <div class="text-h5 pr-3">ارسال پاسخ</div>
          </div>

          <v-divider
            class="mt-5 mb-10 border-opacity-75"
            :thickness="2"
            color="#9e9e9e"
          ></v-divider>

          <div class="d-flex align-center">
            <div>
              <v-avatar image="https://picsum.photos/250/300?image=114" size="65">
              </v-avatar>
            </div>
            <div class="mr-4" style="word-break: break-all; white-space: normal">
              <div class="d-block d-md-flex" style="font-size: 1.2rem">
                <div>نام و نام کاربری</div>
                <div
                  class="text-light-blue-lighten-2 mr-md-6 mt-1 mt-md-0 text-md-left text-right"
                  style="font-size: 1.2rem"
                  dir="ltr"
                >
                  @user1
                </div>
              </div>
            </div>
          </div>

          <v-sheet
            :class="[
              useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border',
              'rounding',
              'px-5 py-10 mt-5',
              'ans',
            ]"
          >
            <label for="">متن پاسخ شما</label>
            <v-textarea variant="outlined" class="rounding mt-2"></v-textarea>
          </v-sheet>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import AskAndAnswer from "~/components/AskAndAnswer.vue";
</script>

<style>
.sorting {
  border-radius: var(--border-radius-md) !important;
}

.question-card p {
  letter-spacing: 0 !important;
}
</style>
