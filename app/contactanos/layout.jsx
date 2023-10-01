import {Roboto} from "next/font/google"
export const metadata = {
  title:"Contactanos "
}
const roboto = Roboto({
  weight:["300","400","700"],
  style:["italic", "normal"],
  subsets: ["latin-ext"]
})
export default function Layout({children}){
  return (
    <div className={roboto.className}>
    {children}
    </div>
  )
}