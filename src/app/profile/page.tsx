'use client'
import React from 'react'
import isAuth from '@hoc/isAuth'

const Profile = () => {
	return <div className="p-8">Hi</div>
}

export default isAuth(Profile)
