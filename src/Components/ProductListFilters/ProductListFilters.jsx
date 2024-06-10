import React from 'react'
import FilterCategory from '@/Components/ProductListFilters/Filters/FilterCategory'
import FilterProvider from '@/Components/ProductListFilters/Filters/FilterProvider'
import FilterMeasure from '@/Components/ProductListFilters/Filters/FilterMeasure'

const ProductListFilters = () => {
  return (
    <section className='ProductListFilters'>

      <FilterCategory />
      <FilterProvider />
      <FilterMeasure />

      <article className="FilterContainer Price">
        <h3>Precio</h3>
      </article>

      <article className="SingleFilterContainer Single">
        <h3>Descuento</h3>
      </article>

    </section>
  )
}

export default ProductListFilters