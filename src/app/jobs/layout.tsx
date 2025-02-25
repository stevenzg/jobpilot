import { Sidebar } from "@/components/sidebar"
import { TopNav } from "@/components/top-nav"

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="mx-4 flex-1 overflow-y-auto bg-gray-50 rounded-tl-2xl rounded-tr-2xl">
          <div className="p-4">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
