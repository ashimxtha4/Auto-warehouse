import Footer from '@/components/footer'
import AuthLandingPage from '@/pages/auth-landing-page'

const AuthLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => (
  <>
    <AuthLandingPage />
    {children}
    <Footer />
  </>
)

export default AuthLayout
