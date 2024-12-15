<template>
  <div>
    <SectionTitle :title="'همه سوالات'" :size="'h6'" :icon="'message-question.svg'" />

    <v-row class="ma-0 justify-space-between align-center">
      <v-col cols="12" md="6">
        <div class="">
          <span class="text-md-body-1 text-body-2 text-right">
            جستجو بر اساس دسته بندی پرسش ها
          </span>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="text-left">
          <nuxt-link to="/ask/new">
            <v-btn size="x-large" flat color="light-blue-lighten-2" class="rounding submit-btn" text="ثبت پرسش">
              <template v-slot:append>
                <img src="/public/icons/add-square.svg" width="20" height="20" alt="" />
              </template>
            </v-btn>
          </nuxt-link>
        </div>
      </v-col>
    </v-row>

    <v-row class="ma-0 mt-2">
      <v-col cols="12" lg="3" md="4" sm="6" v-for="category in categories" :key="category.id">
        <v-card :href="`/category/${category.slug}`" variant="flat"
          :class="[useCookie('theme').value == 'myLight' ? 'has-border' : 'no-border', 'pa-5 py-10 category-card']">
          <div class="d-flex justify-center align-center">
            <span class="">{{ category.name }}</span>
            <img src="/images/css-logo.svg" class="mr-2" alt="">
          </div>
          <v-divider color="light-blue-lighten-2" class="my-3 mx-auto border-opacity-100" width="80"></v-divider>
          <div class="text-center text-light-blue-lighten-2">
            {{ `23 سوال` }}
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>

defineProps({
  categories: {
    type: Array,
    required: true,
  },
})
</script>
