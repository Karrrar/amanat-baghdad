const people = [
  {
    name: 'Jordan Peterson',
    role: 'Honda Civic',
    imageUrl:
      'driver-svgrepo-com.svg',
  },
  {
    name: 'Riley Thompson',
    role: 'Ford Mustang',
    imageUrl:
      'driver-svgrepo-com.svg',
  },
  {
    name: 'Taylor Morgan',
    role: 'Chevrolet Tahoe',
    imageUrl:
      'driver-svgrepo-com.svg',
  },
  {
    name: 'Casey Lee',
    role: 'Tesla Model S',
    imageUrl:
      'driver-svgrepo-com.svg',
  },
  {
    name: 'Jamie Kim',
    role: 'Toyota Corolla',
    imageUrl:
      'driver-svgrepo-com.svg',
  },
  {
    name: 'Alex Jordan',
    role: 'Ram 1500',
    imageUrl:
      'driver-svgrepo-com.svg',
  },
]


export default function Drivers() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">

        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-4">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}