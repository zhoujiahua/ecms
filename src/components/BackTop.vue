<template>
  <div class="backtop">
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {
      msg: "BackTop",
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
.backtop {
  width: 100%;
}
</style>