import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

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
