import Script from "next/script";

const themeBootScript = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}else{document.documentElement.classList.remove('dark');document.documentElement.style.colorScheme='light';}}catch(e){}})();`;

export function ThemeBootScript() {
  return (
    // The App Router requires beforeInteractive in the root layout. The lint
    // rule still only names the Pages Router document file.
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script id="theme-boot" strategy="beforeInteractive">
      {themeBootScript}
    </Script>
  );
}
