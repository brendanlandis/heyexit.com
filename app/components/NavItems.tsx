'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavItems() {
  const pathname = usePathname();
  return (
    <>
      <li className={pathname === '/' ? 'active' : ''}>
        <Link href="/">home</Link>
      </li>
      <li className={pathname === '/listen' ? 'active' : ''}>
        <Link href="/listen">listen</Link>
      </li>
      <li className={pathname === '/shows' ? 'active' : ''}>
        <Link href="/shows">shows</Link>
      </li>
      <li className={pathname === '/related' ? 'active' : ''}>
        <Link href="/related">related</Link>
      </li>
      <li className={pathname === '/current' ? 'active' : ''}>
        <Link href="/current">current</Link>
      </li>
    </>
  );
}
