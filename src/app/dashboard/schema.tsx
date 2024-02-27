import { SchemaFieldsType, FieldEnum } from '@global-types/form/form.types'

const schema: SchemaFieldsType[] = [
	{
		type: FieldEnum.INPUT,
		inputType: 'text',
		name: 'firstName',
		required: true,
		label: 'First Name',
		error: {
			invalid: 'Este campo está inválido',
			required: 'Este campo é obrigatório',
		},
	},
	{
		type: FieldEnum.INPUT,
		inputType: 'text',
		name: 'lastName',
		required: true,
		label: 'Last Name',
		error: {
			invalid: 'Este campo está inválido',
			required: 'Este campo é obrigatório',
		},
	},
]

export default schema
