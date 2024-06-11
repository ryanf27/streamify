import SubscriptionDetail from "@/Layouts/Authenticated/SubscriptionDetail";
import MenuItem from "@/Layouts/Authenticated/MenuItem";
import { UserMenu, UserOthers } from "@/Layouts/Authenticated/MenuList";

export default function Sidebar({ auth }) {
    return (
        <aside className="fixed z-50 w-[300px] h-full bg-white shadow-lg">
            <div className="flex flex-col p-6 pr-0 border-r border-gray-200 overflow-y-auto h-full">
                <a href="/">
                    <img
                        src="/images/moonton.svg"
                        alt="Moonton Logo"
                        className="h-12 w-auto"
                    />
                </a>
                <div className="links flex flex-col mt-10 h-full gap-12">
                    <div>
                        <div className="text-gray-600 text-sm mb-4">Menu</div>
                        {UserMenu.map((menu, index) => (
                            <MenuItem
                                key={`${index}-${menu.text}`}
                                link={menu.link}
                                icon={menu.icon}
                                text={menu.text}
                                isActive={
                                    menu.link && route().current(menu.link)
                                }
                            />
                        ))}
                    </div>
                    <div>
                        <div className="text-gray-600 text-sm mb-4">Others</div>
                        {UserOthers.map((menu, index) => (
                            <MenuItem
                                key={`${index}-${menu.text}`}
                                link={menu.link}
                                icon={menu.icon}
                                text={menu.text}
                                isActive={
                                    menu.link && route().current(menu.link)
                                }
                                method={menu.method}
                            />
                        ))}
                    </div>

                    {auth.activePlan && (
                        <SubscriptionDetail
                            name={auth.activePlan.name}
                            isPremium={auth.activePlan.name === "Premium"}
                            remainingActiveDays={
                                auth.activePlan.remainingActiveDays
                            }
                            activeDays={auth.activePlan.activeDays}
                        />
                    )}
                </div>
            </div>
        </aside>
    );
}
