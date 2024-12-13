<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style></style>
<script>

export default {
  data() {
    return {}
  },
  beforeCreate() {
    // 使用 window.location.replace 進行外部轉址
    window.location.replace('https://helloleemo.github.io/helloleemotseng/');
  }
};
</script>
