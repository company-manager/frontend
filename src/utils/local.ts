import { isClient } from './runtime'

export function isAvailable(): boolean {
	try {
		return typeof localStorage.getItem === 'function'
	} catch (err) {
		return false
	}
}

export function get(key: string): string | null {
	try {
		return localStorage.getItem(key)
	} catch (err) {
		isClient && console.warn('localStorage API is not available')

		return null
	}
}

export function set(key: string, value: string): void {
	try {
		localStorage.setItem(key, value)
	} catch (err) {
		isClient && console.warn('localStorage API is not available')
	}
}

export function remove(key: string): void {
	try {
		localStorage.removeItem(key)
	} catch (err) {
		isClient && console.warn('localStorage API is not available')
	}
}

export function clear(): void {
	try {
		localStorage.clear()
	} catch (err) {
		isClient && console.warn('localStorage API is not available')
	}
}
