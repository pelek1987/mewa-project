import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { worker } from './app/mocks/browser';

import App from './app/app';

async function deferRender() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./app/mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

// // Start the mocking conditionally.
// if (process.env.NODE_ENV === 'development') {
//   worker.start();
// }

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

deferRender().then(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
