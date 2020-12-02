import { Collection, Field } from "./types";

export const normalizeCollection = (collection: Collection): Field[] => {
  const iterator = collection.files || [collection];
  return iterator.map((field) => ({
    ...field,
    widget: "root",
  }));
};
