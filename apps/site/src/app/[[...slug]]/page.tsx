export async function generateStaticParams() {
  const pages = [{ slug: [] }, { slug: ["about"] }];

  return pages;
}

export default async function Page({ params }: { params: Promise<{ slug: string; content: string }> }) {
  const { slug, content } = await params;
  return (
    <h1>
      My Page {content} {slug}
    </h1>
  );
}
