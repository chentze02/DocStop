import { SOCIAL_LINKS } from '@/constants/hardcoded'
import { XMarkIcon } from '@heroicons/react/20/solid'

export default function NotificationHeader() {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gradient-to-r px-6 py-2.5 sm:px-3.5 sm:before:flex-1 justify-center">
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#2966F4] to-[#262484] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#2966F4] to-[#262484] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-center justify-center">
        <p className="text-sm leading-6 text-gray-900 text-center items-center">
          <strong className="font-semibold">DocStop</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current text-center items-center"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          is launching in 2024
        </p>
        <div className="text-center items-center justify-center">
          <a
            href={SOCIAL_LINKS.DISCORD}
            className="flex rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 items-center text-center justify-center"
          >
            <span
              className="pr-2"
            >
              View Our Demo
            </span>
            <span
              className='flex items-center'
              // style={{ lineHeight: '20px'}}
              aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <div className="flex flex-1 justify-end"></div>
    </div>
  )
}
