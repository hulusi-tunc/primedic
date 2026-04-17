export type Locale = "tr" | "en";

export function pickLocale<T>(locale: string, tr: T, en: T): T {
  return locale === "en" ? en : tr;
}
