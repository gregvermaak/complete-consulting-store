export interface Location {
  id: string
  streetName: string
  suburb: string
  images: Image[]
  isArchived: boolean
}

export interface Image {
  id: string
  url: string
}
