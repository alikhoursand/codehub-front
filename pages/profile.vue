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
                <v-btn text="ویرایش پروفایل" color="light-blue-lighten-2 rounded-btn" prepend-icon="mdi-reply"
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
                <div class="text-center mt-3 text-light-blue-lighten-2" dir="ltr">@Arya</div>
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
                  <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 counter-btn" height="40"
                    icon="mdi-upload"></v-btn>
                  <v-btn flat color="#1e2124" class="mr-2 text-light-blue-lighten-2 counter-btn" height="40"
                    icon="mdi-dots-horizontal"></v-btn>
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
                <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 counter-btn" height="40"
                  icon="mdi-upload"></v-btn>
                <v-btn flat color="#1e2124" class="mr-2 text-light-blue-lighten-2 counter-btn" height="40"
                  icon="mdi-dots-horizontal"></v-btn>
              </div>
              <v-btn class="round-btn mt-3" block text="ویرایش پروفایل" color="light-blue-lighten-2 rounded-btn"
                prepend-icon="mdi-reply" size="x-large"></v-btn>
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
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                متون
                بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
                متنوع
                با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه
                و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
                فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                راهکارها،
                و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                اهل
                دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </div>
            </v-card>
          </v-window-item>
          <v-window-item :value="1">
            <v-card flat class="rounding mt-15 pa-md-7 pa-3">
              <div><span class="text-h6">پرسش های کاربر</span></div>
              <div class="mt-5 text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                متون
                بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
                متنوع
                با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه
                و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
                فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                راهکارها،
                و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                اهل
                دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </div>
            </v-card>
          </v-window-item>
          <v-window-item :value="2">
            <v-card flat class="rounding mt-15 pa-md-7 pa-3">
              <div><span class="text-h6">پاسخ های کاربر</span></div>
              <div class="mt-5 text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                متون
                بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
                متنوع
                با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه
                و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
                فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                راهکارها،
                و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                اهل
                دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </div>
            </v-card>
          </v-window-item>
        </v-window>

      </div>
    </div>



  </div>
</template>

<script setup>

let selectedSection = ref(0)
let selectedButton = ref(null)

watch(selectedButton, async (asd) => {

  selectedSection.value = selectedButton.value

});

</script>

<style></style>
