import axios from 'axios'

const baseURL = process.env.API_ORIGIN || 'http://localhost:3003/api/v1'
const baseOptions = {
	baseURL,
}

const options = {
	baseURL,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
	withCredentials: true,
}

export const axiosPrivate = axios.create(options)

export default axios.create(baseOptions)
