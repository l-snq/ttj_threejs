'use client'
import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import { Alert, Input, Space, ConfigProvider, theme} from 'antd';
import { Html } from '@react-three/drei';

export default function CustomSearch() {
	const { Search } = Input;
	const router = useRouter();

	const handleSearch = (value) => {

		switch(value) {
			case 'cd about': 
				router.push('/about');
				break;
			case 'cd my_work':
				router.push('mywork');
				break;
			case 'cd contact':
				router.push('contact');
				break;
			default: 
				alert("Invalid command", value);
		}
	}

	return(
		<Html center style={{marginTop: '2em'}}>
			<ConfigProvider
				theme={{
					algorithm: theme.darkAlgorithm,
					token: {
						colorPrimary: "white",
					},
				}}
			>
			      <Search 
				placeholder='View the tooltip below to get a list of commands.'
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
