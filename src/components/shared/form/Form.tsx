'use client'
import { useForm, SubmitHandler } from 'react-hook-form'

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginDataType>()

	return <form onSubmit={handleSubmit(onSubmit)} className="w-full"></form>
}

export default Form
