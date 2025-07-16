export const isLoginFormValid = (
  username: string,
  password: string,
  acceptTerms: boolean
): boolean => {
  return username.trim() !== "" && password.trim() !== "" && acceptTerms;
};
