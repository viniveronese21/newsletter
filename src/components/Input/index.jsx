// eslint-disable-next-line react/prop-types
const Input = ({type, placeholder, name, label}) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={name}
        className="text-lg text-alura-200 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        required
        id={name}
        type={type}
        placeholder={placeholder}
        className="px-3 py-1
                  rounded-md outline-none dark:bg-dark-200 dark:text-gray-200
                  text-dark-200 placeholder:text-gray-400 placeholder:dark:text-gray-600
                  placeholder:text-xs placeholder:uppercase placeholder:font-bold
                  focus:border-2 focus:border-alura-200 focus:dark:border-alura-100
                  focus:invalid:border-2 focus:invalid:border-red-500 dark:focus:invalid:border-2
                  dark:focus:invalid:border-red-500 caret-alura-200 dark:caret-alura-100
                  "
      />
    </div>
  )


}

export default Input
