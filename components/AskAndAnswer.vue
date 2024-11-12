<template>
  <div>
    <SectionTitle v-if="props.showTitle == true" :title="'پرسش و پاسخ ها'" :size="'h6'" :icon="'messages-1.svg'" />

    <v-row class="ma-0 my-5 justify-space-between align-center categories">
      <v-col cols="12" md="9">
        <div class="btn-gp">
          <v-slide-group v-model="selectedCategory" mandatory show-arrows max-width="750">
            <v-slide-group-item v-slot="{ isSelected, toggle }">
              <v-btn size="large" flat height="55"
                :color="isSelected ? useCookie('theme').value == 'myDark' ? '#14161a' : '#EDF9FF' : undefined"
                text="همه سوالات" class="" :variant="isSelected ? 'flat' : 'text'" @click="toggle">
              </v-btn>
            </v-slide-group-item>
            <v-slide-group-item v-slot="{ isSelected, toggle }">
              <v-btn size="large" flat height="55"
                :color="isSelected ? useCookie('theme').value == 'myDark' ? '#14161a' : '#EDF9FF' : undefined"
                text="گفتگو های خصوصی" class="" :variant="isSelected ? 'flat' : 'text'" @click="toggle">
              </v-btn>
            </v-slide-group-item>
            <v-slide-group-item v-slot="{ isSelected, toggle }">
              <v-btn size="large" flat height="55"
                :color="isSelected ? useCookie('theme').value == 'myDark' ? '#14161a' : '#EDF9FF' : undefined"
                text="پرسش های حل شده" class="" :variant="isSelected ? 'flat' : 'text'" @click="toggle">
              </v-btn>
            </v-slide-group-item>
            <v-slide-group-item v-slot="{ isSelected, toggle }">
              <v-btn size="large" flat height="55"
                :color="isSelected ? useCookie('theme').value == 'myDark' ? '#14161a' : '#EDF9FF' : undefined"
                text="پرسش های بدون پاسخ" class="" :variant="isSelected ? 'flat' : 'text'" @click="toggle">
              </v-btn>
            </v-slide-group-item>
          </v-slide-group>
        </div>
      </v-col>
      <v-col cols="12" md="3">
        <div class="text-left">
          <v-menu location="bottom" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn :ripple="false" v-bind="props" text="مرتب سازی پرسش ها" class=" sorting" size="large"
                variant="text">
                <template v-slot:prepend>
                  <img src="/icons/sort-blue.svg" alt="" />
                </template>
                <template v-slot:append>
                  <img src="/icons/arrow-down-blue.svg" alt="" />
                </template>
              </v-btn>
            </template>

            <v-list class="drop-list">
              <v-list-item @click="x()">
                <v-list-item-title>هفته گذشته</v-list-item-title>
              </v-list-item>
              <v-list-item @click="x()">
                <v-list-item-title>جدید ترین</v-list-item-title>
              </v-list-item>
              <v-list-item @click="x()">
                <v-list-item-title>محبوب ترین ها</v-list-item-title>
              </v-list-item>
              <v-list-item @click="x()">
                <v-list-item-title>قدیمی ترین</v-list-item-title>
              </v-list-item>
              <v-list-item @click="x()">
                <v-list-item-title>ماه گذشته</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import SectionTitle from "./SectionTitle.vue";

const props = defineProps({
  showTitle: {
    type: Boolean,
  },
});

let selectedCategory = ref(null);
function x() {
  console.log("x");
}
</script>

<style>
.v-tabs--density-default {
  height: unset !important;
  --v-tabs-height: unset !important;
}

.btn-gp {
  overflow: hidden;
  border: 1px solid #4fc3f7;
  width: fit-content;
  max-width: 100%;
}

.sorting {
  transition: all 0.1s ease-in-out;
}

/* .sorting:hover {
  color: #4fc3f7;
} */

.categories .v-btn,
.drop-list,
.btn-gp {
  border-radius: 12px !important;
}
</style>
