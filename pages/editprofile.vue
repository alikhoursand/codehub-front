<template>
  <div class="mt-5">
    <v-row class="ma-0 justify-end">
      <v-col cols="12" lg="9" class="pt-0">
        <v-sheet class="rounding pa-3" flat>
          <v-sheet class="light-bg bg-holder rounding " height="250" elevation="2">
            <v-icon icon="mdi-image-plus" size="x-large" class="add-img-icon" color="light-blue-lighten-2"></v-icon>


            <div class="editprofile-av-img">
              <!-- <v-img :eager="true" rounded="circle" class="mx-auto editprofile-avatar" cover
                src="https://picsum.photos/250/300?image=100" :aspect-ratio="1 / 1" width="180"></v-img> -->
              <div class="editprofile-avatar d-flex justify-center align-center light-bg alter">
                <v-icon icon="mdi-image-plus" size="x-large" color="light-blue-lighten-2"></v-icon>
              </div>
            </div>


          </v-sheet>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row class="ma-0" style="margin-top: 7rem !important;">
      <v-col cols="12" lg="3">
        <div class="d-block d-lg-none">
          <v-btn text="منوی پنل کاربری" prepend-icon="mdi-menu" class="rounding font-weight-light"
            color="light-blue-lighten-2" flat size="large"></v-btn>
        </div>
        <div class="d-none d-lg-block">
          <v-sheet class="pa-5 rounding"></v-sheet>
        </div>
      </v-col>
      <v-col cols="12" lg="9">2</v-col>
    </v-row>
  </div>
</template>

<script setup>

</script>

<style>
.bg-holder {
  position: relative;
}

.add-img-icon {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
</style>