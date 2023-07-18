import React from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import {Button, menu} from 'antd'

export const Navigation = () => {
    return (
      <>
	<div style={{display: 'flex', justifycontent: 'center', flexdirection: 'row'}}>
	  <ul style={{liststyletype: 'none'}}>
	    <li><Link href="/">home</Link></li>
	    <li> <Link href="/about">about</Link></li>
	    <li> <Link href="/contact"> contact me </Link></li>
	    <li> <Link href="/mywork"> my work </Link> </li>
	  </ul>
	</div>
      </>
    )
}
