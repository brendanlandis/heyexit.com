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

  // handle menu's active state
  const activePage = () => {
    // special cases for recordings by artists other than Hey Exit
    if (
      pathname === '/recordings/deluge' ||
      pathname === '/recordings/a-clearing-ep' ||
      pathname === '/recordings/deluge-ep' ||
      pathname === '/recordings/folds-ep' ||
      pathname === '/recordings/audiobulb-plays-he-can-jog-vol-2'
    ) {
      return 'projectsAnura';
    }
    if (
      pathname === '/recordings/stairs-ep' ||
      pathname === '/recordings/arterial' ||
      pathname === '/recordings/teen-trax-lp' ||
      pathname === '/recordings/teen-trax-ep-1-lo' ||
      pathname === '/recordings/teen-trax-ep-2-hi'
    ) {
      return 'projectsAdvection';
    }
    if (
      pathname === '/recordings/it-bows-by-day' ||
      pathname === '/recordings/fur-alina' ||
      pathname === '/recordings/we-walked-there' ||
      pathname === '/recordings/yeah-we-get-along' ||
      pathname === '/recordings/two-remixes'
    ) {
      return 'projectsTethers';
    }
    if (pathname === '/recordings/towards-it') {
      return 'projectsBigHiatus';
    }
    if (
      pathname === '/recordings/retiform' ||
      pathname === '/recordings/lapse' ||
      pathname === '/recordings/penumbra' ||
      pathname === '/recordings/world-of-prophecy' ||
      pathname === '/recordings/split-with-dark-spring'
    ) {
      return 'projectsEstherChlorine';
    }
    if (pathname === '/recordings/it-breaks') {
      return 'projectsItBreaks';
    }
    if (pathname === '/recordings/area') {
      return 'projectsRoughWeather';
    }

    // other recordings
    if (pathname.startsWith('/recordings/')) {
      return 'recordings';
    }

    // options in the actual menu
    switch (pathname) {
      case '/':
        return 'home';
      case '/recordings':
        return 'recordings';
      case '/shows':
        return 'shows';
      case '/projects':
        return 'projects';
      case '/projects/anura':
        return 'projectsAnura';
      case '/projects/advection':
        return 'projectsAdvection';
      case '/projects/tethers':
        return 'projectsTethers';
      case '/projects/bighiatus':
        return 'projectsBigHiatus';
      case '/projects/estherchlorine':
        return 'projectsEstherChlorine';
      case '/projects/itbreaks':
        return 'projectsItBreaks';
      case '/projects/roughweather':
        return 'projectsRoughWeather';
      case '/current':
        return 'current';
      default:
        return null;
    }
  };

  return (
    <>
      <li
        className={activePage() === 'home' ? 'active' : ''}
        onClick={closeDrawer}
      >
        <Link href="/">hello</Link>
      </li>
      <li
        className={activePage() === 'recordings' ? 'active' : ''}
        onClick={closeDrawer}
      >
        <Link href="/recordings">recordings</Link>
      </li>
      <li
        className={activePage() === 'shows' ? 'active' : ''}
        onClick={closeDrawer}
      >
        <Link href="/shows">shows</Link>
      </li>
      <li
        className={activePage()?.includes('projects') ? 'active' : ''}
        onClick={closeDrawer}
      >
        <Link href="/projects">related projects</Link>
        <ul className="subnav">
          <li
            className={activePage()?.includes('Anura') ? 'active' : ''}
            onClick={closeDrawer}
          >
            <Link href="/projects/anura">Anura</Link>
          </li>
          <li
            className={activePage()?.includes('Advection') ? 'active' : ''}
            onClick={closeDrawer}
          >
            <Link href="/projects/advection">Advection</Link>
          </li>
          <li
            className={activePage()?.includes('Tethers') ? 'active' : ''}
            onClick={closeDrawer}
          >
            <Link href="/projects/tethers">Tethers</Link>
          </li>
          <li
            className={activePage()?.includes('BigHiatus') ? 'active' : ''}
            onClick={closeDrawer}
          >
            <Link href="/projects/bighiatus">Big Hiatus</Link>
          </li>
          <li
            className={activePage()?.includes('EstherChlorine') ? 'active' : ''}
            onClick={closeDrawer}
          >
            <Link href="/projects/estherchlorine">Esther Chlorine</Link>
          </li>
          <li
            className={activePage()?.includes('ItBreaks') ? 'active' : ''}
            onClick={closeDrawer}
          >
            <Link href="/projects/itbreaks">It Breaks</Link>
          </li>
          <li
            className={activePage()?.includes('RoughWeather') ? 'active' : ''}
            onClick={closeDrawer}
          >
            <Link href="/projects/roughweather">Rough Weather</Link>
          </li>
        </ul>
      </li>
      <li
        className={activePage() === 'current' ? 'active' : ''}
        onClick={closeDrawer}
      >
        <Link href="/current">current projects</Link>
      </li>
    </>
  );
}
