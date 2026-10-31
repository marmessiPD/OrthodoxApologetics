import { lazy } from 'react';
import { createHashRouter, RouterProvider } from 'react-router';
import { Shell } from '@/components/app/Shell';
import Home from '@/pages/Home';
import { CategoryPage, TopicPage, TopicsPage } from '@/pages/Browse';
import NotFound from '@/pages/NotFound';

const ClaimPage = lazy(() => import('@/pages/ClaimPage'));
const People = lazy(() => import('@/pages/People').then((m) => ({ default: m.PeoplePage })));
const Person = lazy(() => import('@/pages/People').then((m) => ({ default: m.PersonPage })));
const Bookmarks = lazy(() => import('@/pages/Bookmarks'));
const About = lazy(() => import('@/pages/About'));

const router = createHashRouter([
  {
    element: <Shell />,
    children: [
      { index: true, element: <Home /> },
      { path: 'themen', element: <TopicsPage /> },
      { path: 'kategorie/:categoryId', element: <CategoryPage /> },
      { path: 'thema/:topicId', element: <TopicPage /> },
      { path: 'thema/:topicId/:claimId', element: <ClaimPage /> },
      { path: 'konzil', element: <People /> },
      { path: 'konzil/:personId', element: <Person /> },
      { path: 'gemerkt', element: <Bookmarks /> },
      { path: 'ueber', element: <About /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
