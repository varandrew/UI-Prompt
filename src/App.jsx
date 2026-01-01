import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { AppProviders } from './components/AppProviders';
import { Loading } from './components/ui/Loading';


function App() {
  return (
    <AppProviders>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </AppProviders>
  );
}

export default App;
