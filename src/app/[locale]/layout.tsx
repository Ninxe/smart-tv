import '../globals.css';
import { Inter } from 'next/font/google';
import Sidebar from '../../components/Sidebar';
import SplashScreen from '../../components/SplashScreen';
import { notFound } from 'next/navigation';
import { createTranslator, NextIntlClientProvider } from 'next-intl';

const inter = Inter({ subsets: ['latin'] })

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return ['en', 'es'].map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props) {
  const messages = await getMessages(locale);

  // You can use the core (non-React) APIs when you have to use next-intl
  // outside of components. Potentially this will be simplified in the future
  // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
  const t = createTranslator({ locale, messages });

  return {
    title: t('Title.title')
  };
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale} className={inter.className}>
      <title>Smart TV</title>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <>
            <Sidebar />
            {children}
          </>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
