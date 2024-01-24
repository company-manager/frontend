export const isClient = typeof window !== 'undefined'
export const isServer = typeof window === 'undefined'

export const isDevelopment = process.env.NODE_ENV === 'development'
export const isProduction = process.env.NODE_ENV === 'production'
export const isTest = process.env.NODE_ENV === 'test'
