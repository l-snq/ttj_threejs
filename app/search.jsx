'use client'
import React, {useEffect, useState} from 'react';
import { Input, Space, ConfigProvider, theme} from 'antd';
import { Html } from '@react-three/drei';


export const OnSearch = (value) => {

	if (value === 'cd about') {
		// link to about page
		console.log('about page')
	} else if (value === 'cd my_work') {
		console.log('my_work')
	} else if (value === 'cd contact'){
		console.log('contact me')
	} else if (value === 'help'){
		console.log('help is on the way')
		return <div>help page</div>
	}
	else {
		console.log(`invalid command: '${value}'`)
	};
	return(
		<div>{value}</div>
	)
}


export default function CustomSearch(value) {
	const { Search } = Input;

	return(
		<Html center>
			<ConfigProvider
				theme={{
					algorithm: theme.darkAlgorithm,
					token: {
						colorPrimary: "white",
					},
				}}
			>
			      <Search 
				placeholder='type "help" to get commands'
				allowClear
				onSearch={OnSearch}
				style={{
				  width: 304,
				}}
			      />
			</ConfigProvider>
		</Html>
	)
}
