import { H2 } from "@/components/wrapper";
import { uniformList } from "@/lib/uniform-list";
import Image from "next/image";

const transformHref = (url: string) => {
  const match = url.match(/\/d\/(.*?)\//);
  const id = match?.[1];
  if (id) {
    return `https://drive.google.com/uc?export=view&id=${id}`;
  }
  return null;
};

const updatedUniformList = uniformList.map((item) => ({
  ...item,
  href: transformHref(item.href),
}));

export default function UniformProducts() {
  return (
    <section id="our-uniforms" className="py-16 pt-0 scroll-mt-16">
      <div className="container">
        <H2 title="Our Uniforms" />
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4">
          {updatedUniformList.map((item, i) => (
            <div
              key={i}
              className="rounded shadow hover:shadow-lg shadow-saikindo-secondary-600 transition overflow-hidden"
            >
              <Image src={item.href as string} alt="uniform" width={500} height={500} />
              <h3 className="font-josefin text-center p-2">{item.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
