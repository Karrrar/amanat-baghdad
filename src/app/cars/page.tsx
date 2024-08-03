/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const cars = [
  {
    id: 1,
    name: 'Honda Civic',
    href: '#',
    imageSrc: 'car-svgrepo-com.svg',
    imageAlt: "Front of men's Basic Tee in black.",
    stats: 'good',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Honda Civic',
    href: '#',
    imageSrc: 'car-svgrepo-com.svg',
    imageAlt: "Front of men's Basic Tee in black.",
    stats: 'good',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Honda Civic',
    href: '#',
    imageSrc: 'car-svgrepo-com.svg',
    imageAlt: "Front of men's Basic Tee in black.",
    stats: 'good',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Honda Civic',
    href: '#',
    imageSrc: 'car-svgrepo-com.svg',
    imageAlt: "Front of men's Basic Tee in black.",
    stats: 'good',
    color: 'Black',
  },
  {
    id: 5,
    name: 'Honda Civic',
    href: '#',
    imageSrc: 'car-svgrepo-com.svg',
    imageAlt: "Front of men's Basic Tee in black.",
    stats: 'good',
    color: 'Black',
  },
  {
    id: 6,
    name: 'Honda Civic',
    href: '#',
    imageSrc: 'car-svgrepo-com.svg',
    imageAlt: "Front of men's Basic Tee in black.",
    stats: 'good',
    color: 'Black',
  },
  {
    id: 7,
    name: 'Honda Civic',
    href: '#',
    imageSrc: 'car-svgrepo-com.svg',
    imageAlt: "Front of men's Basic Tee in black.",
    stats: 'good',
    color: 'Black',
  },
  // More products...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">List of all cars</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {cars.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.stats}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
