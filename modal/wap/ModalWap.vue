<template>
  <div class="wmodal" :style="{ zIndex: zIndex }">
    <div class="wmodal-bgc"></div>
    <div class="wmodal-main">
      <div class="wmodal-content">
        <slot></slot>
      </div>
      <div class="wmodal-btnGroup">
        <div class="wmodal-btnGroup-left" @click='cancelBtn'>{{cancelText}}</div>
        <div class="wmodal-btnGroup-right" @click='confirmBtn'>{{okText}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    okText: {
      type: String,
      default: '确定',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    zIndex: {
      type: Number,
      default: 999,
    },
  },
  methods: {
    cancelBtn() {
      this.$emit('cancel');
    },
    confirmBtn() {
      this.$emit('ok');
    },
  },
};
</script>

<style scoped lang="scss">
@import './modalwap.scss';
</style>
