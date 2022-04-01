import {
  BrowserRouter,
  Routes as ReactRouterRoutes,
  Route
} from 'react-router-dom';
import { HomePage } from '../pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route path="/" element={<HomePage />} />
      </ReactRouterRoutes>
    </BrowserRouter>
  );
}
