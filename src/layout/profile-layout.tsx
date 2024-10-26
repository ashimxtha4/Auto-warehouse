import Footer from '@/components/footer'
import MainNavbar from '@/components/home/navbar/main-nav'
import Vehicle from '@/components/home/vehicle'

const ProfileLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => (
  <>
    <section
      style={{
        background: '#f2e9e9',
        position: 'sticky',
        top: '0',
        width: '100%',
        zIndex: '999'
      }}
    >
      <MainNavbar />
    </section>
    <Vehicle />
    {children}
    <Footer />
  </>
)

export default ProfileLayout
