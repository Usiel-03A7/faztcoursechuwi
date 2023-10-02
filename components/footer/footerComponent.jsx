
"use client"
import Link from "next/link"
export default function FooterComponent(){
  return (
    <div>
      <section>
        <h2>footer inicial del curso </h2>
        <p>En este curso aprenderemos a usar nextjs paso a paso y llegaremos a hacer un proyecto no tan grande pero lo suficiente para poder practicar y seguir poco a poco con las utilidades y el como hacer un enlace para el back-end no solo con enfoque front-end</p>
      </section>
      <ul>
        <li><Link href="https://github.com/Usiel-03A7">Date una vuelta por mi github</Link></li>
        <li><Link href="https://www.facebook.com/uzyel.solanosilva/">Pasate por mi facebook</Link></li>
        <li><Link href="https://www.paypal.me/usiel03A7">Depositame un varo</Link></li>
      </ul>
    </div>
  )
}