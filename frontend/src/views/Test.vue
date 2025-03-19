<template>
  <div>
    <h1>Test API</h1>
    <p v-if="loading">Loading...</p>
    <pre v-else>{{ JSON.stringify(testData, null, 2) }}</pre>
  </div>
</template>

<script>
import { ApiService } from '../services/api'

export default {
  data () {
    return {
      testData: null,
      loading: true
    }
  },
  mounted () {
    ApiService.getTest()
      .then(data => {
        this.testData = data
        this.loading = false
      })
  }
}
</script>
