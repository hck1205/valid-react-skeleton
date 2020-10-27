import { lazy } from 'react';

export const Main = lazy(() => import('./main'));
export const About = lazy(() => import('./about'));
export const Path = lazy(() => import('./path'));
export const To = lazy(() => import('./path/to'));
export const Route = lazy(() => import('./path/to/route'));
