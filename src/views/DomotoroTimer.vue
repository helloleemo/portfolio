<template>
  <div class="bg-primary">
    <v-container class="d-flex justify-center flex-column text-center">
      <h1>{{ formattedTime }}</h1>
      <v-icon icon="mdi-play" @click="startTimer" v-if="!timerRunning && !isPaused"></v-icon>
      <v-icon icon="mdi-pause" @click="pauseTimer" class="pause" v-if="timerRunning"></v-icon>
      <v-icon
        icon="mdi-play"
        @click="resumeTimer"
        class="start"
        v-if="!timerRunning && isPaused"
      ></v-icon>
      <v-btn @click="stopTimer" class="stop" v-if="timerRunning || isPaused"
        ><v-icon icon="mdi-stop"></v-icon>Stop</v-btn
      >
      <v-btn @click="toggleSettings"><v-icon icon="mdi-set"></v-icon>Settings</v-btn>
      <div class="settings-container" :class="{ show: settingsVisible }">
        <div v-if="toggleSettings">
          <label>Focus Time (min): </label>
          <input type="number" v-model="focusTime" min="1" />
        </div>
        <div>
          <label>Break Time (min): </label>
          <input type="number" v-model="breakTime" min="1" />
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      focusTime: 25,
      breakTime: 5,
      seconds: 0,
      timerRunning: false,
      isPaused: false,
      settingsVisible: false,
      interval: null,
      mode: 'focus', // 'focus' or 'break'
      toggleSettings: false
    }
  },
  computed: {
    formattedTime() {
      const minutes = String(Math.floor(this.seconds / 60)).padStart(2, '0')
      const seconds = String(this.seconds % 60).padStart(2, '0')
      return `${minutes}:${seconds}`
    }
  },
  methods: {
    startTimer() {
      if (!this.isPaused) {
        this.seconds = this.mode === 'focus' ? this.focusTime * 60 : this.breakTime * 60
      }
      this.timerRunning = true
      this.isPaused = false
      this.interval = setInterval(() => {
        if (this.seconds > 0) {
          this.seconds--
        } else {
          this.switchMode()
        }
      }, 1000)
    },
    pauseTimer() {
      this.timerRunning = false
      this.isPaused = true
      clearInterval(this.interval)
    },
    resumeTimer() {
      this.startTimer()
    },
    stopTimer() {
      this.timerRunning = false
      this.isPaused = false
      clearInterval(this.interval)
      this.seconds = this.focusTime * 60
    },
    switchMode() {
      this.mode = this.mode === 'focus' ? 'break' : 'focus'
      this.stopTimer()
      this.startTimer()
    },
    toggleSettings() {
      this.settingsVisible = !this.settingsVisible
    }
  },
  mounted() {
    this.seconds = this.focusTime * 60
  }
}
</script>
<style scoped>
template {
  background-color: #9c5555;
}
</style>
