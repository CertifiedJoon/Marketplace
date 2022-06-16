import { FaHeart, FaShare } from 'react-icons/fa'
import PhotoGallery from '../components/PhotoGallery'
function ItemScreen() {
  return (
    <>
      <div className="container mx-auto">
        <div className="hidden lg:block">
          <div className="grid grid-cols-5 my-4">
            <div className="col-span-4">
              <h1>Nimbus 2000 Stolen From Set</h1>
            </div>
            <div className="col-span-1">
              <div className="grid grid-cols-2 gap-0">
                <button className="btn rounded btn-ghost text-xs px-0">
                  <FaHeart
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      color: 'hsl(var(--sf))',
                    }}
                  />
                  Save
                </button>
                <button className="btn rounded btn-ghost text-xs px-0">
                  <FaShare
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                    }}
                  />
                  Share
                </button>
              </div>
            </div>
          </div>
          <div className="vh50 relative">
            <div className="grid grid-cols-5 gap-2 h-full">
              <div
                className="col-span-3 bg-cover bg-no-repeat bg-center rounded-l-xl"
                style={{
                  'background-image': `url(
                    'https://api.lorem.space/image/car?w=800&h=800&hash=8B7BCDC2'
                  )`,
                }}
              ></div>
              <div className="col-span-1">
                <div className="grid grid-rows-2 gap-2 h-full">
                  <div
                    className="col-span-3 bg-cover bg-no-repeat bg-center"
                    style={{
                      'background-image': `url(
                    'https://api.lorem.space/image/car?w=800&h=800&hash=8B7BCDC2'
                  )`,
                    }}
                  ></div>
                  <div
                    className="col-span-3 bg-cover bg-no-repeat bg-center"
                    style={{
                      'background-image': `url(
                    'https://api.lorem.space/image/car?w=800&h=800&hash=8B7BCDC2'
                  )`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="grid grid-rows-2 gap-2 h-full">
                  <div
                    className="col-span-3 bg-cover bg-no-repeat bg-center rounded-tr-xl"
                    style={{
                      'background-image': `url(
                    'https://api.lorem.space/image/car?w=800&h=800&hash=8B7BCDC2'
                  )`,
                    }}
                  ></div>
                  <div
                    className="col-span-3 bg-cover bg-no-repeat bg-center rounded-br-xl"
                    style={{
                      'background-image': `url(
                    'https://api.lorem.space/image/car?w=800&h=800&hash=8B7BCDC2'
                  )`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-transparent absolute bottom-0 left-auto z-40">
                <label
                  for="my-modal-5"
                  className="rounded rounded-bl-xl bg-white btn btn-xs btn-outline btn-ghost text-gray-500"
                >
                  Show all photos
                </label>
              </div>
              <input type="checkbox" id="my-modal-5" class="modal-toggle" />
              <div class="modal">
                <div class="modal-box w-11/12 max-w-5xl">
                  <PhotoGallery />
                  <div class="modal-action bg-inherit">
                    <label
                      for="my-modal-5"
                      class="btn btn-sm btn-active btn-ghost"
                    >
                      Close
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden">tablet or smaller</div>
      </div>
    </>
  )
}

export default ItemScreen
