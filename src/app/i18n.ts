import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./intl-config";
export default getRequestConfig(async ({ locale }) => {
    if(!locales.includes(locale as string))notFound();

    return {
        locale: locale as string,
        messages: (await import(`./messages/${locale}.json`))
    }
});