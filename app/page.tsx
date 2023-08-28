import { getPages } from "@/sanity/sanity-utils";

export default async function Home() {
  const pages = await getPages();

  return (
    <div>
      {pages.map((page) => (
        <div key={page._id}>{page.name}</div>
      ))}
    </div>
  );
}
