import Link from "next/link"

const menu = [
  {
    name: 'About',
    link: 'about'
  },
  {
    name: 'Contact Us',
    link: 'contact-us'
  },
  {
    name: 'Sign Up',
    link: 'sign-up'
  },
  {
    name: 'Sign In',
    link: 'sign-in'
  },
  {
    name: 'Subscription',
    link: 'subscription'
  }
]
const HelpCenter = () => {
  return (
    <div className="dropdown">
      {menu.map((v, i) => (
        <div key={i}>
          <Link className='inline-block w-full py-2 px-3 rounded-md hover:bg-slate-300 dark:hover:bg-slate-500' href={{ pathname: v.path }}>{v.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default HelpCenter