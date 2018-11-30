export function isProduction() {
    return process.env.NODE_ENV === 'production'
}

export function isDevelopment() {
    return process.env.NODE_ENV === 'development'
}

// OR markup is pre-rendered on the server
export function isPreRenderedOnServer() {
    return process.env.SSR_MODE === 'activated'
}
