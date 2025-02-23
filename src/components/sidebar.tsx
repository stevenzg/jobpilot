"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  HomeIcon,
  BriefcaseIcon,
  FileTextIcon,
  UserIcon,
  SettingsIcon
} from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Jobs", href: "/jobs", icon: BriefcaseIcon },
  { name: "Resume", href: "/resume", icon: FileTextIcon },
  { name: "Profile", href: "/profile", icon: UserIcon },
  { name: "Settings", href: "/settings", icon: SettingsIcon },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col w-64 bg-white border-r">
      <div className="flex h-16 items-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/jobpilot.jpg" alt="Jobpilot" className="h-8 w-8" />
          <span className="font-semibold text-xl">Jobpilot</span>
        </Link>
      </div>
      <nav className="flex-1 px-4 py-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname.startsWith(item.href)
          return (
            <Link key={item.name} href={item.href}>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  isActive && "bg-gray-100"
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Button>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
