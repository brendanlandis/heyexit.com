'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavItems() {
  const pathname = usePathname();
  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById('mobile-menu-drawer') as HTMLInputElement;
    if (drawerCheckbox) drawerCheckbox.checked = false;
  };
  return (
    <>
      <li className={pathname === '/' ? 'active' : ''} onClick={closeDrawer}>
        <Link href="/">hello</Link>
      </li>
      <li className={pathname.includes('/recordings') ? 'active' : ''} onClick={closeDrawer}>
        <Link href="/recordings">recordings</Link>
      </li>
      <li className={pathname === '/shows' ? 'active' : ''} onClick={closeDrawer}>
        <Link href="/shows">shows</Link>
      </li>
      <li className={pathname === '/projects' ? 'active' : ''} onClick={closeDrawer}>
        <Link href="/projects">related projects</Link>
      </li>
      <li className={pathname === '/current' ? 'active' : ''} onClick={closeDrawer}>
        <Link href="/current">current</Link>
      </li>
    </>
  );
}
