import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Image
        src="/ls2v2.jpeg"
        layout="responsive"
        width={500}
        height={500}
      />
    </>
  )
}
