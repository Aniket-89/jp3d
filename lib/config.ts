export const PHONE = "TODO";

const phoneDigits = (phone: string) => phone.replace(/\D/g, "");
const phoneLink = (phone: string) => phone.replace(/[^\d+]/g, "");

export const phoneHref = PHONE === "TODO" ? null : `tel:${phoneLink(PHONE)}`;
export const whatsappUrl = PHONE === "TODO" ? null : `https://wa.me/${phoneDigits(PHONE)}`;
