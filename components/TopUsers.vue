<template>
  <div>
    <div class="d-flex align-center justify-space-between">
      <SectionTitle :title="'10 کاربر برتر'" :icon="'medal-star.svg'" :size="'h6'" />
      <div class="d-flex align-center pl-3">
        <div class="swiper-button-prev1 d-flex justify-center align-center">
          <img @click="slidePrev" class="ml-2" style="transform: scaleX(-1);" src="/public/icons/arrow-circle-left.svg"
            alt="">
        </div>
        <div class="swiper-button-next1 d-flex justify-center align-center">
          <img @click="slideNext" src="/public/icons/arrow-circle-left.svg" alt="">
        </div>
      </div>
    </div>
    <div class="mt-5 px-3">
      <swiper @swiper="onSwiper" :loop="true" ref="swiperRef" :slidesPerView="1" :spaceBetween="16"
        :breakpoints="breakpoints" :navigation="false" :modules="modules" class="mySwiper pb-15">
        <swiper-slide v-for="u in 10">
          <v-card :class="[useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border', 'pa-8 round-base']"
            height="100" elevation="0">
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
                <v-avatar image="https://picsum.photos/250/300?image=114" size="80"></v-avatar>
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
import { Navigation } from "swiper/modules";

let modules = ref([Navigation]);
let breakpoints = ref({
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
});

const swiperRef = ref(null);

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};

const slideNext = () => {
  if (swiperRef.value) {
    swiperRef.value.slideNext();
  }
};

const slidePrev = () => {
  if (swiperRef.value) {
    swiperRef.value.slidePrev();
  }
};

</script>

<style>
.swiper-button-next {
  left: 0px !important;

}

.swiper-button-prev {
  /* right: 5px !important; */
  position: absolute;
  right: 93% !important;
}


@media only screen and (max-width: 760px) {

  .swiper-button-prev {
    right: 90% !important;
  }

}

@media only screen and (max-width: 500px) {

  .swiper-button-prev {
    right: 87% !important;
  }

}

@media only screen and (max-width: 400px) {

  .swiper-button-prev {
    right: 83% !important;
  }

}



.swiper-button-next,
.swiper-button-prev {
  bottom: -10 !important;
  margin-top: 5rem;
  /* background: #4FC3F7; */
  border-radius: 50%;
  height: 20px;
  width: 20px;
  padding: 0.5rem;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 0.5rem;
  color: #fff !important;
}
</style>
