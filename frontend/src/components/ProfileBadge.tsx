import React from 'react'
import { FaHandSparkles, FaMedal, FaUser } from 'react-icons/fa'

type Props = {
  name: string
  brief?: boolean
}

function ProfileBadge({ name, brief = false }: Props) {
  if (name === 'PowerHost') {
    if (brief) {
      return (
        <div className="tooltip tooltip-success" data-tip="Hosted 10 events">
          <div className="badge badge-success badge-sm">
            <FaMedal />
          </div>
        </div>
      )
    }
    return (
      <div className="tooltip tooltip-success" data-tip="Hosted 10 events">
        <div className="badge badge-success badge-outline mr-1">
          <FaMedal />
          &nbsp;PowerHost
        </div>
      </div>
    )
  } else if (name === 'Celebrity') {
    if (brief) {
      return (
        <div
          className="tooltip tooltip-info tooltip-left"
          data-tip="Hosted 100 people"
        >
          <div className="badge badge-info badge-sm">
            <FaHandSparkles />
          </div>
        </div>
      )
    }
    return (
      <div className="tooltip tooltip-info" data-tip="Hosted 100 people">
        <div className="badge badge-info badge-outline mr-1">
          <FaHandSparkles />
          &nbsp;Celebrity
        </div>
      </div>
    )
  } else if (name === 'Clean') {
    if (brief) {
      return (
        <div
          className="tooltip tooltip-success tooltip-left"
          data-tip="100% Clean Transactions"
        >
          <div className="badge badge-success badge-sm">
            <FaHandSparkles />
          </div>
        </div>
      )
    }
    return (
      <div
        className="tooltip tooltip-success tooltip-left"
        data-tip="100% Clean Transactions"
      >
        <div className="badge badge-success badge-outline mr-1">
          <FaHandSparkles />
          &nbsp;Clean
        </div>
      </div>
    )
  } else if (name === 'PowerUser') {
    if (brief) {
      return (
        <div
          className="tooltip tooltip-success tooltip-left"
          data-tip="Bought and Sold 10 items"
        >
          <div className="badge badge-success badge-sm">
            <FaMedal />
          </div>
        </div>
      )
    }
    return (
      <div
        className="tooltip tooltip-success"
        data-tip="Bought and Sold 10 items"
      >
        <div className="badge badge-success badge-outline mr-1">
          <FaMedal />
          &nbsp;PowerUser
        </div>
      </div>
    )
  } else {
    return (
      <div className="tooltip tooltip-success" data-tip="Hosted 10 events">
        <div className="badge badge-success badge-outline mr-1">
          <FaUser />
          &nbsp;CommonUser
        </div>
      </div>
    )
  }
}

export default ProfileBadge
