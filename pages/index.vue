<template>
  <div class="">
    <Hero class="mt-5" :sliders="[]" :banners="[]" />
    <AskAndAnswer class="mt-5" :showTitle="true" />
    <Categories :categories="categories" class="mt-5" />
    <RecentQuestions class="mt-8" />
    <TopUsers class="mt-5" />
  </div>
</template>

<script setup>
import Hero from "../components/Hero.vue";
import AskAndAnswer from "~/components/AskAndAnswer.vue";
import RecentQuestions from "~/components/RecentQuestions.vue";
import Categories from "~/components/Categories.vue";
import TopUsers from "~/components/TopUsers.vue";

const runtimeConfig = useRuntimeConfig();

useHead({
  title: "کد هاب",
});

// const { data: newestProducts } = await useFetch(
//   `${runtimeConfig.public.apiUrl}/shop/product/newest`
// );
// const { data: specialProducts } = await useFetch(
//   `${runtimeConfig.public.apiUrl}/shop/product/special`
// );
// const { data: mostSoldProducts } = await useFetch(
//   `${runtimeConfig.public.apiUrl}/shop/product/most-sold`
// );
const { data: categories } = await useFetch(
  `http://backend.code-hub.site/api/categories`
);
// const { data: banners } = await useFetch(`${runtimeConfig.public.apiUrl}/banners`);

let pageLoading = ref(true);

onMounted(() => {
  // setTimeout(() => {
  //     pageLoading.value = false
  // }, 4000);
  pageLoading.value = false;
});
</script>
