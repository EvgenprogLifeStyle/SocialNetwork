export const maxLengthCreator = maxLength => value => value && value.length >= maxLength ? `Max length ${maxLength}` : undefined

export const required = value => !value ? "Failed is required" : undefined