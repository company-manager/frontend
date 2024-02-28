import React from 'react'
import Heading from '@components/shared/heading/Heading'
import Text from '@components/shared/text/Text'
import LoginForm from './(components)/LoginForm'
import Notification from '@components/shared/notification/Notification'

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
					<div>
						<Notification />
					</div>
				</div>
			</div>

			<LoginForm />
		</div>
	)
}

export default Login
