import { FC } from "react"
import Image from "next/image"
import { Image as Images } from "@/types"

interface LocationGalleryListProps {
  title: string
  items: Images[]
}

const LocationGalleryList: FC<LocationGalleryListProps> = ({
  title,
  items,
}) => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-5xl font-bold">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
        {items.map((item) => (
          <Image
            key={item.id}
            className="rounded-md aspect-square md:aspect-[8/5] object-cover"
            src={item.url}
            alt="Gallery Image"
            width={1280}
            height={720}
            priority={true}
          />
        ))}
      </div>
    </div>
  )
}

export default LocationGalleryList
