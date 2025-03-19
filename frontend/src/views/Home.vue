<template>
    <Layout>
        <div class="home-container">
            <div class="hero-section">
                <h1>Modern PHP + Vue Integration</h1>
                <p class="hero-text">
                    Build powerful web applications with the perfect combination of PHP backend and Vue.js frontend.
                    Leverage the strengths of both technologies for optimal performance and developer experience.
                </p>
                <div class="button-group">
                    <router-link to="/test" class="button button-primary">Try API Test</router-link>
                    <a href="#features" class="button button-outline">Explore Features</a>
                </div>
            </div>

            <div id="features" class="feature-section">
                <h2>Key Features</h2>
                <div class="feature-grid">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                        </div>
                        <h3>Modern Architecture</h3>
                        <p>Leverage the power of Vue.js components with PHP backend services for a clean, maintainable codebase.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                                <path d="M2 17l10 5 10-5"></path>
                                <path d="M2 12l10 5 10-5"></path>
                            </svg>
                        </div>
                        <h3>API Integration</h3>
                        <p>Seamlessly connect with RESTful APIs and third-party services to extend your application's capabilities.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                <line x1="8" y1="21" x2="16" y2="21"></line>
                                <line x1="12" y1="17" x2="12" y2="21"></line>
                            </svg>
                        </div>
                        <h3>Responsive Design</h3>
                        <p>Built with mobile-first approach to ensure your application looks great on all devices and screen sizes.</p>
                    </div>
                </div>
            </div>

            <div class="tech-section">
                <h2>Technology Stack</h2>
                <div class="tech-stack">
                    <div class="tech-item">
                        <div class="tech-badge badge badge-primary">Vue.js</div>
                        <p>Frontend framework for building interactive UIs</p>
                    </div>
                    <div class="tech-item">
                        <div class="tech-badge badge badge-neutral">PHP</div>
                        <p>Server-side scripting for robust backend services</p>
                    </div>
                    <div class="tech-item">
                        <div class="tech-badge badge badge-info">RESTful API</div>
                        <p>For seamless communication between frontend and backend</p>
                    </div>
                    <div class="tech-item">
                        <div class="tech-badge badge badge-success">Modern CSS</div>
                        <p>Clean, maintainable styles with CSS variables</p>
                    </div>
                </div>
            </div>

            <div class="cta-section">
                <h2>Ready to start building?</h2>
                <p>Test the API integration and see how PHP and Vue work together seamlessly.</p>
                <router-link to="/test" class="button button-primary">Go to API Test</router-link>
            </div>
        </div>
    </Layout>
</template>

<script>
import { onMounted } from 'vue';
import Layout from './Layout.vue';

export default {
    name: 'Home',
    components: {
        Layout
    },
    setup() {
        onMounted(() => {
            document.title = "PHP+Vue - Home";
        });
    }
};
</script>

<style scoped>
.home-container {
    display: flex;
    flex-direction: column;
    gap: var(--space-2xl);
}

.hero-section {
    text-align: center;
    padding: var(--space-xl) 0;
}

.hero-section h1 {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: var(--space-md);
    color: var(--color-text);
}

.hero-text {
    max-width: 800px;
    margin: 0 auto var(--space-xl);
    font-size: 1.125rem;
    color: var(--color-text-secondary);
}

.feature-section, .tech-section, .cta-section {
    padding: var(--space-xl) 0;
}

.feature-section h2, .tech-section h2, .cta-section h2 {
    text-align: center;
    margin-bottom: var(--space-xl);
}

.feature-card {
    background-color: var(--color-bg);
    border-radius: var(--radius-lg);
    padding: var(--space-xl);
    box-shadow: var(--shadow-sm);
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.feature-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
}

.feature-icon {
    background-color: var(--color-primary-light);
    color: white;
    width: 48px;
    height: 48px;
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--space-md);
}

.feature-card h3 {
    font-size: 1.25rem;
    margin-bottom: var(--space-sm);
}

.feature-card p {
    color: var(--color-text-secondary);
    margin-bottom: 0;
}

.tech-stack {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-lg);
}

.tech-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.tech-badge {
    margin-bottom: var(--space-sm);
    padding: var(--space-xs) var(--space-md);
    font-size: 0.875rem;
}

.tech-item p {
    font-size: 0.9375rem;
    margin-bottom: 0;
}

.cta-section {
    text-align: center;
    background-color: var(--color-bg-light);
    border-radius: var(--radius-lg);
    padding: var(--space-2xl) var(--space-xl);
    margin-top: var(--space-xl);
}

.cta-section h2 {
    margin-bottom: var(--space-sm);
}

.cta-section p {
    margin-bottom: var(--space-xl);
    color: var(--color-text-secondary);
}

.cta-section .button {
    padding: var(--space-sm) var(--space-xl);
}

@media (max-width: 768px) {
    .hero-section h1 {
        font-size: 1.75rem;
    }
    
    .hero-text {
        font-size: 1rem;
    }
    
    .feature-grid {
        grid-template-columns: 1fr;
        gap: var(--space-md);
    }
    
    .tech-stack {
        grid-template-columns: 1fr;
        gap: var(--space-lg);
    }
}
</style>