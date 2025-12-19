import Link from "next/link"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu"

function MyNavigationMeny() {
    return (
        <div className="w-full p-4">
            <NavigationMenu className="mx-auto">
                <NavigationMenuList>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className="px-4 py-2">
                            <Link href={"/"}>
                                Home
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className="block px-3 py-2 hover:bg-muted rounded">
                            <Link href={"/auth/login"}>
                                Login
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className="block px-3 py-2 hover:bg-muted rounded">
                            <Link href={"/dashboard"}>
                                Dashboard
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
        </div>

    )
}

export default MyNavigationMeny