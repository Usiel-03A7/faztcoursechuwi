import Link from 'next/link'
export default function Nabvar(){
  return (
    <nav>
      <ul>
        <li className='navegacion'>
          <Link href="/">Home</Link>
          <Link href="/contactanos">Contactanoss</Link>
          <Link href="/iniciarSesion">Inicia sesion</Link>
        </li>
      </ul>
    </nav>
  )
}