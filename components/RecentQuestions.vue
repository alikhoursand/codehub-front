<template>
  <div>
    <div class="d-flex justify-space-between align-center">
      <SectionTitle :title="'سوالات اخیر'" :icon="'clock.svg'" :size="'h6'" />
      <div>
        <v-btn
          text="مشاهده همه"
          class="font-weight-light"
          flat
          variant="plain"
          :ripple="false"
          style="opacity: 1"
        >
          <template v-slot:append>
            <img src="/icons/arrow-square-left.svg" width="17" height="17" alt="" />
          </template>
        </v-btn>
      </div>
    </div>
    <v-row class="ma-0 mt-3">
      <v-col cols="12" lg="6" v-for="r in 4" :key="r">
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 3 : 0"
              href="/view/test"
              class="question-card"
            >
              <div class="pa-md-10 pa-3">
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
                          <span class="font-weight-medium" style="font-size: 1.4rem">
                            پریا سهیلی
                          </span>
                        </div>
                      </div>
                      <div>
                        <div class="d-sm-none mt-4 d-flex align-center">
                          <div>
                            <span
                              class="font-weight-light text-body-2 text-medium-emphasis"
                              >2 ساعت پیش</span
                            >
                          </div>
                          <div>
                            <v-btn
                              flat
                              color="#1e2124"
                              class="text-light-blue-lighten-2 mr-2 counter-btn"
                              height="40"
                              text="160"
                            >
                              <template v-slot:prepend>
                                <img src="/icons/eye.svg" alt="" />
                              </template>
                            </v-btn>

                            <v-btn
                              flat
                              color="#1e2124"
                              class="text-light-blue-lighten-2 mr-2 counter-btn"
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
                      <span class="font-weight-light text-body-2 text-medium-emphasis"
                        >2 ساعت پیش</span
                      >
                    </div>
                    <div>
                      <v-btn
                        flat
                        color="#1e2124"
                        class="text-light-blue-lighten-2 mr-2 counter-btn"
                        height="40"
                        text="160"
                      >
                        <template v-slot:prepend>
                          <img src="/icons/eye.svg" alt="" />
                        </template>
                      </v-btn>

                      <v-btn
                        flat
                        color="#1e2124"
                        class="text-light-blue-lighten-2 mr-2 counter-btn"
                        size="small"
                        height="40"
                      >
                        <img src="/icons/save-2.svg" alt="" />
                      </v-btn>
                    </div>
                  </div>
                </div>
                <div class="mt-5">
                  <span class="font-weight-medium" style="font-size: 1.25rem"
                    >عنوان پرسش</span
                  >
                </div>
                <div class="mt-5">
                  <p class="text-body-1 parag" v-if="r == 2">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                    از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
                    سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                    متنوع با هدف بهبود ابزارهای کاربردی می باشدلورم ایپسوم متن ساختگی با
                    تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                    برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                    ابزارهای کاربردی می باشد
                  </p>
                  <p class="text-body-1 parag" v-else>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                    از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
                    سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                    متنوع با هدف بهبود ابزارهای کاربردی می باشد
                  </p>
                </div>
                <div class="mt-5">
                  <div class="chip ml-3 px-3 py-2 border rounded-pill">#طراحی_وب</div>
                  <div class="chip ml-3 px-3 py-2 border rounded-pill">#فرانت_اند</div>
                </div>
                <div class="mt-8 d-flex justify-end">
                  <v-btn
                    flat
                    color="#1e2124"
                    class="text-light-blue-lighten-2 counter-btn"
                    height="40"
                    text="4"
                  >
                    <template v-slot:prepend>
                      <img src="/icons/messages-2.svg" alt="" />
                    </template>
                  </v-btn>

                  <div class="d-flex align-center">
                    <v-img
                      class="av-img"
                      rounded="circle"
                      height="40"
                      cover
                      width="40"
                      src="https://picsum.photos/250/300?image=100"
                    ></v-img>
                    <v-img
                      class="av-img"
                      rounded="circle"
                      height="40"
                      cover
                      width="40"
                      src="https://picsum.photos/250/300?image=102"
                    ></v-img>
                    <v-img
                      class="av-img"
                      rounded="circle"
                      height="40"
                      cover
                      width="40"
                      src="https://picsum.photos/250/300?image=104"
                    ></v-img>
                  </div>
                </div>
              </div>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import SectionTitle from "./SectionTitle.vue";
</script>

<style scoped>
.parag {
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

.question-card {
  border-radius: var(--border-radius-md);
}
</style>
