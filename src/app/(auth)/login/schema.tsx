import { SchemaFieldsType, FieldEnum } from '@global-types/form/form.types'

const schema: SchemaFieldsType[] = [
	{
		type: FieldEnum.INPUT,
		inputType: 'text',
		name: 'email',
		pattern: new RegExp(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/).source,
		required: true,
		label: 'Email',
		error: {
			invalid: 'Este campo está inválido',
			required: 'Este campo é obrigatório',
		},
	},
	{
		type: FieldEnum.INPUT,
		inputType: 'password',
		name: 'password',
		required: true,
		label: 'Password',
		error: {
			invalid: 'Este campo está inválido',
			required: 'Este campo é obrigatório',
		},
	},
]

export default schema
