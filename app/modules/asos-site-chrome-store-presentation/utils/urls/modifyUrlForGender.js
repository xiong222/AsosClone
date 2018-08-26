import genderTranslations from '../store/genderTranslationsByLang.json';

const defaultLanguage = 'en';

export default function modifyUrlForGender(gender, lang, url) {
  if (!gender || !lang || !url) {
    return;
  }

  if (!genderTranslations[lang]) {
    lang = defaultLanguage;
  }

  const translationForGender = genderTranslations[lang][gender];
  const updatedUrl = `${url}/${translationForGender}`;

  return updatedUrl;
}
