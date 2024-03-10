"use client"

// Handling Errors in Nested Routes
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error,
  reset: () => void,
}) {
  return <>
    <h1>Test ErrorBoundary</h1>
    <h2>error.message: {error.message}</h2>
    <button onClick={reset}>Try again</button>
  </>
}
