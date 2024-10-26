<template>
  <div>
    <div>
      <swiper
        :loop="true"
        :autoplay="{
          delay: 3500,
          disableOnInteraction: false,
        }"
        :modules="modules"
        class="mySwiper shadow-base"
      >
        <swiper-slide v-for="slide in 2">
          <v-img
            class=""
            :aspect-ratio="16 / 9"
            max-height="500"
            height="100%"
            :eager="true"
            :src="'/images/hero.png'"
            cover
          ></v-img>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style>
.mySwiper {
  height: auto;
  border-radius: 8px;
}

.side-hero {
  width: 48%;
}

@media only screen and (max-width: 600px) {
  .mySwiper {
    border-radius: 0px;
  }
}
</style>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import { Autoplay } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ["sliders", "banners"],
  setup() {
    const runtimeConfig = useRuntimeConfig();

    return {
      runtimeConfig,
      modules: [Autoplay],
    };
  },
  mounted() {},
};
</script>
