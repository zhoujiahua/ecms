<template>
  <div class="tpl">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Tpl",
  data() {
    return {
      msg: "Tpl",
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
.tpl {
  width: 100%;
}
</style>