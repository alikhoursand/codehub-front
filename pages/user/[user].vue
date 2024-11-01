<template>
  <div>
    <div class="mt-5 px-3">
      <v-sheet flat class="profile-container">
        <div>
          <v-img height="300" class="profile-img" cover src="/images/code-bg.jpg"></v-img>
        </div>
        <div class="">
          <v-row class="ma-0 justify-center">
            <v-col cols="4" class="d-none d-md-block">
              <div class="d-flex text-center">
                <div class="pa-5">
                  <div class="text-h6 text-medium-emphasis">دنبال کننده</div>
                  <div class="text-h4 mt-3">12</div>
                </div>
                <div class="pa-5">
                  <div class="text-h6 text-medium-emphasis">دنبال شده</div>
                  <div class="text-h4 mt-3">10</div>
                </div>
              </div>
              <div class="pa-5 pr-3 mt-10 mr-5">
                <v-btn text="دنبال کردن" color="light-blue-lighten-2 font-weight-light rounded-btn"
                  size="x-large"></v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="4" class="">
              <div class="av-holder">
                <div class="profile-av-img">
                  <v-img :eager="true" rounded="circle" class="mx-auto profile-avatar" cover
                    src="https://picsum.photos/250/300?image=100" :aspect-ratio="1 / 1" width="180"></v-img>
                </div>
                <div class="text-center text-h4">آریا ملکی</div>
                <div class="text-center mt-3 text-light-blue-lighten-2" dir="ltr">
                  @Arya
                </div>
                <div class="text-center mt-3 text-h6 font-weight-medium">عنوان حرفه</div>
              </div>
            </v-col>
            <v-col cols="4" class="d-none d-md-block">
              <div class="d-flex flex-column justify-space-between h-100 pb-5">
                <div class="d-flex align-center pt-5 pl-5 justify-end text-body-2">
                  <span>آخرین فعالیت: ۲۰ روز پیش</span>
                  <v-divider vertical color="light-blue-lighten-2" :thickness="1"
                    class="border-opacity-100 mx-2"></v-divider>
                  <span>مدت عضویت: ۲ سال و ۲ ماه</span>
                </div>
                <div class="text-left pl-5">


                  <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 counter-btn" size="small" height="40">
                    <img src="/icons/send-square.svg" alt="">
                  </v-btn>
                  <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 mr-2 counter-btn" size="small"
                    height="40">
                    <img src="/icons/more-square.svg" alt="">
                  </v-btn>


                </div>
              </div>
            </v-col>
            <v-col cols="12" class="d-block d-md-none">
              <v-divider color="light-blue-lighten-2" :thickness="1" class="mx-5 border-opacity-100 mb-5"></v-divider>

              <div>
                <div class="d-flex text-center justify-center">
                  <div class="pa-5">
                    <div class="text-h6 text-medium-emphasis">دنبال کننده</div>
                    <div class="text-h4 mt-3">12</div>
                  </div>
                  <div class="pa-5">
                    <div class="text-h6 text-medium-emphasis">دنبال شده</div>
                    <div class="text-h4 mt-3">10</div>
                  </div>
                </div>
              </div>
              <div class="mt-0">
                <div class="text-center text-body-2">
                  <div>
                    <span>مدت عضویت: ۲ سال و ۲ ماه</span>
                  </div>
                  <div class="mt-2">
                    <span>آخرین فعالیت: ۲۰ روز پیش</span>
                  </div>
                </div>
              </div>
              <div class="text-left mt-8">
                <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 counter-btn" size="small" height="40">
                  <img src="/icons/send-square.svg" alt="">
                </v-btn>
                <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 mr-2 counter-btn" size="small" height="40">
                  <img src="/icons/more-square.svg" alt="">
                </v-btn>
              </div>
              <v-btn class="round-btn mt-3" block text="دنبال کردن"
                color="light-blue-lighten-2  font-weight-light rounded-btn" size="x-large"></v-btn>
            </v-col>
          </v-row>
        </div>
      </v-sheet>

      <div class="mt-15">
        <div class="btn-gp">
          <v-slide-group v-model="selectedButton" mandatory show-arrows max-width="750">
            <v-slide-group-item v-slot="{ isSelected, toggle }">
              <v-btn size="large" flat rounded="lg" height="55" :color="isSelected ? '#14161a' : undefined"
                text="درباره کاربر" class="font-weight-light" :variant="isSelected ? 'flat' : 'text'" @click="toggle">
              </v-btn>
            </v-slide-group-item>
            <v-slide-group-item v-slot="{ isSelected, toggle }">
              <v-btn size="large" flat rounded="lg" height="55" :color="isSelected ? '#14161a' : undefined"
                text="پرسش های کاربر" class="font-weight-light" :variant="isSelected ? 'flat' : 'text'" @click="toggle">
              </v-btn>
            </v-slide-group-item>
            <v-slide-group-item v-slot="{ isSelected, toggle }">
              <v-btn size="large" flat rounded="lg" height="55" :color="isSelected ? '#14161a' : undefined"
                text="پاسخ های کاربر" class="font-weight-light" :variant="isSelected ? 'flat' : 'text'" @click="toggle">
              </v-btn>
            </v-slide-group-item>
          </v-slide-group>
        </div>

        <v-window v-model="selectedSection">
          <v-window-item :value="0">
            <v-card flat class="rounding mt-15 pa-md-7 pa-3">
              <div><span class="text-h6">درباره کاربر</span></div>
              <div class="mt-5 text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
                هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
                حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
                شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
                پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
                نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                موجود طراحی اساسا مورد استفاده قرار گیرد.
              </div>
            </v-card>
          </v-window-item>
          <v-window-item :value="1">
            <div class="mt-15 px-3">
              <v-card elevation="0" class="question-card" v-for="q in 3" :key="q">
                <div class="pa-md-10 pa-3">
                  <div class="d-flex justify-space-between align-center">
                    <div class="d-flex align-center">
                      <div class="">
                        <div class="d-flex align-center">
                          <div>
                            <v-avatar image="https://picsum.photos/250/300?image=114" size="65">
                            </v-avatar>
                          </div>
                          <div class="mr-4" style="
                              width: 200px;
                              word-break: break-all;
                              white-space: normal;
                            ">
                            <span class="font-weight-light" style="font-size: 1.4rem">
                              پریا سهیلی
                            </span>
                          </div>
                        </div>
                        <div>
                          <div class="d-sm-none mt-4 d-flex align-center">
                            <div>
                              <span class="font-weight-light text-body-2 text-medium-emphasis">2 ساعت پیش</span>
                            </div>
                            <div>
                              <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 mr-2 counter-btn" height="40"
                                text="160">
                                <template v-slot:prepend>
                                  <img src="/icons/eye.svg" alt="" />
                                </template>
                              </v-btn>

                              <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 mr-2 counter-btn"
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
                        <span class="font-weight-light text-body-2 text-medium-emphasis">2 ساعت پیش</span>
                      </div>
                      <div>
                        <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 mr-2 counter-btn" height="40"
                          text="160">
                          <template v-slot:prepend>
                            <img src="/icons/eye.svg" alt="" />
                          </template>
                        </v-btn>

                        <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 mr-2 counter-btn" size="small"
                          height="40">
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
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                      استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
                      ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                      کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشدلورم ایپسوم متن
                      ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                      گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                      لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                      هدف بهبود ابزارهای کاربردی می باشد
                    </p>
                  </div>
                  <div class="mt-5">
                    <div class="chip ml-3 px-3 py-2 border rounded-pill">#طراحی_وب</div>
                    <div class="chip ml-3 px-3 py-2 border rounded-pill">#فرانت_اند</div>
                  </div>
                  <div class="mt-8 d-flex justify-space-between align-center">
                    <div class="d-block d-sm-none"></div>
                    <div class="d-flex align-center">
                      <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 counter-btn" height="40" text="4">
                        <template v-slot:prepend>
                          <img src="/icons/messages-2.svg" alt="" />
                        </template>
                      </v-btn>
                    </div>
                    <div class="d-none d-sm-block">
                      <v-btn text="پاسخ" class="reply-btn" size="x-large" variant="outlined"
                        color="light-blue-lighten-2">
                        <template v-slot:append>
                          <img src="/icons/reply-fill.svg" width="24" height="24" alt="" />
                        </template>
                      </v-btn>
                    </div>
                  </div>
                  <v-btn text="پاسخ" class="reply-btn mt-8 d-flex d-sm-none" block size="x-large" variant="outlined"
                    color="light-blue-lighten-2">
                    <template v-slot:append>
                      <img src="/icons/reply-fill.svg" width="24" height="24" alt="" />
                    </template>
                  </v-btn>
                </div>
              </v-card>
            </div>
          </v-window-item>
          <v-window-item :value="2">
            <div class="mt-15 px-3">
              <v-card v-for="a in 3" :key="a" elevation="0" class="question-card">
                <div class="light-bg px-md-10 px-3 py-5">
                  <div class="right-border pr-3">
                    <div class="text-body-1 font-weight-medium d-flex align-center">
                      <div class="ml-3">یوزر ۱</div>
                      <div dir="ltr" class="text-light-blue-lighten-2">@user1</div>
                    </div>
                    <div class="text-body-2 mt-3 rep-ans">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                      استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
                      ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                    </div>
                  </div>
                </div>
                <div class="px-md-10 py-md-7 pa-3">
                  <div class="d-flex justify-space-between align-center">
                    <div class="d-flex align-center">
                      <div class="">
                        <div class="d-flex align-center">
                          <div>
                            <v-avatar image="https://picsum.photos/250/300?image=114" size="65">
                            </v-avatar>
                          </div>
                          <div class="mr-4" style="
                              width: 200px;
                              word-break: break-all;
                              white-space: normal;
                            ">
                            <span class="font-weight-light" style="font-size: 1.4rem">
                              پریا سهیلی
                            </span>
                          </div>
                        </div>
                        <div>
                          <div class="d-sm-none mt-4 d-flex align-center">
                            <div>
                              <span class="font-weight-light text-body-2 text-medium-emphasis">2 ساعت پیش</span>
                            </div>
                            <div>
                              <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 mr-2 counter-btn"
                                size="small" height="40">
                                <img src="/icons/copy.svg" width="24" height="24" alt="" />
                              </v-btn>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="d-sm-flex d-none align-center">
                      <div>
                        <span class="font-weight-light text-body-2 text-medium-emphasis">2 ساعت پیش</span>
                      </div>
                      <div>
                        <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 mr-2 counter-btn" size="small"
                          height="40">
                          <img src="/icons/copy.svg" width="24" height="24" alt="" />
                        </v-btn>
                      </div>
                    </div>
                  </div>
                  <div class="mt-3">
                    <p class="text-body-1">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                      استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
                      ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                      کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشدلورم ایپسوم متن
                      ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                      گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                      لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                      هدف بهبود ابزارهای کاربردی می باشد
                    </p>
                  </div>

                  <div class="mt-8 d-flex justify-space-between align-center">
                    <div class="d-block d-sm-none"></div>
                    <div class="d-flex align-center">
                      <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 counter-btn" height="40"
                        text="1 پاسخ"></v-btn>

                      <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 mr-2 counter-btn" height="40"
                        text="3">
                        <template v-slot:prepend>
                          <img src="/icons/heart.svg" width="24" height="24" alt="" />
                        </template>
                      </v-btn>
                    </div>
                    <div class="d-none d-sm-block">
                      <v-btn text="پاسخ" class="reply-btn" size="x-large" variant="outlined"
                        color="light-blue-lighten-2">
                        <template v-slot:append>
                          <img src="/icons/reply-fill.svg" width="24" height="24" alt="" />
                        </template>
                      </v-btn>
                    </div>
                  </div>
                  <v-btn text="پاسخ" class="reply-btn mt-8 d-flex d-sm-none" block size="x-large" variant="outlined"
                    color="light-blue-lighten-2">
                    <template v-slot:append>
                      <img src="/icons/reply-fill.svg" width="24" height="24" alt="" />
                    </template>
                  </v-btn>
                </div>
              </v-card>
            </div>
          </v-window-item>
        </v-window>
      </div>
    </div>
  </div>
</template>

<script setup>
let selectedSection = ref(0);
let selectedButton = ref(null);

watch(selectedButton, async (asd) => {
  selectedSection.value = selectedButton.value;
});
</script>

<style></style>
