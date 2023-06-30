import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useEffect } from "react"

const ToggleTheme = () => {

  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
  const pageClasses = document.documentElement.classList

  const toggle = () => {
    pageClasses.toggle('dark')
  }

  useEffect(()=> {
    systemPreference && pageClasses.add('dark')
  }, [pageClasses, systemPreference])

  return (
    <div className="hidden sm:block">
      <MoonIcon
        onClick={toggle}
        className='h-8 text-white dark:hidden cursor-pointer'
      />
      <SunIcon
        onClick={toggle}
        className='h-8 text-white hidden dark:block cursor-pointer'
      />
    </div>
  )
}

export default ToggleTheme
