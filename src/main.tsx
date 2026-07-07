import { createRoot } from 'react-dom/client'
import { MainPage } from './ui/MainPage';

const rootEl = document.getElementById('root');
const reactRoot = createRoot(rootEl!);
reactRoot.render(<MainPage />);
