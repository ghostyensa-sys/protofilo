const themeBootScript = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}else{document.documentElement.style.colorScheme='light';}}catch(e){}})();`;

export function ThemeBootScript() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeBootScript }}
      suppressHydrationWarning
    />
  );
}
