"use client"

import { FC, useState } from "react"
import Image from "next/image"
import ImageModal from "@/components/ui/image-modal"
import { Image as Images } from "@/types"

interface ImageGalleryProps {
  images: Images[]
  title: string
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, title }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const openModal = (index: number) => {
    setSelectedImageIndex(index)
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-5xl font-bold">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.url}
            alt={`Image ${index + 1}`}
            width={720}
            height={480}
            priority={true}
            onClick={() => openModal(index)}
            className="rounded-md aspect-square md:aspect-[8/5] object-cover cursor-pointer"
          />
        ))}

        {modalIsOpen && (
          <ImageModal
            image={images[selectedImageIndex].url}
            closeModal={closeModal}
            previousImage={() =>
              setSelectedImageIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
              )
            }
            nextImage={() =>
              setSelectedImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
              )
            }
          />
        )}
      </div>
    </div>
  )
}

export default ImageGallery
