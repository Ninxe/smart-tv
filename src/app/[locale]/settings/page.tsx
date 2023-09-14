'use client';

import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: 'Smart TV - Settings',
}

export default function Settings() {
  const t = useTranslations('SettingsPage');

  return (
    <div className="w-full max-w-[500px] m-auto p-4 text-center">
      <h1 className="uppercase font-bold text-3xl mb-6">{t('title')}</h1>
      <a href={"/en"}>
        <div className="uppercase font-bold text-2xl mb-4 max-w-xs m-auto">
          <p className="bg-pink-600 hover:bg-pink-900 transition ease-in-out p-2 rounded cursor-pointer">{t('english')}</p>
        </div>
      </a>
      <a href={"/es"}>
        <div className="uppercase font-bold text-2xl mb-4 max-w-xs m-auto">
          <p className="bg-gray-600 hover:bg-gray-900 transition ease-in-out p-2 rounded cursor-pointer">{t('spanish')}</p>
        </div>
      </a>
    </div>
  );
}
