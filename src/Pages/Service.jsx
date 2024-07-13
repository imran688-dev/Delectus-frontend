import Loader from "../components/Loader";
import PricingCard from "../components/Service/PricingCard";
import useFetch from "../hooks/useFetch"

export default function Service() {

  const { data: services, loading, error } = useFetch(`${import.meta.env.VITE_APP_URL}/api/services?populate=*`);

  if (loading) {
    return (
      <Loader />
    )
  }


  return (
    <>
      <header className="text-center h-[250px] bg-indigo-200 flex items-center justify-center">
        <h2 className="text-indigo-600 text-2xl font-bold">Explore services</h2>
      </header>

      <div className="max-w-[1170px] mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
          {
            services ? (services.map((service) =>
              <PricingCard key={service.id} service={service} />
            )) : (
              <h2 className="text-indigo-400 text-center text-2xl py-6">No service available</h2>
            )
          }

        </div>
      </div>

    </>
  )
}
