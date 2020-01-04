const validateString = (regex, message) => str => ({
  isValid: regex.test(str),
  messages: [message]
});

export const validateName = validateString(
  /^[a-zA-Z]+$/,
  "Please enter valid name"
);

export const validateAddress = validateString(
  /^\d+\s[A-z]+\s[A-z]+/g,
  "Please enter valid address"
);

export const validateInputFields = formInputSchema => {
  const validationArray = [
    validateName(formInputSchema.firstName),
    validateName(formInputSchema.lastName),
    validateAddress(formInputSchema.addressOne)
  ];

  const reduceValidations = validationArray.reduce(
    (acc, validation) => {
      console.log("acc", acc, "validation", validation);
      const messages = validation.isValid
        ? acc.messages
        : [...acc.messages, validation.messages];

      return { isValid: acc.isValid && validation.isValid, messages };
    },
    { isValid: true, messages: [] }
  );

  return reduceValidations;
};
