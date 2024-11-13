import { Suspense } from 'react'
import Footer from '@/components/footer'
import MainNavbar from '@/components/home/navbar/main-nav'
import Vehicle from '@/components/home/vehicle'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import Navbar from '@/components/home/navbar'

const ProfileLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => (
  <>
    <section
      style={{
        position: 'sticky',
        top: '0',
        width: '100%',
        zIndex: '999'
      }}
    >
      <Navbar />
      <MainNavbar />
    </section>
    <Suspense fallback={<LoadingSpinner />}>
      <Vehicle />
    </Suspense>
    {children}
    <Footer />
  </>
)

export default ProfileLayout
