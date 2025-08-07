const products = [
  {
    id: 1,
    name: '',
    href: '#',
    price: 'Rs48',
    imageSrc: '',
    imageAlt: "lady's finger .",
  },
  {
    id: 2,
    name: '',
    href: '#',
    price: 'Rs35',
    imageSrc: '',
    imageAlt: 'bandi hai apni gobhi.',
  },
  {
    id: 3,
    name: '',
    href: '#',
    price: 'Rs89',
    imageSrc: '',
    imageAlt: 'good stuff.',
  },
  {
    id: 4,
    name: '',
    href: '#',
    price: 'Rs35',
    imageSrc: '',
    imageAlt: 'alu hmm bas alu.',
  },
  {
    id: 5,
    name: '',
    href: '#',
    price: 'Rs64',
    imageSrc: '',
    imageAlt: 'Ganj.. i mean gajar.',
  },
  {
    id: 6,
    name: '',
    href: '#',
    price: 'Rs39',
    imageSrc: '',
    imageAlt: 'karela khaya kar',
  },
  {
    id: 7,
    name: '',
    href: '#',
    price: 'Rs50',
    imageSrc: '',
    imageAlt: 'invisible tamatar.',
  },
  {
    id: 8,
    name: '',
    href: '#',
    price: 'Rs32',
    imageSrc: '',
    imageAlt: 'Sabzi ki pic.',
  },
]

export default function Products() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              // for adding to cart work in progress
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
