import React from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import {Button, menu} from 'antd'

export const Navigation = () => {
    return (
      <>
	<div style={{display: 'flex', justifycontent: 'center', flexdirection: 'row'}}>
	  <ul style={{liststyletype: 'none'}}>
	    <li>home</li>
	    <li>about</li>
	    <li>contact me</li>
	    <li>my work</li>
	  </ul>
	</div>
      </>
    )
}
