import { string, StringSchema } from "yup";

export const labels = {
  event: ["Event Date", "Location", "Event Capacity", "Condition"],
  note: ["Course", "Note Written", "Grade Acquired", "Condition"],
  book: ["Auther", "Released", "Publisher", "Category", "Condition"],
  clothing: ["Bought On", "Brand", "Type", "Condition", "Frequency of Use"],
  shoes: ["Bought On", "Brand", "Type", "Condition", "Frequency of Use"],
  fitness: ["Bought On", "Brand", "Type", "Condition", "Frequency of Use"],
  others: ["Bought On", "Brand", "Type", "Condition", "Frequency of Use"],
  ikia: ["Bought On", "Brand", "Type", "Condition", "Frequency of Use"],
  electronics: ["Bought On", "Brand", "Type", "Condition", "Frequency of Use"],
};

export interface Labels {
  event: Array<string>;
  note: Array<string>;
  book: Array<string>;
  clothing: Array<string>;
  shoes: Array<string>;
  fitness: Array<string>;
  others: Array<string>;
  ikia: Array<string>;
  electronics: Array<string>;
}
