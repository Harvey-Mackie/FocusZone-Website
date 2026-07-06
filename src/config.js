// Central configuration for external links and contact details.
// TODO(ZZ-090): Replace APP_STORE_ID_PLACEHOLDER with the real App Store ID once App Store review completes.
// TODO(ZZ-204): Set APP_STORE_LIVE to true and update STORE_CTA_URL once the App Store page is live.
export const APP_STORE_LIVE = false;
export const APP_STORE_ID = '6500000000';
export const APP_STORE_URL = `https://apps.apple.com/app/zenzone/id${APP_STORE_ID}`;
export const STORE_CTA_URL = APP_STORE_LIVE ? APP_STORE_URL : '/waitlist';
export const CONTACT_EMAIL = 'support@zenzone.app';
export const MAILTO_CONTACT = `mailto:${CONTACT_EMAIL}`;
export const WAITLIST_MAILTO = `mailto:${CONTACT_EMAIL}?subject=ZenZone%20Waitlist`;
