import React from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import {Button, Menu, ConfigProvider, theme} from 'antd'

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
	getItem(<li style={{listStyle: "none"}}><Link href="/">home</Link></li>, "0"),
	getItem(<li style={{listStyle: "none"}}><Link href="/about">about</Link></li>, "1"),
	getItem(<li style={{listStyle: "none"}}><Link href="/contact">contact</Link></li>, "2"),
	getItem(<li style={{listStyle: "none"}}><Link href="/mywork">mywork</Link></li>, "3"),
      ])
    ]
    const onClick = (e) => {
      console.log("click", e);
    }
    return (
      <>
	<ConfigProvider
	 theme={{
	   algorithm: theme.darkAlgorithm,
	 }} 
	> 
	<div>
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
	</div>
	</ConfigProvider>
      </>
    )
}
