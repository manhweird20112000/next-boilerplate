'use client'

import { useTranslations } from "next-intl";

import { useContainerStore } from "@/stores/container";

export default function Home() {
  const auth: Auth = { name: 'ManhDV' }
  const count = useContainerStore((state: any) => state.count)
  const increment = useContainerStore((state: any) => state.increment)
  const t = useTranslations()

  return (
  <main>
    { count} { auth.name }
    <button  className={'bg-amber-400'} onClick={increment}>{t('welcome')}</button>
  </main>
  );
}
