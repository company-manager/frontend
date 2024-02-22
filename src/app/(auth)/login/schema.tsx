import { SchemaFieldsType, FieldEnum } from '@global-types/form/form.types'

const schema: SchemaFieldsType[] = [
	{
		type: FieldEnum.INPUT,
		name: 'email',
		pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
		required: true,
		label: 'Email',
		error: {
			invalid: 'Email is invalid',
			required: 'Email is required',
		},
	},
	{
		type: FieldEnum.INPUT,
		name: 'password',
		required: true,
		label: 'Password',
		error: {
			invalid: 'Password is invalid',
			required: 'Password is required',
			incorrect: 'Password is incorrect',
		},
	},
]

export default schema
