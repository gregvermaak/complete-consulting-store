import { FC } from "react"
import getLocation from "@/actions/get-location"
import LocationGalleryList from "@/components/location-gallery-list"

interface LocationPageProps {
  params: {
    locationId: string
  }
}

const LocationPage: FC<LocationPageProps> = async ({ params }) => {
  const location = await getLocation(params.locationId)

  return (
    <div className="container mx-auto min-h-screen mt-12 max-w-7xl">
      <LocationGalleryList
        title={location.streetName}
        items={location.images}
      />
    </div>
  )
}

export default LocationPage
