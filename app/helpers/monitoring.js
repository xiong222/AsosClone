export const noticeError = error => {
  if (window.NREUM && window.NREUM.noticeError && error) {
    window.NREUM.noticeError(error);
  }
};
