import { FC } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface ImageModalProps {
  image: string
  closeModal: () => void
  previousImage: () => void
  nextImage: () => void
}

const ImageModal: FC<ImageModalProps> = ({
  image,
  closeModal,
  previousImage,
  nextImage,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-white z-50"
      >
        <X className="h-6 w-6" />
      </button>
      <Image
        src={image}
        alt="Image"
        fill
        className="max-w-3/4 max-h-3/4 object-contain"
        priority={true}
      />
      <button
        onClick={previousImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}

export default ImageModal
