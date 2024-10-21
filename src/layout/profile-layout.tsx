import Footer from '@/components/footer'
import MainNavbar from '@/components/home/navbar/main-nav'

const ProfileLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => (
  <>
    <div
      style={{
        background: '#f2e9e9',
        position: 'sticky',
        top: '0',
        width: '100%'
      }}
    >
      <MainNavbar />
    </div>
    {children}
    <Footer />
  </>
)

export default ProfileLayout
