import Footer from '@/components/footer'
import MainNavbar from '@/components/home/navbar/main-nav'
import SearchParts from '@/components/home/search-parts'

function convertPath(inputPath: string) {
  let result = inputPath.replace(/\//g, ' ').trim();
  result = result.replace(/-/g, ' ');
  result = result.split(' ')[0];
  return result.toUpperCase();
}

const ProfileLayout = ({
  children,
  pathname
}: Readonly<{
  children: React.ReactNode
  pathname?: string | null
}>) => {
  return (
    <>
      <div>
        <section className='fixed top-0 z-[9999] w-full'>
          <MainNavbar />
        </section>
        <div className='flex w-full flex-col items-center justify-center gap-4 bg-car-ui bg-cover bg-bottom bg-no-repeat md:gap-10' style={{ minHeight: 'calc(100vh - 9rem)' }}>
          <section className='w-full container'>
            <SearchParts />
          </section>
          <div className='rounded-3xl border border-white/50 bg-gradient-to-r from-[#ffffff] to-[#6EB03166] p-4 backdrop-blur-md'>
            <h2 className='text-start text-base font-bold tracking-wide text-primary-text sm:text-xl md:text-5xl'>
              {convertPath(pathname as string)}
            </h2>
          </div>
        </div>
      </div>
      {children}
      <Footer />
    </>
  )
}

export default ProfileLayout
