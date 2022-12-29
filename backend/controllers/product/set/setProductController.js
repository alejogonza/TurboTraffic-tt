const SetProducts = async (req, res) => {
  try {
    const products = await req.context.models.Products.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    })
    if(products.length === 0){
      const data = [
        {
          skuId: '6c3b2810-e2e2-40ab-ab1b-05f1d81b54e8',
          image:
            'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8emFwYXRvc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
          title: 'Zapatatilla deportiva OKCLYS',
          shortDescription: 'Zapatilla deportiva color rojo con blanco',
          description:
            'Nuestras zapatillas están hechas con materiales de alta calidad y cuentan con una suela de goma antideslizante y duradera, perfecta para cualquier tipo de terreno. Además, el diseño ergonómico y la plantilla acolchada proporcionan un soporte y comodidad excepcionales, lo que las convierte en la elección perfecta para cualquier actividad física.',
          price: 119.99,
          stock: 6
        },
        {
          skuId: 'c7b18ad2-d2d2-4746-94b7-29e19b9a7b8e',
          image:
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
          title: 'Tennis Nike FREE',
          shortDescription: 'Tennis nike free deportivo color rojo con blanco',
          description:
            'Con una suela de goma que proporciona una tracción excepcional y una plantilla acolchada que ofrece un gran soporte y amortiguación, las Nike Free son ideales para correr, caminar o simplemente para el día a día. Además, el tejido transpirable y el diseño sin cordones aseguran que tus pies permanezcan frescos y cómodos durante todo el día.',
          price: 599.99,
          stock: 20
        },
        {
          skuId: '53b2c2d6-e42e-4312-81a7-f3924b0d7cc8',
          image:
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8emFwYXRvc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
          title: 'Zapatilla Nike AIR Fuerza Area',
          shortDescription: 'Zapatilla Nike AIR edición Fuerza Area color beige',
          description:
            '¡Ven a conocer nuestras impresionantes Nike Air Force 1! Estas zapatillas son el calzado perfecto para cualquier amante del estilo y del deporte, gracias a su diseño icónico y a la tecnología de amortiguación Nike Air.',
          price: 899.99,
          stock: 3
        },
        {
          skuId: 'a9b6e9ac-efec-4d8f-b2ee-cb2bcf547106',
          image:
            'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8emFwYXRvc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
          title: 'Tennis Nike Air Brasilia',
          shortDescription: 'Zapatilla Nike AIR edición Brazil color naranja',
          description:
            'Con su color naranja vibrante y su diseño icónico, las Nike Air Brazil se verán increíbles con cualquier atuendo. Además, están disponibles en una amplia gama de tallas para que encuentres el par perfecto para ti. ¡No esperes más y adquiere ya tus Nike Air Brazil en color naranja!',
          price: 399.99,
          stock: 100
        },
        {
          skuId: '537ec9c1-c80a-4d01-894f-4b4f69f0d61c',
          image:
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8emFwYXRvc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
          title: 'Tennis Nike Superrep',
          shortDescription: 'Tennis Nike Superrep color Verde',
          description:
            'Los Nike Superrep son unos zapatos de entrenamiento de alta calidad diseñados para mejorar tu rendimiento y brindarte un mayor confort durante tus sesiones de entrenamiento. Estos tenis cuentan con una suela de goma duradera y una amortiguación reactiva que te permitirá moverte con facilidad y rapidez.',
          price: 699.99,
          stock: 90
        },
        {
          skuId: 'f9e9daa7-ef87-49d8-be33-76a62c042e47',
          image:
            'https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80',
          title: 'Zapatilla Nike Air Deluxe',
          shortDescription: 'Zapatilla Nike Air Deluxe color negro',
          description:
            'Las Nike Air Deluxe son unas zapatillas de running de alta calidad que te brindarán una amortiguación y comodidad excepcionales. La parte superior de malla transpirable y el sistema de amortiguación Air Max te permitirán mantener tus pies frescos y cómodos durante todo el día. El color negro es elegante y versátil, y se verá genial con cualquier atuendo de running.',
          price: 3999.99,
          stock: 9
        }
      ]
      data.forEach(async (elem) => {
          await req.context.models.Products.create(elem)
      })
      return res.status(200).json({
        message: 'Data dummy successfully created',
        success: true
      })
    }
    return res.status(400).json({
      message: 'Data already created',
      success: false
    })
  } catch (error) {
    console.log(error)
    if (error && error.code) {
      return res.status(error.code).json(error)
    }
    return res.status(500).json(error)
  }
}

module.exports = {
  SetProducts
}
