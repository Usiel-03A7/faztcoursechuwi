import Link from "next/link"
export default function Notfound(){
  return (
    <div className="error">
      <h1>Error 404</h1>
      <p>this page is not found</p>
      <Link href="/">Volver a inicio</Link>
    </div>
  )
}