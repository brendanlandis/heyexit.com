'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavItems() {
  const pathname = usePathname();
  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById(
      'mobile-menu-drawer'
    ) as HTMLInputElement;
    if (drawerCheckbox) drawerCheckbox.checked = false;
  };
  return (
    <>
      <li className={pathname === '/' ? 'active' : ''} onClick={closeDrawer}>
        <Link href="/">hello</Link>
      </li>
      <li
        className={pathname.includes('/recordings') ? 'active' : ''}
        onClick={closeDrawer}
      >
        <Link href="/recordings">recordings</Link>
      </li>
      <li
        className={pathname === '/shows' ? 'active' : ''}
        onClick={closeDrawer}
      >
        <Link href="/shows">shows</Link>
      </li>
      <li
        className={pathname.includes('/projects') ? 'active' : ''}
        onClick={closeDrawer}
      >
        <Link href="/projects">related projects</Link>
        <ul className="subnav">
          <li
            className={pathname.includes('/projects/anura') ? 'active' : ''}
            onClick={closeDrawer}
          >
            <Link href="/projects/anura">Anura</Link>
          </li>
          <li
            className={pathname.includes('/projects/advection') ? 'active' : ''}
            onClick={closeDrawer}
          >
            <Link href="/projects/advection">Advection</Link>
          </li>
          <li
            className={pathname.includes('/projects/tethers') ? 'active' : ''}
            onClick={closeDrawer}
          >
            <Link href="/projects/tethers">Tethers</Link>
          </li>
          <li
            className={pathname.includes('/projects/bighiatus') ? 'active' : ''}
            onClick={closeDrawer}
          >
            <Link href="/projects/bighiatus">Big Hiatus</Link>
          </li>
          <li
            className={
              pathname.includes('/projects/estherchlorine') ? 'active' : ''
            }
            onClick={closeDrawer}
          >
            <Link href="/projects/estherchlorine">Esther Chlorine</Link>
          </li>
          <li
            className={pathname.includes('/projects/itbreaks') ? 'active' : ''}
            onClick={closeDrawer}
          >
            <Link href="/projects/itbreaks">It Breaks</Link>
          </li>
          <li
            className={
              pathname.includes('/projects/roughweather') ? 'active' : ''
            }
            onClick={closeDrawer}
          >
            <Link href="/projects/roughweather">Rough Weather</Link>
          </li>
        </ul>
      </li>
      <li
        className={pathname === '/current' ? 'active' : ''}
        onClick={closeDrawer}
      >
        <Link href="/current">current</Link>
      </li>
    </>
  );
}
