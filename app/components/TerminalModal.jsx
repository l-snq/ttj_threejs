import React, {useState, useEffect} from 'react';
import { Button, Modal} from 'antd';
import {CustomSearch} from './search';

export const TerminalModal = () => {
    const [isModalOpen, setIsModalOpen] = useState();

    const showModal = () => {
      setIsModalOpen(true);
    }

    const handleOk = () => {
      setIsModalOpen(false);
    }

    const handleCancel = () => {
      setIsModalOpen(false);
    }

    return( 
      <>
	<Button type="primary" onClick={showModal} style={{display: 'flex', width: "40px"}}>^</Button>	
	<Modal 
	  title="console"
	  open={isModalOpen}
	  onOk={handleOk}
	  onCancel={handleCancel}
	>
	<CustomSearch />
      </Modal>
      </>
    )
}
