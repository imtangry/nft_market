import Image from "next/image"
import image from "@/assets/image"

const Notification = () => {
  return (
    <div className="dropdown right-0 w-64 md:w-72">
      <p className="p-2 font-bold">Notification</p>
      <div className="flex py-2 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-md">
        <div className="flex items-center pl-2 pr-4">
          <Image src={image.user} width='30' height='30' alt='user icon'></Image>
        </div>

        <div className="flex-1">
          <h4 className="font-bold"> Tom____O_o </h4>
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