'use client'
import React from 'react';
import { Input, Space, ConfigProvider, theme} from 'antd';

export default function CustomSearch() {
	const { Search } = Input;
	
	const onSearch = (value) => {
		// do some comparing	
		//
		if (value === 'cd about') {
			// link to about page
			console.log('about page');
		} else if (value === 'cd my_work') {
			console.log('my_work')
		} else if (value === 'cd contact'){
			console.log('contact me')
		} else if (value === 'help'){
			console.log('help is on the way')
		}
		else {
			console.log("invalid command: ", value)
		};
	}

	return(
		<>
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
				onSearch={onSearch}
				style={{
				  width: 304,
				}}
			      />
			</ConfigProvider>
		</>
	)
}
