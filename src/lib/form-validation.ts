// src/lib/form-validation.ts
export const isLoginFormValid = (
  username: string,
  cedula: string,
  password: string,
  acceptTerms: boolean
): boolean => {
  const cedulaRegex = /^\d{10}$/;
  return (
    username.trim() !== "" &&
    password.trim() !== "" &&
    cedulaRegex.test(cedula) &&
    acceptTerms
  );
};
