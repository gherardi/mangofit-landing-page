export default function Grid() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          <div className="bg-gray-400/5 p-8 sm:p-10">
            <img
              className="w-full object-cover rounded-md"
              src="/fitactive.png"
              alt="Fitactive Logo"
            />
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10">
            <img
              className="w-full object-cover rounded-md"
              src="/mcfit.png"
              alt="Reform"
            />
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10">
            <img
              className="w-full object-cover rounded-md"
              src="/virgin-active.png"
              alt="Reform"
            />
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10">
            <img
              className="w-full object-cover rounded-md"
              src="/fit-up.png"
              alt="Reform"
            />
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10">
            <img
              className="w-full object-cover rounded-md"
              src="/fit-express.png"
              alt="Reform"
            />
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10">
            <img
              className="w-full object-cover rounded-md"
              src="/get-fit-be-strong.png"
              alt="Reform"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
