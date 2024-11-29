import { ArrowIcon, NotificationIcon, SideBarIcon } from "./Icons"
export function NavHeader () {
    return (
        <header className="flex items-center justify-between p-6" >
            <div className="flex items-center gap-4 cursor-pointer">
                <img className="size-12" src="/src/assets/image-avatar - copia.png"/>
                <span className=" flex items-center gap-2">Maria <ArrowIcon/></span>
            </div>
            <div className="flex gap-4 cursor-pointer">
                <NotificationIcon/>
                <SideBarIcon/>
            </div>
        </header>
    )
}