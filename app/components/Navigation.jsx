import React from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import {Button, Menu} from 'antd'

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
	getItem(<li><Link href="/">home</Link></li>, "0"),
	getItem(<li><Link href="/about">about</Link></li>, "1"),
	getItem(<li><Link href="/contact">contact</Link></li>, "2"),
	getItem(<li><Link href="/mywork">mywork</Link></li>, "3"),
      ])
    ]
    const onClick = (e) => {
      console.log("click", e);
    }
    return (
      <>
	<div style={{display: 'flex', justifycontent: 'center', flexdirection: 'row'}}>
	  <ul style={{liststyletype: 'none', flexDirection: 'row'}}>
	    <li><Link href="/">home</Link></li>
	    <li><Link href="/about">about</Link></li>
	    <li><Link href="/contact"> contact me </Link></li>
	    <li><Link href="/mywork"> my work </Link> </li>
	  </ul>

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
      </>
    )
}
