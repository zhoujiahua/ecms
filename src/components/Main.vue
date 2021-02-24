<template>
  <div class="main">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      msg: "Main",
    };
  },
  create() {},
  mounted() {},
  methods: {},
  computed: {},
  components: {},
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
}
</style>