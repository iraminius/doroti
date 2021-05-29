import * as yup from "yup";

export const rowSchema = yup.object().shape({
  id: yup.number().required(),
  width: yup.number().required(),
  height: yup.number().required(),
  quantity: yup.number().required(),
  result: yup.number().required(),
});

export const rowsSchema = yup.array().of(rowSchema);
