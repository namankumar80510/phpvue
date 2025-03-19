<template>
    <router-view />
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
/* Modern Design System */
:root {
    /* Color palette - clean, professional, modern */
    --color-primary: #1565c0;
    --color-primary-light: #1976d2;
    --color-primary-dark: #0d47a1;
    --color-secondary: #546e7a;
    --color-accent: #03a9f4;
    
    /* Neutrals */
    --color-bg: #ffffff;
    --color-bg-light: #f5f7fa;
    --color-bg-dark: #e4e7eb;
    
    /* Text colors */
    --color-text: #263238;
    --color-text-secondary: #455a64;
    --color-text-light: #78909c;
    --color-text-inverse: #ffffff;
    
    /* Status colors */
    --color-success: #2e7d32;
    --color-success-light: #e8f5e9;
    --color-danger: #d32f2f;
    --color-danger-light: #ffebee;
    --color-warning: #f57c00;
    --color-warning-light: #fff3e0;
    --color-info: #0288d1;
    --color-info-light: #e1f5fe;
    
    /* Elevation (shadows) */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    
    /* Spacing */
    --space-xs: 0.25rem;  /* 4px */
    --space-sm: 0.5rem;   /* 8px */
    --space-md: 1rem;     /* 16px */
    --space-lg: 1.5rem;   /* 24px */
    --space-xl: 2rem;     /* 32px */
    --space-2xl: 3rem;    /* 48px */
    
    /* Border radius */
    --radius-sm: 0.25rem; /* 4px */
    --radius-md: 0.375rem; /* 6px */
    --radius-lg: 0.5rem;  /* 8px */
    --radius-xl: 0.75rem; /* 12px */
    
    /* Transitions */
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-normal: 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Base styles */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-size: 16px;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
        'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--color-text);
    background-color: var(--color-bg-light);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

img {
    max-width: 100%;
    height: auto;
}

a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color var(--transition-fast);
}

a:hover {
    color: var(--color-primary-light);
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
    margin-bottom: var(--space-md);
    font-weight: 600;
    line-height: 1.2;
    color: var(--color-text);
}

h1 {
    font-size: 1.875rem;
}

h2 {
    font-size: 1.5rem;
}

h3 {
    font-size: 1.25rem;
}

h4 {
    font-size: 1.125rem;
}

p {
    margin-bottom: var(--space-md);
    color: var(--color-text-secondary);
    font-size: 1rem;
}

/* Card component */
.card {
    background-color: var(--color-bg);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    padding: var(--space-xl);
    margin-bottom: var(--space-lg);
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
    border: 1px solid rgba(0, 0, 0, 0.05);
}

.card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

/* Button styles */
.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-sm) var(--space-lg);
    font-size: 0.9375rem;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    transition: all var(--transition-normal);
    height: 2.5rem;
}

.button-primary {
    background-color: var(--color-primary);
    color: var(--color-text-inverse);
}

.button-primary:hover {
    background-color: var(--color-primary-dark);
    color: var(--color-text-inverse);
}

.button-secondary {
    background-color: var(--color-secondary);
    color: var(--color-text-inverse);
}

.button-secondary:hover {
    background-color: var(--color-text-secondary);
}

.button-outline {
    background-color: transparent;
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
}

.button-outline:hover {
    background-color: var(--color-primary);
    color: var(--color-text-inverse);
}

.button-text {
    background-color: transparent;
    color: var(--color-primary);
}

.button-text:hover {
    background-color: rgba(21, 101, 192, 0.1);
    color: var(--color-primary-dark);
}

/* Badge / Tag / Lozenge */
.badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-xs) var(--space-sm);
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: var(--radius-sm);
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 0.03em;
}

.badge-primary {
    background-color: var(--color-primary-light);
    color: var(--color-text-inverse);
}

.badge-success {
    background-color: var(--color-success-light);
    color: var(--color-success);
}

