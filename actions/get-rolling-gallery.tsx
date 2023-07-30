import { Location } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/locations`

const getRollingGallery = async (): Promise<Location[]> => {
  const res = await fetch(`${URL}`)

  const data = await res.json()

  const filteredData = data.filter(
    (item: Location) => item.streetName === "Rolling Gallery"
  )

  return filteredData
}

export default getRollingGallery
