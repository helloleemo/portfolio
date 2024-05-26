<script>
// import TheWelcome from '../components/TheWelcome.vue'
export default {
  data() {
    return {}
  },
  methods: {
    getToIndex() {
      this.$router.push('/portfolio/home')
    }
  },
  created() {
    this.getToIndex()
  }
}
</script>

<template>
  Homeview
  <!-- <main>
    <TheWelcome />
  </main> -->
</template>
