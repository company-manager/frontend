import { SchemaFieldsType } from '@global-types/global.types'

const schema: SchemaFieldsType[] = [
	{
		type: 'input',
		name: 'email',
		placeholder: 'Email',
		pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
		error: {
			invalid: 'Email is invalid',
			required: 'Email is required',
		},
	},
	{
		type: 'input',
		name: 'password',
		placeholder: 'Password',
		error: {
			invalid: 'Password is invalid',
			required: 'Password is required',
			incorrect: 'Password is incorrect',
		},
	},
]

export default schema
