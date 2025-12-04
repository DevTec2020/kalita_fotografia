import { Title } from "@/app/shared/ui/headings/Title";
import { PhotoInDb } from "@/domain/portfolio/entities/portfolio-entities";
import Image from "next/image";

export function PortfolioPage() {
  const images: PhotoInDb[] = [
    {
      asset_id: "418af00a508293dee5dd5a8e008b6507",
      public_id: "kalita_fotografia_uploads/bdem2yajnunvewa45rdp",
      format: "jpg",
      version: 1764714810,
      resource_type: "image",
      type: "upload",
      created_at: "2025-12-02T22:33:30Z",
      bytes: 72277,
      width: 232,
      height: 202,
      asset_folder: "kalita_fotografia_uploads",
      display_name: "bdem2yajnunvewa45rdp",
      url: "http://res.cloudinary.com/dda8z5n1i/image/upload/v1764714810/kalita_fotografia_uploads/bdem2yajnunvewa45rdp.jpg",
      secure_url:
        "https://res.cloudinary.com/dda8z5n1i/image/upload/v1764714810/kalita_fotografia_uploads/bdem2yajnunvewa45rdp.jpg",
    },
    {
      asset_id: "1375fcc56ce58e7347decf3b2a562e71",
      public_id: "kalita_fotografia_uploads/btneaqj9rjzfujkjyg3a",
      format: "jpg",
      version: 1764714810,
      resource_type: "image",
      type: "upload",
      created_at: "2025-12-02T22:33:30Z",
      bytes: 66445,
      width: 232,
      height: 202,
      asset_folder: "kalita_fotografia_uploads",
      display_name: "btneaqj9rjzfujkjyg3a",
      url: "http://res.cloudinary.com/dda8z5n1i/image/upload/v1764714810/kalita_fotografia_uploads/btneaqj9rjzfujkjyg3a.jpg",
      secure_url:
        "https://res.cloudinary.com/dda8z5n1i/image/upload/v1764714810/kalita_fotografia_uploads/btneaqj9rjzfujkjyg3a.jpg",
    },
    {
      asset_id: "f3ddf8d8a9fda391d6e0dc578f246572",
      public_id: "kalita_fotografia_uploads/ia13z8pelpbf8zqldrzf",
      format: "jpg",
      version: 1764714810,
      resource_type: "image",
      type: "upload",
      created_at: "2025-12-02T22:33:30Z",
      bytes: 49299,
      width: 232,
      height: 202,
      asset_folder: "kalita_fotografia_uploads",
      display_name: "ia13z8pelpbf8zqldrzf",
      url: "http://res.cloudinary.com/dda8z5n1i/image/upload/v1764714810/kalita_fotografia_uploads/ia13z8pelpbf8zqldrzf.jpg",
      secure_url:
        "https://res.cloudinary.com/dda8z5n1i/image/upload/v1764714810/kalita_fotografia_uploads/ia13z8pelpbf8zqldrzf.jpg",
    },
    {
      asset_id: "bd717ffc91c3091dc2bf6bcb03d518a4",
      public_id: "kalita_fotografia_uploads/mtdwdqivbfomgmb6x1rw",
      format: "jpg",
      version: 1764714810,
      resource_type: "image",
      type: "upload",
      created_at: "2025-12-02T22:33:30Z",
      bytes: 64622,
      width: 232,
      height: 202,
      asset_folder: "kalita_fotografia_uploads",
      display_name: "mtdwdqivbfomgmb6x1rw",
      url: "http://res.cloudinary.com/dda8z5n1i/image/upload/v1764714810/kalita_fotografia_uploads/mtdwdqivbfomgmb6x1rw.jpg",
      secure_url:
        "https://res.cloudinary.com/dda8z5n1i/image/upload/v1764714810/kalita_fotografia_uploads/mtdwdqivbfomgmb6x1rw.jpg",
    },
    {
      asset_id: "b23e741cb1f9d9903482c8e27cc9fe59",
      public_id: "kalita_fotografia_uploads/rf6tcql9j5kfa5vb30jq",
      format: "jpg",
      version: 1764714810,
      resource_type: "image",
      type: "upload",
      created_at: "2025-12-02T22:33:30Z",
      bytes: 58784,
      width: 232,
      height: 202,
      asset_folder: "kalita_fotografia_uploads",
      display_name: "rf6tcql9j5kfa5vb30jq",
      url: "http://res.cloudinary.com/dda8z5n1i/image/upload/v1764714810/kalita_fotografia_uploads/rf6tcql9j5kfa5vb30jq.jpg",
      secure_url:
        "https://res.cloudinary.com/dda8z5n1i/image/upload/v1764714810/kalita_fotografia_uploads/rf6tcql9j5kfa5vb30jq.jpg",
    },
    {
      asset_id: "613bd3ea5ad65547c2050a455ece3f91",
      public_id: "kalita_fotografia_uploads/sdbh2pa91tnab3csljox",
      format: "jpg",
      version: 1764714810,
      resource_type: "image",
      type: "upload",
      created_at: "2025-12-02T22:33:30Z",
      bytes: 66529,
      width: 232,
      height: 202,
      asset_folder: "kalita_fotografia_uploads",
      display_name: "sdbh2pa91tnab3csljox",
      url: "http://res.cloudinary.com/dda8z5n1i/image/upload/v1764714810/kalita_fotografia_uploads/sdbh2pa91tnab3csljox.jpg",
      secure_url:
        "https://res.cloudinary.com/dda8z5n1i/image/upload/v1764714810/kalita_fotografia_uploads/sdbh2pa91tnab3csljox.jpg",
    },
  ];

  return (
    <section className="flex flex-col gap-20 justify-center items-center">
      <Title content={`Portifolio`} size="medium" align="center" />
      <section className="flex justify-center flex-wrap  mx-auto">
        {images.map(({ url, display_name }, index) => (
          <figure key={index} className="relative w-[405px] h-[353px]">
            <Image
              priority
              quality={100}
              src={url}
              fill
              alt={display_name}
              className="object-cover"
            />
          </figure>
        ))}
      </section>
    </section>
  );
}

export default PortfolioPage;
