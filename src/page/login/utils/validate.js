export default function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function validatePassword(password) {
  const re = /^[^\s]{8,}$/;
  return re.test(String(password));
}

export function validateName(name) {
  const re = /^[A-Za-z\s]+$/;
  return re.test(String(name));
}

export function validatePhone(phone) {
  const re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
  return re.test(String(phone));
}

export function validateDocument(document) {
  const re = /^[0-9]{8,10}$/;
  return re.test(String(document));
}

export function validateNumber(number) {
  const re = /^[0-9]+$/;
  return re.test(String(number));
}

export function validateDate(date) {
  const re = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  return re.test(String(date));
}

export function validateRegister(email, password) {
    if (!validateEmail(email)) {
      return {msj:"Please enter a valid email address.", tp:"email"};
    }

    if (!validatePassword(password)) {
      return {
        msj:
          "Password must be at least 8 characters long and not contain spaces.",
        tp:"password",
      };
    }
  return false;
}
