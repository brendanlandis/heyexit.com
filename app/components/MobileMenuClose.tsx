'use client';

export default function MobileMenuClose() {
  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById('mobile-menu-drawer') as HTMLInputElement;
    if (drawerCheckbox) drawerCheckbox.checked = false;
  };
  return (
    <li id="closeMobileNav" onClick={closeDrawer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 512 512"
        className="inline-block stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"
        ></path>
      </svg>
    </li>
  );
}
