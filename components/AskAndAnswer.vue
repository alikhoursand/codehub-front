<template>
  <div>
    <SectionTitle :title="'پرسش و پاسخ ها'" :size="'h5'" :icon="'mdi-forum'" />

    <v-row class="ma-0 my-5 justify-space-between align-center">
      <v-col cols="12" md="9">
        <div
          style="border: 1px solid #4fc3f7; width: fit-content; max-width: 100%"
          class="rounded-lg d-flex"
        >
          <v-slide-group show-arrows max-width="750">
            <v-slide-group-item v-slot="{ isSelected, toggle }">
              <v-btn
                size="large"
                rounded="lg"
                height="55"
                :color="isSelected ? '#14161a' : undefined"
                text="همه سوالات"
                class="font-weight-light"
                :variant="isSelected ? 'flat' : 'text'"
                @click="toggle"
              >
              </v-btn>
            </v-slide-group-item>
            <v-slide-group-item v-slot="{ isSelected, toggle }">
              <v-btn
                size="large"
                rounded="lg"
                height="55"
                :color="isSelected ? '#14161a' : undefined"
                text="گفتگو های خصوصی"
                class="font-weight-light"
                :variant="isSelected ? 'flat' : 'text'"
                @click="toggle"
              >
              </v-btn>
            </v-slide-group-item>
            <v-slide-group-item v-slot="{ isSelected, toggle }">
              <v-btn
                size="large"
                rounded="lg"
                height="55"
                :color="isSelected ? '#14161a' : undefined"
                text="پرسش های حل شده"
                class="font-weight-light"
                :variant="isSelected ? 'flat' : 'text'"
                @click="toggle"
              >
              </v-btn>
            </v-slide-group-item>
            <v-slide-group-item v-slot="{ isSelected, toggle }">
              <v-btn
                size="large"
                rounded="lg"
                height="55"
                :color="isSelected ? '#14161a' : undefined"
                text="پرسش های بدون پاسخ"
                class="font-weight-light"
                :variant="isSelected ? 'flat' : 'text'"
                @click="toggle"
              >
              </v-btn>
            </v-slide-group-item>
          </v-slide-group>
        </div>
      </v-col>
      <v-col cols="12" md="3">
        <div class="text-left">
          <v-btn
            text="مرتب سازی پرسش ها"
            class="font-weight-light"
            size="large"
            rounded="lg"
            prepend-icon="mdi-sort-variant"
            append-icon="mdi-menu-down"
            variant="text"
          ></v-btn></div
      ></v-col>
    </v-row>

    <div>
      <SectionTitle :title="'همه سوالات'" :size="'h6'" :icon="'mdi-chat-question'" />

      <v-row class="ma-0 justify-space-between align-center">
        <v-col cols="12" md="6">
          <div class="">
            <span class="text-sm-body-1 text-body-2 text-right">
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
              append-icon="mdi-plus-box"
              class="font-weight-light"
              text="ثبت پرسش"
            ></v-btn>
          </div>
        </v-col>
      </v-row>

      <v-row class="ma-0 mt-2">
        <v-col cols="12" lg="3" md="4" sm="6" v-for="q in 11" :key="q">
          <v-card rounded="lg" class="pa-5 py-10" elevation="0">
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
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import SectionTitle from "./SectionTitle.vue";

let selectedCategory = ref(null);
</script>

<style>
.v-tabs--density-default {
  height: unset !important;
  --v-tabs-height: unset !important;
}
</style>
