<template>
  <div class="footer">
    <div class="foot w">
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="foot-left">
            <p>© Copyright BTC.COM 2021. All Rights Reserved.</p>
            <p>粤ICP备15055280号-1</p>
          </div>
        </el-col>
        <el-col :span="16"><div class="grid-content bg-purple">2</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple">3</div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      msg: "Footer",
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
.footer {
  background-color: $ps052;
  padding-top: 28px;
  padding-bottom: 80px;
}
</style>