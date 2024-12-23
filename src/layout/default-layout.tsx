import Footer from '@/components/footer'
import LandingPage from '@/pages/landing-page'

const DefaultLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => (
  <>
    <LandingPage />
    {children}
    <Footer />
  </>
)

export default DefaultLayout
