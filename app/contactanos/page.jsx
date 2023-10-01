import Link from 'next/link'
export default function Conocenos() {
  return (
   <div className='formulario'>
    <form action="POST"></form>
    <label>Nombre</label>
    <input type="text" />
    <label>Correo</label>
    <input type="email" />
    <label>Telefono</label>
    <input type="number" />
    <label>Comentario</label>
    <input type="text" />
    <button>Enviar</button>
   </div>
  )
}