<template>
  <v-container>
    <v-select
      ref="loc"
      v-model="selectedLocationName"
      class="mx-auto"
      :items="this.locationNames"
      max-width="368"
      clearable
      label="選擇城市"
      variant="outlined"
    ></v-select>
    <v-card hover class="mx-auto" max-width="368">
      <v-card-item>
        <v-card-title class="text-h4">title</v-card-title>
        <v-card-subtitle>subtitle</v-card-subtitle>
        <v-icon class="me-1 pb-1" color="error" icon="mdi-alert" size="18"></v-icon>
      </v-card-item>

      <v-card-text class="py-0">
        <v-row align="center" no-gutters>
          <v-col class="text-h2" cols="6"> 30&deg;C </v-col>

          <v-col class="text-right" cols="6">
            <v-icon color="error" icon="mdi-weather-hurricane" size="88"></v-icon>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>

      <div class="d-flex py-3 justify-space-between">
        <v-list-item density="compact" prepend-icon="mdi-weather-windy">
          <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
        </v-list-item>

        <v-list-item density="compact" prepend-icon="mdi-weather-pouring">
          <v-list-item-subtitle>48%</v-list-item-subtitle>
        </v-list-item>
      </div>

      <v-expand-transition>
        <div>
          <v-list class="bg-transparent">
            <v-list-item
              v-for="item in forecast"
              :key="item.day"
              :append-icon="item.icon"
              :subtitle="item.temp"
              :title="item.day"
            >
            </v-list-item>
          </v-list>
        </div>
      </v-expand-transition>
    </v-card>
  </v-container>
</template>

<script>
const api = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${import.meta.env.VITE_API_KEY}`

export default {
  data() {
    return {
      selectedLocationName: '請選擇縣市',
      selectedLocation: {},
      locationNames: [],
      locations: [],
      forecast: {
        day: 'Tuesday',
        icon: 'mdi-white-balance-sunny',
        temp: '24\xB0/12\xB0'
      }
    }
  },
  methods: {
    getInfo() {
      //   console.log(api)
      this.axios
        .get(api)
        .then((res) => {
          //   console.log(res.data.records.location)
          this.locations = res.data.records.location
          //   console.log(this.locations.locationName)
          this.locationNames = this.locations.map((item) => {
            return item.locationName
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    updateInfo() {
      const selectedItem = this.locations.filter((item) => {
        return item.locationName.match(this.selectedLocationName)
      })
      this.selectedLocation = selectedItem
      console.log(selectedItem)
    },
    getSelectedInfo(loc) {
      //   this.forecast = loc.weatherElement[0].time.map((time, index) => {
      //     return {
      //       day: time.startTime.substring(0, 10),
      //       icon: 'mdi-weather-partly-cloudy',
      //       temp: `${time.parameter.parameterName}°/${loc.weatherElement[1].time[index].parameter.parameterName}°`
      //     }
      //   })
    }
  },

  mounted() {
    this.getInfo()
    this.updateInfo()
  }
}
</script>

<style scoped>
/* 添加样式根据需要 */
</style>
