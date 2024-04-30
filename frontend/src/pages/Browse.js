import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import ShopCategory from './ShopCategory'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections'
import Newsletter from '../components/Newsletter/Newsletter'

const Browse = () => {
  return (
    <div>
      <Hero/>
      <ShopCategory/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
    </div>
  )
}

export default Browse
