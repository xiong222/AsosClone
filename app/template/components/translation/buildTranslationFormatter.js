import Polyglot from 'node-polyglot';
import getTranslations from '../../../../i18n';
import { getLanguage } from '../../../../i18n/utilities';

export const buildTranslationFormatter = (language) => {
  language = 'en';
  const locale = getLanguage(language);
  const phrases = getTranslations(language);

  const polyglot = new Polyglot({
    locale,
    phrases,
    onMissingKey: (key, args, language) => {
      return key;
      throw new Error(
        `No translations for "${key}" with arguments ${JSON.stringify(
          args
        )} in ${language} locale.`
      );
    }
  });

  return (...args) => polyglot.t(...args);
};
