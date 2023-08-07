import React, {useState, useEffect} from 'react';
import { Button, Modal} from 'antd';
import {CustomSearch} from './search';
import 'node_modules/xterm/css/xterm.css';
import { Terminal } from 'xterm';

export default function TerminalModal() {
  // TODO! this is still broken. We need to fix this!!

	var term = new Terminal();
	term.open(document.getElementById('terminal'));
	term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')

    return( 
      <>
	<div id="terminal">
	</div>
      </>
    )
}
