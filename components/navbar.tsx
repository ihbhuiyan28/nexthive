'use client'

import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger
} from '@/components/ui/tooltip';
import {
    House,
    UserRound
} from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <header>
            <nav
                className="border-b-2 min-h-12 grid grid-cols-3 items-center md:min-h-16"
                aria-label="Navbar"
            >
                <div>
                    <Link
                        href="/"
                        aria-label="Home"
                    >
                        <h1
                            className="text-xl font-bold md:text-2xl"
                            aria-label="nexthive logo"
                        >
                            nexthive
                        </h1>
                    </Link>
                </div>
                <div className="hidden md:flex md:items-center md:justify-center">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                    asChild
                                >
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                size="icon"
                                                aria-label="Home"
                                                asChild
                                            >
                                                <Link href="/">
                                                    <House aria-label="Home icon" />
                                                </Link>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <span className="font-semibold">
                                                Home
                                            </span>
                                        </TooltipContent>
                                    </Tooltip>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="col-span-2 flex items-center justify-end md:col-span-1">
                    <Button asChild>
                        <Link
                            href="/"
                            aria-label="Sign in"
                        >
                            <UserRound aria-label="User icon" />
                            <span>Sign in</span>
                        </Link>
                    </Button>
                </div>
            </nav>
        </header>
    );
}
