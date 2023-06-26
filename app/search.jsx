'use client'
import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import { Input, Space, ConfigProvider, theme} from 'antd';
import { Html } from '@react-three/drei';

export default function CustomSearch() {
	const { Search } = Input;
	const router = useRouter();

	const handleSearch = (value) => {

		if (value === 'cd about') {
			// link to about page
			console.log('about page')
			router.push('/about');
		} else if (value === 'cd my_work') {
			console.log('my_work')
			router.push('/mywork');
		} else if (value === 'cd contact'){
			console.log('contact me')
			router.push('/contact');
		} else if (value === 'help'){
			console.log('help is on the way')
		}
		else {
			console.log(`invalid command: '${value}'`)
		};

	}

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
				onSearch={handleSearch}
				style={{
				  width: 304,
				}}
			      />
			</ConfigProvider>
		</Html>
	)
}
