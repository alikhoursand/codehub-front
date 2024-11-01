<template>
  <div>
    <div class=" editprofile-holder">
      <div class="">
        <h5 class="text-h5 font-weight-bold">تغییر رمز عبور</h5>
      </div>
      <v-sheet class="mt-5 pa-0 pa-lg-5 py-3  rounding">
        <v-row class="ma-0">

          <v-col cols="12" lg="6">
            <label for="" class="text-h6">رمز عبور فعلی</label>
            <v-text-field placeholder="" flat hide-details class="rounding mt-2" variant="outlined"></v-text-field>
          </v-col>
        </v-row>
        <v-row class="ma-0">
          <v-col cols="12" lg="6">
            <label for="" class="text-h6">رمز عبور جدید</label>
            <v-text-field :type="visible ? 'text' : 'password'" placeholder="" flat hide-details class="rounding mt-2"
              variant="outlined">
              <template v-slot:prepend-inner>
                <img src="/icons/eye-dark.svg" @click="visible = false" v-if="visible" alt="">
                <img src="/icons/eye-slash.svg" @click="visible = true" v-else alt="">
              </template>
            </v-text-field>
          </v-col>

        </v-row>
        <div class="mt-5 text-left pa-3">
          <v-btn size="x-large" text="انصراف" @click="cancelEditing()" variant="outlined" flat
            color="light-blue-lighten-2 font-weight-light rounding"></v-btn>
          <v-btn size="x-large" text="ثبت تغییرات" variant="flat" flat
            color="light-blue-lighten-2 font-weight-light rounding  mr-2"></v-btn>
        </div>
      </v-sheet>


    </div>

  </div>
</template>

<script setup>

let visible = ref(false)

const emit = defineEmits(['cancelEdit']);
function cancelEditing() {
  emit('cancelEdit')
}
</script>

<style>
.editprofile-holder .v-field--appended {
  padding-inline-end: 5px;
}
</style>