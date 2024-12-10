import Image from 'next/image'

interface BannerProps {
  title: string
  imageSrc: string
}

export function Banner({ title, imageSrc }: BannerProps) {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4">
          {title}
        </h1>

      

      </div>
    </div>
  )
}

