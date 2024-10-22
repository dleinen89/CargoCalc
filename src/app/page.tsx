import CargoVolumeCalculator from '@/components/CargoVolumeCalculator'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <CargoVolumeCalculator />
    </main>
  )
}