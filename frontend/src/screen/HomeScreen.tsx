import React from 'react'
import { useParams } from 'react-router-dom'
import CategoryMenu from '../components/CategoryMenu'
import Card from '../components/ItemCard'
import Header from '../components/Header'
import Footer from '../components/Footer'

type Props = {
  sell?: boolean
}

function HomeScreen({ sell = false }: Props) {
  /* 
      Frontend worklist:
      1. All links should be wrapped with react Link
      2. community badge must be dynamic and taken from a community state (redux)
      3. Buy/Sell badge must be dynamic and taken from a user state(redux)
      4. Category Menu must be dynamic and stored on a generic state(redux)
      5. Profile must be taken from a user state (redux)
      6. LazyLoad on cards must work and must integrate with redux
      7. Cards should be displayed based on a file (async)
      8. Cards must be filtered through category menu (async)
    */
  const params = useParams()
  return (
    <>
      <Header sell={sell} />
      {params.itemType !== undefined ? (
        <CategoryMenu activeType={params.itemType} />
      ) : (
        <CategoryMenu activeType="all" />
      )}

      <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default HomeScreen
