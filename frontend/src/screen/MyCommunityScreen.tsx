import React from 'react'
import CommunityCard from '../components/CommunityCard'
import Footer from '../components/Footer'
import Header from '../components/Header'

function MyCommunityScreen() {
  const communities = [
    {
      key: 'HKU',
      name: 'The University of Hong Kong',
      thumbnail: 'https://180dc.org/wp-content/uploads/2015/03/HKU.jpg',
    },
    {
      key: 'HKUST',
      name: 'Hong Kong University of Science and Technology',
      thumbnail:
        'https://hkust.edu.hk/system/files/styles/multimedia_gallery_images_view/private/2018-12/aerial_M0030_01_001.jpg?itok=X_us6tqs',
    },
    {
      key: 'CUHK',
      name: 'The Chinese University of Hong Kong',
      thumbnail:
        'https://www.cpr.cuhk.edu.hk/wp-content/uploads/resource/videoandphoto/photo-03.jpg',
    },
    {
      key: 'PolyU',
      name: 'The Hong Kong Polytechnic University',
      thumbnail:
        'https://www.polyu.edu.hk/-/media/department/home/content/about-polyu/strategic-plan_2_1080x524.jpg?bc=ffffff&h=262&w=540&hash=9ADF50BE4C65546D3223DE45AC9B81CC',
    },
    {
      key: 'CityU',
      name: 'City University of Hong Kong',
      thumbnail:
        'https://images.e-flux-systems.com/314424_c3ec2192e57413eb363d0710dc3239e6.jpg,1600',
    },
    {
      key: 'HKBU',
      name: 'Hong Kong Baptist University',
      thumbnail:
        'https://img.emg-services.net/institutes/institute21467/hong-kong-baptist-university-hkbu.png',
    },
  ]
  return (
    <div>
      <Header />
      <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3 min-h-screen">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {communities.map((community, i) => (
            <CommunityCard key={i} community={community} join={false} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MyCommunityScreen
