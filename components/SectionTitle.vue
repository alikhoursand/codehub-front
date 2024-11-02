<template>
  <section>
    <div :class="[`text-${size}`, 'text-right pt-5 pr-3  d-flex align-center pb-5']">
      <img :src="`/icons/${icon}`" class="ml-3" height="36" width="36">
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
