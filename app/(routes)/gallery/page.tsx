import getLocations from "@/actions/get-locations"
import GalleryList from "@/components/gallery-list"

export const revalidate = 0

const GalleryPage = async () => {
  const locations = await getLocations()

  return (
    <div className="container mx-auto min-h-[calc(100vh-130px)] pt-24 max-w-7xl">
      <GalleryList title="Gallery" items={locations} />
    </div>
  )
}

export default GalleryPage
