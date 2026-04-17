import * as contentTr from "./content";
import * as contentEn from "./content.en";
import { hakkimizda as hakkimizdaTr } from "./content.hakkimizda";
import { hakkimizda as hakkimizdaEn } from "./content.hakkimizda.en";
import { iletisim as iletisimTr } from "./content.iletisim";
import { iletisim as iletisimEn } from "./content.iletisim.en";
import { yonetmelik as yonetmelikTr } from "./content.yonetmelik";
import { yonetmelik as yonetmelikEn } from "./content.yonetmelik.en";
import { heartsaveMypad as heartsaveMypadTr } from "./content.heartsave-mypad";
import { heartsaveMypad as heartsaveMypadEn } from "./content.heartsave-mypad.en";
import { aksesuarlar as aksesuarlarTr } from "./content.aksesuarlar";
import { aksesuarlar as aksesuarlarEn } from "./content.aksesuarlar.en";

/* eslint-disable @typescript-eslint/no-explicit-any */
function pick(locale: string, tr: any, en: any) {
  return locale === "en" ? en : tr;
}

export function getNav(locale: string) {
  return pick(locale, contentTr.nav, contentEn.nav) as typeof contentTr.nav;
}

export function getHero(locale: string) {
  return pick(locale, contentTr.hero, contentEn.hero) as typeof contentTr.hero;
}

export function getStats(locale: string) {
  return pick(locale, contentTr.stats, contentEn.stats) as typeof contentTr.stats;
}

export function getFeatures(locale: string) {
  return pick(locale, contentTr.features, contentEn.features) as typeof contentTr.features;
}

export function getCtaBanner(locale: string) {
  return pick(locale, contentTr.ctaBanner, contentEn.ctaBanner) as typeof contentTr.ctaBanner;
}

export function getUseCases(locale: string) {
  return pick(locale, contentTr.useCases, contentEn.useCases) as typeof contentTr.useCases;
}

export function getFaq(locale: string) {
  return pick(locale, contentTr.faq, contentEn.faq) as typeof contentTr.faq;
}

export function getFooterContent(locale: string) {
  return pick(locale, contentTr.footerContent, contentEn.footerContent) as typeof contentTr.footerContent;
}

export function getHakkimizda(locale: string) {
  return pick(locale, hakkimizdaTr, hakkimizdaEn) as typeof hakkimizdaTr;
}

export function getIletisim(locale: string) {
  return pick(locale, iletisimTr, iletisimEn) as typeof iletisimTr;
}

export function getYonetmelik(locale: string) {
  return pick(locale, yonetmelikTr, yonetmelikEn) as typeof yonetmelikTr;
}

export function getHeartsaveMypad(locale: string) {
  return pick(locale, heartsaveMypadTr, heartsaveMypadEn) as typeof heartsaveMypadTr;
}

export function getAksesuarlar(locale: string) {
  return pick(locale, aksesuarlarTr, aksesuarlarEn) as typeof aksesuarlarTr;
}
