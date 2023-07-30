import { Location } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/locations`

const getLocation = async (id: string): Promise<Location> => {
  const res = await fetch(`${URL}/${id}`)

  return res.json()
}

export default getLocation
