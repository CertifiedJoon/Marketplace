import React from 'react'

interface Input {
  inputType: string
  label: string
  checkboxOptions: Array<string>
  radioOptions: Array<string>
  selectOptions: Array<string>
}

type Props = {
  inputDetail: Input
  register: any
}

function CustomInput({ inputDetail, register }: Props) {
  return (
    <div>
      {inputDetail.inputType === 'Text' && (
        <>
          <div className="bg-base-200 border shadow-lg rounded-xl min-h-content my-3 w-full">
            <div className="form-control">
              <label className="label pb-1">
                <span className="label-text font-bold text-sm">
                  {inputDetail.label}
                </span>
              </label>
              <input
                type="text"
                placeholder={inputDetail.label}
                className="input input-bordered rounded-xl rounded-t-none"
                {...register(inputDetail.label)}
              />
            </div>
          </div>
        </>
      )}
      {inputDetail.inputType === 'Email' && (
        <>
          <div className="bg-base-100 border shadow-lg rounded-xl min-h-content my-3 w-full">
            <div className="form-control">
              <label className="label pb-1">
                <span className="label-text font-bold text-sm">
                  {inputDetail.label}
                </span>
              </label>
              <input
                type="email"
                placeholder={inputDetail.label}
                className="input input-bordered rounded-xl rounded-t-none"
                {...register(inputDetail.label)}
              />
            </div>
          </div>
        </>
      )}
      {inputDetail.inputType === 'PassCode' && (
        <>
          <div className="bg-base-100 border shadow-lg rounded-xl min-h-content my-3 w-full">
            <div className="form-control">
              <label className="label pb-1">
                <span className="label-text font-bold text-sm">
                  {inputDetail.label}
                </span>
              </label>
              <input
                type="password"
                placeholder={inputDetail.label}
                className="input input-bordered rounded-xl rounded-t-none"
                {...register(inputDetail.label)}
              />
            </div>
          </div>
        </>
      )}
      {inputDetail.inputType === 'Checkbox' && (
        <>
          <div className="bg-base-100 border shadow-lg rounded-xl min-h-content my-3 w-full">
            <div className="form-control">
              <label className="label pb-1 bg-base-200">
                <span className="label-text text-sm font-bold">
                  {inputDetail.label}
                </span>
              </label>
              {inputDetail.checkboxOptions.map((option, i) => (
                <label className="label cursor-pointer" key={i}>
                  <span className="label-text">{option}</span>
                  <input
                    type="checkbox"
                    className="checkbox"
                    value={option}
                    {...register(inputDetail.label)}
                  />
                </label>
              ))}
            </div>
          </div>
        </>
      )}
      {inputDetail.inputType === 'Toggle' && (
        <>
          <div className="bg-base-200 border shadow-lg rounded-xl min-h-content my-3  w-full">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text font-bold">
                  {inputDetail.label}
                </span>
                <input type="checkbox" className="toggle toggle-sm" />
              </label>
            </div>
          </div>
        </>
      )}
      {inputDetail.inputType === 'Radio' && (
        <>
          <div className="bg-base-100 border shadow-lg rounded-xl min-h-content my-3  w-full">
            <label className="bg-base-200 label pb-1">
              <span className="label-text text-sm font-bold">
                {inputDetail.label}
              </span>
            </label>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">
                  {inputDetail.radioOptions[0]}
                </span>
                <input
                  type="radio"
                  value={inputDetail.radioOptions[0]}
                  className="radio checked:bg-red-500"
                  {...register(inputDetail.label)}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">
                  {inputDetail.radioOptions[0]}
                </span>
                <input
                  type="radio"
                  value={inputDetail.radioOptions[1]}
                  className="radio checked:bg-blue-500"
                  {...register(inputDetail.label)}
                />
              </label>
            </div>
          </div>
        </>
      )}
      {inputDetail.inputType === 'Select' && (
        <>
          <div className="bg-base-200 border shadow-lg rounded-xl min-h-content my-3 w-full">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">
                  {inputDetail.label}
                </span>
              </label>
              <select
                className="select select-bordered rounded-xl rounded-t-none"
                {...register(inputDetail.label)}
              >
                {inputDetail.selectOptions.map((option, i) => (
                  <option value={option} key={i}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CustomInput
