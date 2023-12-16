import Image from "next/image"
import { findEvents } from '@/lib/actions/actions'


export default async function Home() {
  const eventShows = await findEvents(0,3)

  console.log(eventShows)

  return (
    <>
      <div className="relative w-auto h-[200px]">
        <Image src="/images/band/band_one.jpg" fill alt="band" style={{objectFit:"cover"}}/>
        <div className="absolute bottom-0 w-full bg-black/60 text-center text-5xl text-white py-32 antonfont">
          Rocking hard since 1954
        </div>
      </div>
    </>
  )
}
