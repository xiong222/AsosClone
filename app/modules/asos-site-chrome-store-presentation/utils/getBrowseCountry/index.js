import _typeof from 'babel-runtime/helpers/typeof';
import { getBrowseCountry as getBrowseCountryCookie } from '../cookies/server';

const getBrowseCountryFromQueryString = function getBrowseCountryFromQueryString(req) {
  return _typeof(req.query) === 'object' && typeof req.query.browseCountry === 'string' && req.query.browseCountry;
};

const getBrowseCountryFromCookie = function getBrowseCountryFromCookie(req) {
  return req.cookies && getBrowseCountryCookie(req);
};

export default function getBrowseCountry(req) {
  return getBrowseCountryFromQueryString(req) || getBrowseCountryFromCookie(req) || '';
}
