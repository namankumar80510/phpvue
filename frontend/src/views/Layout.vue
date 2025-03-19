<template>
    <div class="layout">
        <header>
            <nav>
                <router-link to="/">Home</router-link>
                <router-link to="/test">Test</router-link>
            </nav>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <p>© {{ new Date().getFullYear() }} PHP + Vue</p>
        </footer>
    </div>
</template>

<style scoped>
/* Add your layout styles here */
.layout {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
}
</style>

