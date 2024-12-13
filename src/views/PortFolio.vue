<template>
  <router-view />
</template>
<script>

export default {
  data() {
    return {
    }
  },
  beforeCreate() {
    window.location.replace('https://helloleemo.github.io/helloleemotseng/')
  }

}
</script>
