export const isCedulaValid = (cedula: string): boolean => {
  return /^\d{7,10}$/.test(cedula);
};

export const isLoginFormValid = (
  username: string,
  password: string,
  cedula: string,
  acceptTerms: boolean
): boolean => {
  const userOk = username.trim() !== "";
  const passOk = password.trim() !== "";
  const cedulaOk = isCedulaValid(cedula);
  return userOk && passOk && cedulaOk && acceptTerms;
};
