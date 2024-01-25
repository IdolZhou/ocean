import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import zhCN from './langs/zh-CN.json';
import enUS from './langs/en-US.json';

const resources = {
  'zh-CN': {
    translation: zhCN,
  },
  'en-US': {
    translation: enUS,
  },
};

i18next.use(initReactI18next).init({
  fallbackLng: 'zh-CN',
  resources,
});
