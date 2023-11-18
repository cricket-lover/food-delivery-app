export const isEmailValid = (email) => {
  const atPos = email.indexOf("@");
  const dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
};
