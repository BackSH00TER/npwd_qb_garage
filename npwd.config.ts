import App from './src/App';
import { AppIcon } from './icon';
import { theme } from './src/app.theme';

const defaultLanguage = 'en';
const localizedAppName = {
  en: 'Garage',
};

interface Settings {
  language: 'en';
}

export default (settings: Settings) => ({
  id: 'APP_NAME',
  nameLocale: localizedAppName[settings?.language ?? defaultLanguage],
  color: '#fff',
  backgroundColor: '#333',
  path: '/garage',
  icon: AppIcon,
  app: App,
  theme: theme,
});
