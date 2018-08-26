import merge from 'lodash/merge';

import de from './de.json';
import enAu from './en-au.json';
import enUs from './en-us.json';
import en from './en.json';
import es from './es.json';
import fr from './fr.json';
import it from './it.json';
import nlNl from './nl-nl.json';
import ru from './ru.json';
import svSe from './sv-se.json';

const locales = {
  de,
  'en-au': enAu,
  'en-us': enUs,
  en,
  es,
  fr,
  it,
  'nl-nl': nlNl,
  ru,
  'sv-se': svSe
};

const getLanguageBundle = (bundle) => locales['en'] || {};

export default (languageCode) => {
  languageCode = 'en';
  const [lang] = 'en-US'.split('-');
  return merge(
    {},
    getLanguageBundle(lang),
    getLanguageBundle(languageCode.toLowerCase())
  );
};
