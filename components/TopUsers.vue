<template>
  <div>
    <SectionTitle :title="'10 کاربر برتر'" :icon="'medal-star.svg'" :size="'h6'" />
    <div class="mt-5 px-3">
      <swiper
        :slidesPerView="1"
        :spaceBetween="16"
        :breakpoints="{
          '0': {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          '500': {
            slidesPerView: 1.75,
            spaceBetween: 16,
          },
          '640': {
            slidesPerView: 2,
            spaceBetween: 16,
          },

          '1200': {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          '1400': {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          '1600': {
            slidesPerView: 5,
            spaceBetween: 16,
          },
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper pb-15"
      >
        <swiper-slide v-for="u in 10">
          <v-card class="pa-8 round-base" height="100" elevation="0">
            <div class="d-flex h-100 justify-center align-center">
              <div>
                <!-- <v-img
                  class="av-img"
                  rounded="circle"
                  height="35"
                  cover
                  width="35"
                  src="https://picsum.photos/250/300?image=104"
                ></v-img> -->
                <v-avatar
                  image="https://picsum.photos/250/300?image=114"
                  size="80"
                ></v-avatar>
              </div>
              <div class="mr-5">
                <div class="d-flex align-center" style="height: 50px">کاربر تستی</div>
                <div dir="ltr" class="mt-3 text-light-blue-lighten-2">@testUser</div>
              </div>
            </div>
          </v-card>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import SectionTitle from "./SectionTitle.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
// import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

let modules = ref([Navigation]);
</script>

<style>
.swiper-button-next {
  left: 10px !important;
}

.swiper-button-prev {
  right: 10px !important;
}

.swiper-button-next,
.swiper-button-prev {
  bottom: -10 !important;
  margin-top: 5rem;
  background: #ddd;
  border-radius: 0.25rem;
  height: 20px;
  width: 20px;
  padding: 0.5rem;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 0.5rem;
  color: #14161a !important;
}
</style>
