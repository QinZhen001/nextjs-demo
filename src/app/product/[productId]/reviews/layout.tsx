export const metadata = {
  title: 'Next.js 111',
  description: 'Generated by Next.js 111',
}

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <div>Layout test</div>
    </>
  )
}
