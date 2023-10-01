"use client"
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section>
      <h1>Estamos en el inicio</h1>
      <button onClick={() => {
        alert('holi')
      }} >
        Clickeame
      </button>
    </section>
  )
}
