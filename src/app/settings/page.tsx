export default function Settings() {
  return (
    <div className="w-full max-w-[500px] m-auto p-4 text-center">
      <h1 className="uppercase font-bold text-3xl mb-6">Change App Language</h1>
      <div className="uppercase font-bold text-2xl mb-4 max-w-xs m-auto">
        <p className="bg-pink-600 hover:bg-pink-900 transition ease-in-out p-2 rounded cursor-pointer">English</p>
      </div>
      <div className="uppercase font-bold text-2xl mb-4 max-w-xs m-auto">
        <p className="bg-gray-600 hover:bg-gray-900 transition ease-in-out p-2 rounded cursor-pointer">Spanish</p>
      </div>
    </div>
  )
}
