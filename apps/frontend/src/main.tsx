import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

async function deferRender() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

deferRender().then(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
