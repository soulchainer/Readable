import React from 'react';
/* eslint-disable  import/no-extraneous-dependencies */
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
/* eslint-enable  import/no-extraneous-dependencies */

const Monitors = (
  <DockMonitor
    toggleVisibilityKey="ctrl-,"
    changePositionKey="ctrl-alt-,"
    defaultIsVisible={false}
  >
    <LogMonitor theme="tomorrow" />
  </DockMonitor>
);

const DevTools = createDevTools(Monitors);

export default DevTools;
