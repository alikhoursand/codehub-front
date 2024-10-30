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
          <v-btn
            size="x-large"
            rounded="lg"
            color="light-blue-lighten-2"
            class="font-weight-light submit-btn"
            text="ثبت پرسش"
          >
            <template v-slot:append>
              <img src="/public/icons/add-square.svg" width="20" height="20" alt="" />
            </template>
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <v-row class="ma-0 mt-2">
      <v-col cols="12" lg="3" md="4" sm="6" v-for="q in 11" :key="q">
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-card
              href="/category"
              v-bind="props"
              class="pa-5 py-10 category-card"
              :elevation="isHovering ? 3 : 0"
            >
              <div class="d-flex justify-center align-center">
                <span>موضوع</span>
                <v-icon
                  class="mr-2"
                  variant="flat"
                  color="light-blue-lighten-2"
                  icon="mdi-language-css3"
                ></v-icon>
              </div>
              <v-divider
                color="light-blue-lighten-2"
                class="my-3 mx-auto border-opacity-100"
                width="80"
              ></v-divider>
              <div class="text-center text-light-blue-lighten-2">
                {{ `23 سوال` }}
              </div>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script setup></script>

<style>
.category-card {
  border-radius: var(--border-radius-md);
}

.submit-btn {
  border-radius: var(--border-radius-md) !important;
}
</style>
