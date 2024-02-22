import { WithKeyProps } from '@global-types/global.types'

type SchemaFieldErrorType = {
	invalid?: string
	required?: string
	incorrect?: string
}

type InputTypesEnum = 'text' | 'password' | 'number' | 'file'

export enum FieldEnum {
	INPUT = 'input',
	SELECT = 'select',
	RADIO = 'radio',
	CHECKBOX = 'checkbox',
}

export interface FieldPropsTypes extends SchemaFieldsType {
	register: any
}

export interface SchemaFieldsType {
	error?: SchemaFieldErrorType | undefined
	label?: string | undefined
	name: string
	pattern?: string | undefined
	placeholder?: string | undefined
	required: boolean
	type: FieldEnum
	inputType?: InputTypesEnum | undefined
}
