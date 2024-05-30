import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Logo } from "@/components/common";

export function MainHeader(){
    const t = useTranslations()
    return (
        <header className='menu'>
            <ul className='menu__list'>
                <li>
                    <Link className='menu__item' href={'/shop'}>{t('header.shop')}</Link>
                </li>
                <li>
                    <Link className='menu__item' href={'/collections'}>{t('header.collections')}</Link>
                </li>
                <li>
                    <Link className='menu__item' href={'/campaigns'}>{t('header.campaigns')}</Link>
                </li>
                <li>
                    <Link className='menu__item' href={'/stories'}>{t('header.stories')}</Link>
                </li>
            </ul>

            <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2' >
                <Logo/>
            </div>

            <ul className='menu__list'>
                <li>
                    <Link className='menu__item' href={'/'}>ENG</Link>
                </li>
                <li>
                    <Link className='menu__item' href={'/campaigns'}>{t('header.search')}</Link>
                </li>
                <li>
                    <Link className='menu__item' href={'/account'}>{t('header.account')}</Link>
                </li>
                <li className='flex items-center gap-x-2.5'>
                    <Image src='/icons/wishlist.svg' width={24} height={24} alt='So Young'/>
                    <Link className='menu__item' href={'/wishlist'}>{t('header.wishlist')}</Link>
                </li>
                <li className='flex items-center gap-x-2.5'>
                    <Image src='/icons/cart.svg' width={24} height={24} alt='So Young'/>
                    <span className='text-border-primary text-lg leading-5'>(0)</span>
                </li>
            </ul>
        </header>
    )
}
