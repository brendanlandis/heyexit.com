'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavDesktopItem({ url, name }: { url: any; name: any }) {
    const pathname = usePathname();
    return (
        <li className={(pathname === url || (url != '/' && pathname.startsWith(url))) ? 'nav-item active' : 'nav-item'}>
            <Link href={url}>{name}</Link>
        </li>
    );
}
