export default function Docs({
  params
}: {
  params: {
    slug: string[];
  }
}) {
  return <>
    <h1>Docs</h1>
    {/* judge length  */}
    {params.slug.length == 2 ?
      <h2>
        feature: {params.slug[0]}
        concept: {params.slug[1]}
      </h2> : null
    }
  </>
}
