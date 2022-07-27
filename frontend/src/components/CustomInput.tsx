import React from 'react'
import { Input } from '../interface/eventInterface'

type Props = {
  inputDetail: Input
  errors?: any
  register: any
}

function CustomInput({ inputDetail, errors, register }: Props) {
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
                placeholder={inputDetail.info}
                className="input input-bordered rounded-xl rounded-t-none"
                {...register(inputDetail.label, {
                  required: true,
                  minLength: inputDetail.lengthRange[0],
                  maxLength: inputDetail.lengthRange[1],
                })}
              />
              {errors[inputDetail.label]?.type === 'required' && (
                <p className="text-error">This field is required</p>
              )}
              {errors[inputDetail.label]?.type === 'maxLength' && (
                <p className="text-error">
                  {inputDetail.label} cannot exceed {inputDetail.lengthRange[1]}{' '}
                  characters
                </p>
              )}
              {errors[inputDetail.label]?.type === 'minLength' && (
                <p className="text-error">
                  {inputDetail.label} must be at least{' '}
                  {inputDetail.lengthRange[0]} characters
                </p>
              )}
            </div>
          </div>
        </>
      )}
      {inputDetail.inputType === 'Textarea' && (
        <>
          <div className="bg-base-200 border shadow-lg rounded-xl min-h-content my-3 w-full">
            <div className="form-control">
              <label className="label pb-1">
                <span className="label-text font-bold text-sm">
                  {inputDetail.label}
                </span>
              </label>
              <textarea
                placeholder={inputDetail.info}
                className="input input-bordered rounded-xl rounded-t-none"
                {...register(inputDetail.label, {
                  minLength: inputDetail.lengthRange[0],
                  maxLength: inputDetail.lengthRange[1],
                })}
              />
              {errors[inputDetail.label]?.type === 'maxLength' && (
                <p className="text-error">
                  {inputDetail.label} cannot exceed {inputDetail.lengthRange[1]}{' '}
                  characters
                </p>
              )}
              {errors[inputDetail.label]?.type === 'minLength' && (
                <p className="text-error">
                  {inputDetail.label} must be at least{' '}
                  {inputDetail.lengthRange[0]} characters
                </p>
              )}
            </div>
          </div>
        </>
      )}
      {inputDetail.inputType === 'Number' && (
        <>
          <div className="bg-base-200 border shadow-lg rounded-xl min-h-content my-3 w-full">
            <div className="form-control">
              <label className="label pb-1">
                <span className="label-text font-bold text-sm">
                  {inputDetail.label}
                </span>
              </label>
              <input
                type="number"
                placeholder={inputDetail.info}
                className="input input-bordered rounded-xl rounded-t-none"
                {...register(inputDetail.label, {
                  required: true,
                  min: inputDetail.range[0],
                  max: inputDetail.range[1],
                })}
              />
              {errors[inputDetail.label]?.type === 'required' && (
                <p className="text-error">This field is required</p>
              )}
              {errors[inputDetail.label]?.type === 'maxLength' && (
                <p className="text-error">
                  {inputDetail.label} cannot exceed {inputDetail.lengthRange[1]}{' '}
                  characters
                </p>
              )}
              {errors[inputDetail.label]?.type === 'minLength' && (
                <p className="text-error">
                  {inputDetail.label} must be at least{' '}
                  {inputDetail.lengthRange[0]} characters
                </p>
              )}
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
                placeholder={inputDetail.info}
                className="input input-bordered rounded-xl rounded-t-none"
                {...register(inputDetail.label, {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
              />
              {errors[inputDetail.label]?.type === 'required' && (
                <p className="text-error">This field is required</p>
              )}
              {errors[inputDetail.label]?.type === 'pattern' && (
                <p className="text-error">
                  {inputDetail.label} is in wrong format.
                </p>
              )}
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
                placeholder={inputDetail.info}
                className="input input-bordered rounded-xl rounded-t-none"
                {...register(inputDetail.label, {
                  required: true,
                  pattern: new RegExp(inputDetail.pattern),
                })}
              />
              {errors[inputDetail.label]?.type === 'required' && (
                <p className="text-error">This field is required</p>
              )}
              {errors[inputDetail.label]?.type === 'pattern' && (
                <p className="text-error">Wrong {inputDetail.label}</p>
              )}
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
                <span className="label-text text-xs ml-2">
                  {inputDetail.info}
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
                <span className="label-text text-xs">{inputDetail.info}</span>
                <input
                  type="checkbox"
                  className="toggle toggle-sm"
                  {...register(inputDetail.label)}
                />
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
              <span className="label-text text-xs">{inputDetail.info}</span>
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
                  {inputDetail.radioOptions[1]}
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
                <span className="label-text text-xs">{inputDetail.info}</span>
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
