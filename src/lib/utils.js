import { formatDistanceToNowStrict } from "date-fns";

export function relativeDate(from) {
  return formatDistanceToNowStrict(from, { addSuffix: true });
}

export function toSlug(str) {
  return str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

export function formatMoney(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
