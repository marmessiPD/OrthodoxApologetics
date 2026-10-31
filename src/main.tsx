import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/inter';
import '@fontsource-variable/literata';
import './index.css';
import App from './App';
import { TooltipProvider } from '@/components/ui/tooltip';
import { SplashScreen } from '@/components/app/Loading';
import { getKB } from '@/lib/content';
import { registerSW } from 'virtual:pwa-register';

getKB();
registerSW({ immediate: true });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TooltipProvider>
      <Suspense fallback={<SplashScreen />}>
        <App />
      </Suspense>
    </TooltipProvider>
  </StrictMode>,
);
