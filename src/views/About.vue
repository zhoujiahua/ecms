<template>
  <div class="about">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      msg: "About",
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
.about {
  width: 100%;
}
</style>