import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Heading from '@components/shared/heading/Heading'
import Text from '@components/shared/text/Text'
import Form from '@components/shared/form/Form'
import schema from './schema'
import useAuth from '@hooks/useAuth'
import { LoginDataType } from '@context/auth/types'

const Login = () => {
	const { login } = useAuth()
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<LoginDataType>()

	const onSubmit: SubmitHandler<LoginDataType> = async (data) => {
		const { email, password } = data
		await login({ email, password })
	}

	return (
		<div className="c_border flex-grow !py-16">
			<div className="flex gap-16 flex-col items-center mx-auto max-w-88">
				<div className="flex flex-col gap-4 items-center">
					<Heading>Login</Heading>
					<Text isCenter={true} variant="secondary" size="xs">
						Insere os dados de acesso para fazer login na tua conta
						para acederes ao dashboard.
					</Text>
				</div>

				<Form
					formName="login-form"
					onSubmit={handleSubmit(onSubmit)}
					register={register}
					schema={schema}
					errors={errors}
				/>
			</div>
		</div>
	)
}

export default Login
