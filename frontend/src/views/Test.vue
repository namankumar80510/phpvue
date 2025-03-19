<template>
  <Layout>
    <div class="test-container">
      <h1>API Test Page</h1>

      <div v-if="loading" class="loading">
        Loading data...
      </div>

      <div v-else-if="error" class="error-message">
        {{ error }}
      </div>

      <div v-else class="card">
        <div class="response-item">
          <strong>Status:</strong>
          <span
            :class="{ 'badge badge-success': testData.status === 200, 'badge badge-danger': testData.status !== 200 }">
            {{ testData.status }}
          </span>
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

      <div class="button-group">
        <router-link to="/" class="button button-outline">Back to Home</router-link>
        <button @click="refreshData" class="button button-primary">Refresh Data</button>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from './Layout.vue'
import { ApiService } from '../services/api'

export default {
  name: 'TestPage',
  components: {
    Layout
  },
  data() {
    return {
      testData: null,
      loading: true,
      error: null
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = true
      this.error = null

      ApiService.getTest()
        .then(data => {
          this.testData = data
          this.loading = false
        })
        .catch(err => {
          this.error = 'Failed to fetch API data: ' + err.message
          this.loading = false
        })
    },
    refreshData() {
      this.fetchData()
    }
  }
}
</script>

<style scoped>
.test-container {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  margin-bottom: var(--space-xl);
}

.response-item {
  margin-bottom: var(--space-md);
}

.response-item strong {
  display: inline-block;
  width: 80px;
  color: var(--color-text);
  font-weight: 600;
}

.data-content {
  background-color: var(--color-bg-light);
  border-radius: var(--radius-md);
  padding: var(--space-md);
  margin-top: var(--space-sm);
  border: 1px solid var(--color-bg-dark);
}

.data-content pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
  background-color: transparent;
  padding: 0;
  border: none;
}

.button-group {
  margin-top: var(--space-xl);
}
</style>