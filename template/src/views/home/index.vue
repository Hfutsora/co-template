<template>
  <div class="home-wrapper">
    <img src="@/assets/logo.png" />
    <div>
      {{ msg }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      msg: 'Hello, World',
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.home-wrapper {
  text-align: center;
  margin: 24px 0;
}
</style>
