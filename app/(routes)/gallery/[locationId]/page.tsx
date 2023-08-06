import { FC } from "react"
import getLocation from "@/actions/get-location"
import ImageGallery from "@/components/image-gallery"

interface LocationPageProps {
  params: {
    locationId: string
  }
}

const LocationPage: FC<LocationPageProps> = async ({ params }) => {
  const location = await getLocation(params.locationId)

  return (
    <div className="container mx-auto min-h-[calc(100vh-130px)] py-24 max-w-7xl">
      <ImageGallery title={location.streetName} images={location.images} />
    </div>
  )
}

export default LocationPage
