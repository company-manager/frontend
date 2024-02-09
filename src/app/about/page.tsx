import React from 'react'

const Home = () => {
	return (
		<div className="p-8">
			{false ? (
				<h1 className="text-5xl">About</h1>
			) : (
				<h1>You have no permission to se this page</h1>
			)}
		</div>
	)
}

export default Home
