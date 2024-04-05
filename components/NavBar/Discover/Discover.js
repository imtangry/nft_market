import Link from 'next/link'

const discover = [
  {
    name: 'Collection',
    link: 'Collection'
  },
  {
    name: 'Search',
    link: 'search'
  },
  {
    name: 'Author Profile',
    link: 'author-profile'
  },
  {
    name: 'NFT Details',
    link: 'NFT-details'
  },
  {
    name: 'Account Setting',
    link: 'account-setting'
  },
  {
    name: 'Connect Wallet',
    link: 'connect-wallet'
  },
  {
    name: 'Blog',
    link: 'blog'
  },
]
const Discover = () => {
  return (
    <div>
      {discover.map((v, i) => (
        <div key={i}>
          <Link href={{ pathname: v.link }}>{v.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Discover