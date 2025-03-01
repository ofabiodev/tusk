import "../global.css";

import { I18nProvider } from "fumadocs-ui/i18n";
import { RootProvider } from "fumadocs-ui/provider";

export default async function RootLayout({
    params,
    children
}: {
    params: Promise<{ lang: string }>;
    children: React.ReactNode;
}) {
    const lang = (await params).lang;

    return (
        <html lang={lang} suppressHydrationWarning>
            <body>
                <I18nProvider
                    locale={lang}
                    locales={[
                        {
                            name: "English",
                            locale: "en",
                        },
                        {
                            name: "Português",
                            locale: "pt",
                        }
                    ]}
                    translations={{ 
                        pt: {
                            search: "Pesquisar"
                        }
                     }[lang]}
                >
                    <RootProvider>{children}</RootProvider>
                </I18nProvider>
            </body>
        </html>
    )
}