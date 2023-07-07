import React from 'react';
import { useRouter } from 'next/navigation';
import { Input, ConfigProvider, theme} from 'antd';
import { Html } from '@react-three/drei';

export const CustomSearch = () => {
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
			case 'help':
				<p>Hi!!</p>;
				break;
			default: 
				alert("Invalid command", value);
		}
	}

	return(
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
	)
}
