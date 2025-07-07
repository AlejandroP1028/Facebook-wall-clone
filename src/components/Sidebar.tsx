import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-80 p-4 lg:border-r border-gray-200">
      <div className="flex lg:flex-col items-center lg:items-start space-x-4 lg:space-x-0 mb-6">
        <Image
          src="/placeholder.JPG"
          alt="Profile"
          width={120}
          height={120}
          className="w-20 h-20 lg:w-48 lg:h-64 object-cover mb-0 lg:mb-3 rounded lg:rounded-none"
        />
        <div>
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800">
            Alejandro Prado
          </h2>
          <h3 className="text-base lg:text-lg text-gray-700">
            Software Developer
          </h3>
        </div>
      </div>

      <div className="hidden lg:block space-y-4">
        <section className="bg-gray-100 border border-gray-300 p-3">
          <h4 className="font-bold text-gray-700 mb-2">Information</h4>
          <div>
            <div className="font-bold text-gray-700">Current City</div>
            <div className="text-gray-600">Pasig, Metro Manila</div>
          </div>
        </section>
      </div>
    </aside>
  );
}
