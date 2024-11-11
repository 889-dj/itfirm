"use client"
import { RiArrowDropDownLine } from "react-icons/ri";

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"

const links = [
    { "name": "Web development", "url": "/service/web" },
    { "name": "Mobile development", "url": "/service/mobile" },
    { "name": "Backup & Recovery", "url": "/service/backup" },
    { "name": "VoIP development", "url": "/service/voip" },
    { "name": "IT consulting", "url": "/service/itconsulting" },
    { "name": "Consulting", "url": "/service/consulting" },
    { "name": "Cloud services", "url": "/service/cloud" },
    { "name": "Cyber Security", "url": "/service/security" },
]

export function DropdownMenuCheckboxes() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="link" className="focus-visible:outline-none focus-visible:ring-0 ring-offset-0 ring-offset-inheritw">
                    <RiArrowDropDownLine className="scale-[2]" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                {links.map((link, index) => (
                    <DropdownMenuCheckboxItem key={index} className="focus-visible:outline-none focus-visible:ring-0">
                        <Link to={link.url} className="focus-visible:outline-none focus-visible:ring-0">
                            {link.name}
                        </Link>
                    </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

