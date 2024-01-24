import { isClient } from './runtime'

export function isAvailable(): boolean {
	try {
		return typeof sessionStorage.getItem === 'function'
	} catch (err) {
		return false
	}
}

export function get(key: string): string | null {
	try {
		return sessionStorage.getItem(key)
	} catch (err) {
		isClient && console.warn('sessionStorage API is not available')

		return null
	}
}

export function set(key: string, value: string): void {
	try {
		sessionStorage.setItem(key, value)
	} catch (err) {
		isClient && console.warn('sessionStorage API is not available')
	}
}

export function remove(key: string): void {
	try {
		sessionStorage.removeItem(key)
	} catch (err) {
		isClient && console.warn('sessionStorage API is not available')
	}
}

export function clear(): void {
	try {
		sessionStorage.clear()
	} catch (err) {
		isClient && console.warn('sessionStorage API is not available')
	}
}
