import React from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import {Button, Menu, ConfigProvider, theme} from 'antd'
import { Html } from '@react-three/drei';

export const Navigation = () => {
    function getItem(label, key, icon, children, type) {
      return {
	key,
	icon, 
	children,
	label,
	type,
      }
    }

    const items = [
      getItem("Options", "option1", null, [
	getItem(<li style={{listStyleType: "none"}}><Link href="/">Home</Link></li>, "0"),
	getItem(<li style={{listStyleType: "none"}}><Link href="/about">About</Link></li>, "1"),
	getItem(<li style={{listStyleType: "none"}}><Link href="/contact">Contact</Link></li>, "2"),
	getItem(<li style={{listStyleType: "none"}}><Link href="/mywork">My Work</Link></li>, "3"),
      ])
    ]

    const onClick = (e) => {
      console.log("click", e);
    }

    return (
      <Html
      center
      style={{marginLeft: -288}}>
	<ConfigProvider
	  theme={{algorithm: theme.darkAlgorithm}}
	>
	  <Menu
	    onClick={onClick}
	    style={{width: 256,}}
	    defaultSelectedKeys={
	      ['1']
	    }
	    defaultOpenKeys={['sub1']}
	    mode="inline"
	    items={items}
	  />
	</ConfigProvider>
      </Html>
    )
}
