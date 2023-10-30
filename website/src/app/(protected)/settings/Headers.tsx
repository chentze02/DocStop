export function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className='text-base font-semibold leading-7 text-gray-900 text-center lg:text-left pt-8 lg:pt-0'>
      {children}
    </h2>
  )
}

export function HeadingWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='border-gray-200 border-b pb-5'>
      {children}
    </div>
  )
}
