import React from 'react'
import FilterCategory from '@/Components/ProductListFilters/Filters/FilterCategory'
import FilterProvider from '@/Components/ProductListFilters/Filters/FilterProvider'
import FilterMeasure from '@/Components/ProductListFilters/Filters/FilterMeasure'
import FilterPrice from '@/Components/ProductListFilters/Filters/FilterPrice'

const ProductListFilters = () => {
  return (
    <section className='ProductListFilters'>

      <FilterCategory />
      <FilterProvider />
      <FilterMeasure />
      <FilterPrice />

      <article className="SingleFilterContainer Single">
        <h3>Descuento</h3>
      </article>

    </section>
  )
}

export default ProductListFilters