import Footer from '@/components/footer'
import HomeLayout from './home-layout'

const DefaultLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => (
  <>
    <HomeLayout />
    {children}
    <Footer />
  </>
)

export default DefaultLayout
