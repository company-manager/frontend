import { useRouter } from 'next/navigation'

const useRedirect = () => {
	const router = useRouter()

	const redirect = (url: string) => router.push(url)
	const replaceHistory = (url: string) => router.replace(url)

	return { redirect, replaceHistory }
}

export default useRedirect
