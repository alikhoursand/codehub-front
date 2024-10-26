<template>
  <section>
    <div :class="[`text-${size}`, 'text-right pt-5 pr-3 font-weight-light pb-5']">
      <v-icon :icon="icon" color="light-blue-lighten-2" class="ml-3"></v-icon>
      <span>{{ title }}</span>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "icon", "size"],
};
</script>

<style lang="scss" scoped></style>
