"use client"

import { FC, useEffect, useState } from "react"
import { Image } from "@/types"
import { motion, AnimatePresence, MotionConfig } from "framer-motion"

interface RollingGalleryProps {
  images: Image[]
}

const variants = {
  hidden: { opacity: 0 },
  exiting: { opacity: 0 },
  visible: { opacity: 1 },
}

const RollingGallery: FC<RollingGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(currentIndex + 1)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, images.length])

  return (
    <div className="h-[calc(100vh-81px)]">
      <MotionConfig transition={{ duration: 1.0 }}>
        <AnimatePresence initial={false}>
          <motion.img
            className="w-screen h-[calc(100vh-80px)] absolute top-0 left-0 object-cover"
            key={images[currentIndex].url}
            src={images[currentIndex].url}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exiting"
            alt="Rolling Gallery Image"
          />
        </AnimatePresence>
      </MotionConfig>
    </div>
  )
}

export default RollingGallery
