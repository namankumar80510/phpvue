<template>
    <div class="app-container">
        <header class="header">
            <div class="header-content">
                <div class="logo">
                    <router-link to="/">
                        <span class="logo-text">PHP<span class="plus">+</span>Vue</span>
                    </router-link>
                </div>
                <nav class="main-nav">
                    <router-link to="/" class="nav-link">Home</router-link>
                    <router-link to="/test" class="nav-link">Test API</router-link>
                </nav>
            </div>
        </header>

        <div class="main-container">
            <main class="main-content">
                <slot></slot>
            </main>
        </div>

        <footer class="footer">
            <div class="footer-content">
                <div class="footer-info">
                    <p>© {{ new Date().getFullYear() }} PHP+Vue Application</p>
                </div>
                <div class="footer-links">
                    <a href="#" class="footer-link">Privacy</a>
                    <a href="#" class="footer-link">Terms</a>
                    <a href="#" class="footer-link">Contact</a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Layout'
}
</script>

<style scoped>
.app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.header {
    background-color: var(--color-bg);
    box-shadow: var(--shadow-sm);
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.header-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--space-md) var(--space-xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    display: flex;
    align-items: center;
}

.logo-text {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.02em;
}

.plus {
    color: var(--color-primary);
    margin: 0 1px;
}

.main-nav {
    display: flex;
    gap: var(--space-lg);
}

.nav-link {
    position: relative;
    color: var(--color-text-secondary);
    font-weight: 500;
    padding: var(--space-sm) var(--space-xs);
    transition: color var(--transition-fast);
}

.nav-link:hover {
    color: var(--color-primary);
}

.nav-link.router-link-active {
    color: var(--color-primary);
}

.nav-link.router-link-active::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background-color: var(--color-primary);
    border-radius: 1px;
}

.main-container {
    flex: 1;
    background-color: var(--color-bg-light);
    padding: var(--space-xl) var(--space-md);
}

.main-content {
    max-width: 1200px;
    margin: 0 auto;
    background-color: var(--color-bg);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-md);
    padding: var(--space-xl);
    min-height: 70vh;
}

.footer {
    background-color: var(--color-bg);
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    padding: var(--space-lg) 0;
    margin-top: auto;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-xl);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-info p {
    font-size: 0.875rem;
    color: var(--color-text-light);
    margin: 0;
}

.footer-links {
    display: flex;
    gap: var(--space-lg);
}

.footer-link {
    font-size: 0.875rem;
    color: var(--color-text-light);
    transition: color var(--transition-fast);
}

.footer-link:hover {
    color: var(--color-primary);
}

@media (max-width: 768px) {
    .header-content, .footer-content {
        flex-direction: column;
        gap: var(--space-md);
        padding: var(--space-md);
    }

    .main-nav {
        width: 100%;
        justify-content: center;
    }
    
    .footer-links {
        margin-top: var(--space-sm);
    }
    
    .main-content {
        padding: var(--space-lg);
    }
}
</style>