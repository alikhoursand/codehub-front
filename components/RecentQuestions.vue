<template>
  <div>
    <div class="d-flex justify-space-between align-center">
      <SectionTitle :title="'سوالات اخیر'" :icon="'mdi-clock'" :size="'h6'" />
      <div>
        <v-btn text="مشاهده همه" append-icon="mdi-chevron-left-box" class="font-weight-light" flat
          variant="plain"></v-btn>
      </div>
    </div>
    <v-row class="ma-0 mt-5">
      <v-col cols="12" lg="6" v-for="r in 4" :key="r">
        <v-card elevation="0" class="pa-0 pa-md-5 question-card">
          <template v-slot:title>
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
                        <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 mr-2" rounded="lg" height="35"
                          text="160" prepend-icon="mdi-eye"></v-btn>

                        <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 mr-2" rounded="lg" size="small"
                          height="35" icon="mdi-bookmark-multiple"></v-btn>
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
                  <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 mr-2" rounded="lg" height="35" text="160"
                    prepend-icon="mdi-eye"></v-btn>

                  <v-btn flat color="#1e2124" class="text-light-blue-lighten-2 mr-2" rounded="lg" size="small"
                    height="35" icon="mdi-bookmark-multiple"></v-btn>
                </div>
              </div>
            </div>
          </template>
          <template v-slot:text>
            <div class="mt-3"><span style="font-size: 1.25rem">عنوان پرسش</span></div>
            <div class="mt-5">
              <p class="text-body-1 parag" v-if="r == 2">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                بهبود ابزارهای کاربردی می باشدلورم ایپسوم متن ساختگی با تولید سادگی
                نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
              <p class="text-body-1 parag" v-else>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                بهبود ابزارهای کاربردی می باشد
              </p>
            </div>
            <div class="mt-5">
              <div class="chip ml-3 px-3 py-2 border rounded-pill">#طراحی_وب</div>
              <div class="chip ml-3 px-3 py-2 border rounded-pill">#فرانت_اند</div>
            </div>
            <div class="mt-8 d-flex justify-end">
              <v-btn flat color="#1e2124" class="text-light-blue-lighten-2" rounded="lg" height="35" text="4"
                prepend-icon="mdi-forum"></v-btn>

              <div class="d-flex align-center">
                <v-img class="av-img" rounded="circle" height="35" cover width="35"
                  src="https://picsum.photos/250/300?image=100"></v-img>
                <v-img class="av-img" rounded="circle" height="35" cover width="35"
                  src="https://picsum.photos/250/300?image=102"></v-img>
                <v-img class="av-img" rounded="circle" height="35" cover width="35"
                  src="https://picsum.photos/250/300?image=104"></v-img>
              </div>
            </div>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import SectionTitle from "./SectionTitle.vue";
</script>

<style scoped>
.chip {
  display: inline-block;
  border: 1px solid #ddd;
}

.parag {
  height: 100px;
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

.question-card {
  border-radius: var(--border-radius-md);
}
</style>
