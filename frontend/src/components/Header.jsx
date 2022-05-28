import { FaCaretDown } from 'react-icons/fa'
import profile from '../static/images/profile.PNG'
function Header() {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100 px-0">
        <div className="flex-1">
          <a
            target="_blank"
            className="btn btn-link normal-case text-lg hover:no-underline px-0"
          >
            Marketplace
          </a>
        </div>
        <div className="flex-non">
          <ul className="menu menu-horizontal bg-base-100 rounded-box">
            <li>
              <a target="_blank" className="w-full text-xs">
                Notification
              </a>
            </li>
            <li tabindex="0">
              <a target="_blank" className="text-xs">
                I'm Buying!
                <FaCaretDown />
              </a>
              <ul className="bg-base-100 dropdown-content w-full p-2">
                <li className="rounded">
                  <button
                    active
                    className="z-10 bg-white btn btn-active btn-primary hover:bg-white active:btn-primary focus:btn-primary text-xs active"
                  >
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
                <img class="mask mask-squircle" src={profile} alt="profile" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
