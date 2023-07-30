import getRollingGallery from "@/actions/get-rolling-gallery"
import RollingGallery from "@/components/rolling-gallery"

export default async function Home() {
  const rollingGallery = await getRollingGallery()

  const filteredRollingGallery = rollingGallery[0].images

  return (
    <main className="relative">
      <RollingGallery images={filteredRollingGallery} />
    </main>
  )
}
