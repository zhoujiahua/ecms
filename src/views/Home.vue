<template>
  <div class="home">
    <Banner />
  </div>
</template>

<script>
import Banner from "@/components/Banner";
export default {
  name: "Home",
  data() {
    return {
      msg: "Home",
    };
  },
  create() {},
  mounted() {},
  methods: {},
  computed: {},
  components: { Banner },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height:1000px;
}
</style>