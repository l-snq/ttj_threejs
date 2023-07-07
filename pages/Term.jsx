'use client'
import React from 'react'
import dynamic from 'next/dynamic';

const TerminalComponent = dynamic(() => import('../app/components/TerminalModal'), {
    ssr: false
})

export default function Term() {

	return (
		<>
			<TerminalComponent />	
		</>
	)
}
