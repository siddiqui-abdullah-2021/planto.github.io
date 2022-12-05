const products = [
    {
      id: 1,
      name: 'Fiddle-Leaf',
      href: '#',
      price: '$48',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0274/5001/5849/files/Banner-262x340--1.png?v=1614344040',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Snake Plant',
      href: '#',
      price: '$35',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0274/5001/5849/files/Banner-262x340--2.png?v=1614344040',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Split-Leaf Philodendron',
      href: '#',
      price: '$89',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0274/5001/5849/files/Banner-262x340--3.png?v=1614344040',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Orchid',
      href: '#',
      price: '$35',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0274/5001/5849/files/Banner-262x340--4.png?v=1614344040',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Nomad Plant',
        href: '#',
        price: '$35',
        imageSrc: 'https://cdn.shopify.com/s/files/1/0274/5001/5849/products/7_b77aa82b-f334-4b42-959f-fa19560b0cdb_600x800_crop_center.png?v=1570944330',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 5,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: 'https://cdn.shopify.com/s/files/1/0274/5001/5849/products/2_b662e414-bf50-4841-8cab-b91dfb010809_600x800_crop_center.png?v=1570944412',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 7,
        name: 'WildFlower',
        href: '#',
        price: '$35',
        imageSrc: 'https://cdn.shopify.com/s/files/1/0274/5001/5849/products/8_6c01a03e-e99d-43b2-aa28-e6446b10ae6f_600x800_crop_center.png?v=1650531302',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
    // More products...
  ]
  
  export default function Products() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-3">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Amazing Plants Species</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
  
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-cover object-center w-full h-full group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>






      
      </div>
    )
  }
  