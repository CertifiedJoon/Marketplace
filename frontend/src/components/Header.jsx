import { FaCaretDown } from 'react-icons/fa'
import profile from '../static/images/profile.PNG'
function Header() {
  return (
    <div className="sticky top-0 z-50 py-0">
      <div className="2xl:container 2xl:mx-auto lg:mx-10 mx-3 bg-white">
        <div className="navbar px-0">
          <div className="flex-1">
            <a
              href="/"
              className="btn btn-link normal-case text-xl hover:no-underline px-0"
            >
              Marketplace
            </a>
          </div>
          <div className="show md:hidden">
            <a href="/" className="w-full text-xs">
              <div className="badge badge-primary text-white">HKU</div>
            </a>
          </div>
          <div className="hidden md:block flex-non">
            <ul className="menu menu-horizontal rounded-box">
              <li>
                <a href="/" className="w-full text-xs">
                  <div className="badge badge-primary text-white">HKU</div>
                </a>
              </li>
              <li>
                <a href="/" className="w-full text-xs">
                  Notification
                </a>
              </li>
              <li tabIndex="0">
                <a href="/" className="text-xs">
                  I'm Buying!
                  <FaCaretDown />
                </a>
                <ul className="bg-transparent dropdown-content w-full p-2">
                  <li className="rounded">
                    <button className="z-10 bg-white btn btn-active btn-primary hover:bg-white active:btn-primary focus:btn-primary text-xs active">
                      I'm Buying!
                    </button>
                  </li>
                  <li className="rounded">
                    <button className="z-10 bg-white btn btn-ghost hover:bg-white active:btn-secondary focus:btn-secondary text-xs">
                      I'm Selling!
                    </button>
                  </li>
                </ul>
              </li>
              <li>
                <div className="w-20">
                  <img
                    className="mask mask-squircle"
                    src={profile}
                    alt="profile"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="header-divider" />
    </div>
  )
}

export default Header
