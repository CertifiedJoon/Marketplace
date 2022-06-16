import CategoryMenu from '../components/CategoryMenu'
import Card from '../components/ItemCard'

function HomeScreen() {
  return (
    <>
      <CategoryMenu />
      <div className="xl:container xl:mx-auto lg:mx-20 mx-3">
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
        </div>
      </div>
    </>
  )
}

export default HomeScreen
