import { filterClassnames } from '@/utils';
import { usePathname } from 'next/navigation';
import { settingsNavigation } from './constants';

export default function SettingsNav() {
  const pathname = usePathname();

  return (
    <aside className="flex overflow-x-auto border-b border-gray-900/5 lg:block lg:w-64 lg:flex-none lg:border-0">
      <nav className="flex-none w-full">
        <ul
          role="list"
          className="flex justify-between w-full gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col"
        >
          {settingsNavigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={filterClassnames([
                  pathname === item.href
                    ? 'bg-gray-50 text-indigo-600'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                  'group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold',
                ])}
              >
                <item.icon
                  className={filterClassnames([
                    pathname === item.href
                      ? 'text-indigo-600'
                      : 'text-gray-400 group-hover:text-indigo-600',
                    'h-6 w-6 shrink-0',
                  ])}
                  aria-hidden="true"
                />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