.badge-danger {
    background-color: var(--color-danger-light);
    color: var(--color-danger);
}

.badge-warning {
    background-color: var(--color-warning-light);
    color: var(--color-warning);
}

.badge-info {
    background-color: var(--color-info-light);
    color: var(--color-info);
}

.badge-neutral {
    background-color: var(--color-bg-dark);
    color: var(--color-text-secondary);
}

/* States: Loading & Error */
.loading {
    display: flex;
    align-items: center;
    color: var(--color-text-light);
    font-size: 0.9375rem;
}

.loading::before {
    content: "";
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border: 2px solid var(--color-bg-dark);
    border-radius: 50%;
    border-top-color: var(--color-primary);
    animation: spin 0.8s linear infinite;
    margin-right: var(--space-sm);
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.error-message {
    background-color: var(--color-danger-light);
    color: var(--color-danger);
    padding: var(--space-md);
    border-radius: var(--radius-md);
    margin-bottom: var(--space-md);
    font-size: 0.9375rem;
    display: flex;
    align-items: center;
}

.error-message::before {
    content: "!";
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: var(--color-danger);
    color: white;
    font-weight: bold;
    margin-right: var(--space-sm);
    flex-shrink: 0;
}

/* Grid layout */
.grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: var(--space-md);
}

/* Feature grid */
.feature-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-lg);
    margin: var(--space-xl) 0;
}

/* Button groups */
.button-group {
    display: flex;
    gap: var(--space-md);
    margin-top: var(--space-lg);
}

/* Form elements */
input, select, textarea {
    width: 100%;
    padding: var(--space-sm) var(--space-md);
    border: 1px solid var(--color-bg-dark);
    border-radius: var(--radius-md);
    background-color: var(--color-bg);
    font-size: 0.9375rem;
    color: var(--color-text);
    transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: var(--color-primary-light);
    box-shadow: 0 0 0 3px rgba(21, 101, 192, 0.12);
}

label {
    display: block;
    margin-bottom: var(--space-xs);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-text-secondary);
}

.form-group {
    margin-bottom: var(--space-md);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .feature-grid {
        grid-template-columns: 1fr;
    }
    
    .button-group {
        flex-direction: column;
    }
    
    .button {
        width: 100%;
    }
}

@media (max-width: 480px) {
    html {
        font-size: 15px;
    }
    
    .card {
        padding: var(--space-lg);
    }
}

/* Table styles */
table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin-bottom: var(--space-xl);
    border: 1px solid var(--color-bg-dark);
    border-radius: var(--radius-md);
    overflow: hidden;
}

thead {
    background-color: var(--color-bg-light);
}

th {
    text-align: left;
    padding: var(--space-md);
    font-weight: 600;
    color: var(--color-text);
    border-bottom: 2px solid var(--color-bg-dark);
    font-size: 0.875rem;
}

td {
    padding: var(--space-md);
    border-bottom: 1px solid var(--color-bg-dark);
    font-size: 0.875rem;
}

tbody tr {
    background-color: var(--color-bg);
    transition: background-color var(--transition-fast);
}

tbody tr:hover {
    background-color: var(--color-bg-light);
}

tbody tr:last-child td {
    border-bottom: none;
}

/* Code display */
pre {
    background-color: var(--color-bg-light);
    padding: var(--space-md);
    border-radius: var(--radius-md);
    overflow-x: auto;
    font-family: 'Fira Code', 'Roboto Mono', Menlo, Monaco, Consolas, monospace;
    font-size: 0.875rem;
    line-height: 1.6;
    margin-bottom: var(--space-lg);
    border: 1px solid var(--color-bg-dark);
}

code {
    font-family: 'Fira Code', 'Roboto Mono', Menlo, Monaco, Consolas, monospace;
    font-size: 0.875em;
    background-color: var(--color-bg-light);
    padding: 0.125rem 0.25rem;
    border-radius: var(--radius-sm);
}
</style>