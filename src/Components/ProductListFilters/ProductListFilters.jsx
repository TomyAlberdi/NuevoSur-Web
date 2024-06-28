import React from 'react'
import FilterCategory from '@/Components/ProductListFilters/Filters/FilterCategory'
import FilterProvider from '@/Components/ProductListFilters/Filters/FilterProvider'
import FilterMeasure from '@/Components/ProductListFilters/Filters/FilterMeasure'
import FilterPrice from '@/Components/ProductListFilters/Filters/FilterPrice'
import FilterDiscount from '@/Components/ProductListFilters/Filters/FilterDiscount'

const ProductListFilters = () => {
  return (
    <section className='ProductListFilters'>

      <FilterCategory />
      <FilterProvider />
      <FilterMeasure />
      <FilterPrice />
      <FilterDiscount />

    </section>
  )
}

export default ProductListFilters