'use client'
import React from 'react'
import { Accessibility, BoxIcon, Hourglass } from 'lucide-react'
import { Badge } from '@ui/badge'


const Home = () => {
	
	return <div>
			<div className="flex items-center gap-4">
			<Accessibility size={16} />
			<Accessibility size={24} />
			<Accessibility size={48} />
			</div>
			<hr />
			<div className="flex items-center gap-4">
				<Badge size="small">Small</Badge>
				<Badge size="medium">Medium</Badge>
				<Badge>
					<BoxIcon />
					Box
				</Badge>
			</div>
			<h1 className='bg-red-500 text-3xl text-white py-3'>Hello World</h1>
		</div>
}

export default Home
