import { Location } from "@/types"
import Image from "next/image"
import Link from "next/link"

import { FC } from "react"

interface GalleryListProps {
  title: string
  items: Location[]
}

const GalleryList: FC<GalleryListProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-5xl font-bold">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/gallery/${item.id}`}
            className="flex flex-col gap-3 md:gap-6 text-center"
          >
            <Image
              className="rounded-md aspect-square md:aspect-[8/5] object-cover"
              src={item.images[0].url}
              alt={item.streetName}
              width={720}
              height={480}
              priority={true}
            />
            <span className="text-xs pb-2 md:text-base md:pb-0">
              {item.streetName}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default GalleryList
