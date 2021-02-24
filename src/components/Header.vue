<template>
  <div class="header">
    <NavMenu />
  </div>
</template>

<script>
import NavMenu from "./NavMenu";
export default {
  name: "Header",
  data() {
    return {
      msg: "Header",
    };
  },
  create() {},
  mounted() {},
  methods: {},
  computed: {},
  components: { NavMenu },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
}
</style>