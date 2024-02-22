import React, { useEffect } from 'react'
import { Input } from '@ui/input'
import { Label } from '@ui/label'
import { Button } from '@ui/button'
import { useForm, SubmitHandler } from 'react-hook-form'
import useAuth from '@hooks/useAuth'
import Heading from '@components/shared/heading/Heading'
import Text from '@components/shared/text/Text'
import Form from '@components/shared/form/Form'

type LoginDataType = {
	email: string
	password: string
}

const Login = () => {
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

				<Form />
			</div>
		</div>
	)
}

export default Login
