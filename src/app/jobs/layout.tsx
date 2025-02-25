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
        <main className="flex-1 overflow-y-auto p-4">
          <div className="px-4 py-2 bg-gray-50 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
