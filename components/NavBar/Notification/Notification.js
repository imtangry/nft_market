import Image from "next/image"
import image from "@/assets/image"

const Notification = () => {
  return (
    <div>
      <p>Notification</p>
      <div>
        <div>
          <Image src={image.user} width='30' height='30' alt='user icon'></Image>
        </div>

        <div>
          <h4> Tom____O_o </h4>
          <p>
            this is msg......
          </p>
          <small>3 minutes ago</small>
        </div>

      <span></span>
      </div>
    </div>
  )
}

export default Notification