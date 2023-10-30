export default function VerticalSpacer({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className='py-10 lg:py-20'>{children}</div>
}
