import React from 'react'
import Heading from '@components/shared/heading/Heading'
import Text from '@components/shared/text/Text'
import Form from '@components/shared/form/Form'
import schema from './schema'

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

				<Form formName="login-form" schema={schema} />
			</div>
		</div>
	)
}

export default Login
