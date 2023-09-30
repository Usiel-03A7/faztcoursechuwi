import Link from 'next/link'
export default function Conocenos() {
  return (
    <nav className="bg-gray-800 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center text-white">
            </div>
            <div className="hidden sm:block sm:ml-6 ">
              <div className="flex space-x-4">
                <Link href="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/contactanos" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contactanos</Link>
                <Link href="/registrate" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reginstrate</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>
  )
}