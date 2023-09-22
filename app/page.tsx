import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Layer from '@/components/Layer'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between bg-animate">
        <Header />
        <Layer />
        <Footer />
    </main>
  )
}
