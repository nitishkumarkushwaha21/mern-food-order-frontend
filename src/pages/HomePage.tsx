import landing from '../assets/landing.png'
import appDownload from '../assets/appDownload.png'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-6 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">tuck into a takeway today </h1>
        <span className="text-xl"> Food is just a click away !</span>

      </div>

      <div className="grid md:grid-cols-2  gap-5 " >
        <img src={landing} alt="" />
        <div className='flex flex-col gap-4 items-center justify-center text-center' >
          <span className='font-bold text-3xl tracking-tighter'> Order takeway even faster</span>
          <span> download the MernEats app for faster ordering and personalised recommaendation </span>
          <img src={appDownload}  />
        </div>
      </div>




      
    </div>
  )
}
