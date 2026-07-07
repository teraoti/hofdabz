import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="w-9 h-9 flex items-center justify-center rounded-full border border-foreground-300 text-foreground-600 hover:border-accent-500 hover:text-accent-500 transition-all duration-300 cursor-pointer"
    >
      <div className="w-4 h-4 flex items-center justify-center">
        <i className={`ri-${isDark ? 'sun-line' : 'moon-line'} text-base`}></i>
      </div>
    </button>
  );
}