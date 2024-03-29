export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const random = Math.random()

  if (random > 0.5) {
    // Handling Errors in Layouts
    // Layout error will not be caught by ErrorBoundary
    throw new Error('Random error in Layout')
  }

  return children

}
