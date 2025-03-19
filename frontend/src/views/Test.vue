<template>
  <div class="test-container">
    <h1>API Test Page</h1>
    <div v-if="loading" class="loading">
      Loading...
    </div>
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    <div v-else class="api-response">
      <div class="response-item">
        <strong>Status:</strong>
        <span :class="{ 'success': testData.status === 200 }">{{ testData.status }}</span>
      </div>
      <div class="response-item">
        <strong>Message:</strong>
        <span>{{ testData.message }}</span>
      </div>
      <div class="response-item">
        <strong>Data:</strong>
        <div class="data-content">
          <pre>{{ JSON.stringify(testData.data, null, 2) }}</pre>
        </div>
      </div>
    </div>

    <router-link to="/">Go back to home</router-link>
  </div>
</template>

<script>
import { ApiService } from '../services/api'

export default {
  data () {
    return {
      testData: null,
      loading: true,
      error: null
    }
  },
  mounted () {
    ApiService.getTest()
      .then(data => {
        this.testData = data
        this.loading = false
      })
      .catch(err => {
        this.error = 'Failed to fetch API data: ' + err.message
        this.loading = false
      })
  }
}
</script>

<style scoped>
.test-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #2c3e50;
  margin-bottom: 30px;
}

.loading {
  text-align: center;
  color: #666;
  padding: 20px;
}

.error {
  color: #dc3545;
  padding: 20px;
  border: 1px solid #dc3545;
  border-radius: 4px;
}

.api-response {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.response-item {
  margin-bottom: 15px;
}

.response-item strong {
  display: inline-block;
  width: 80px;
  color: #2c3e50;
}

.success {
  color: #28a745;
}

.data-content {
  background: #fff;
  border-radius: 4px;
  padding: 15px;
  margin-top: 10px;
}

.data-content pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
