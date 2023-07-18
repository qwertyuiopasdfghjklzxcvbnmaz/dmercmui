
import DashboardLayout from "@/components/layout/dashboard-layout";
// DashboardLayout
export default function DBLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <DashboardLayout>{children}</DashboardLayout>
    )
  }