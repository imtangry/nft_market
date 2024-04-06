import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

const socialLink = [
    {
        icon: (<TiSocialFacebook />),
        href: '#'
    },
    {
        icon: (<TiSocialLinkedin />),
        href: '#'
    },
    {
        icon: (<TiSocialTwitter />),
        href: '#'
    },
    {
        icon: (<TiSocialYoutube />),
        href: '#'
    },
    {
        icon: (<TiSocialInstagram />),
        href: '#'
    },

]
function SocialLink() {
    return (
        <div className="flex my-3 px-2">
            {
                socialLink.map((v, i) => (
                    <a className="mr-3 text-2xl" href={v.href} key={i}>
                        {v.icon}
                    </a>
                ))
            }
        </div>
    )
}

export default SocialLink