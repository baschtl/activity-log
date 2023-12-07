import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';
import activities from './activities.json';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App activities={activities} />
  </React.StrictMode>
);
