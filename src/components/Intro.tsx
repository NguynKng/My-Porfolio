export default function Intro() {
  return (
    <div className="relative lg:px-[10%] px-6 py-20 overflow-hidden">
      <div className="absolute right-0 top-0 translate-x-[55%] -translate-y-1/3">
        <div className="w-[70rem] h-[70rem] rounded-full border-[1px] border-gray-800 p-24">
          <div className="w-full h-full rounded-full border-[1px] border-gray-800 p-24">
            <div className="w-full h-full rounded-full border-[1px] border-gray-800 p-24">
              <div className="w-full h-full rounded-full border-[1px] border-gray-800 p-24">
                <div className="w-full h-full rounded-full border-[1px] border-gray-800 p-24"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[46rem]">
        <div className="before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('/src/assets/bg.png')] before:bg-cover before:bg-center relative overflow-hidden tracking-[0.3em]">
          <h1
            className="
  relative 
  inline-flex 
  items-center 
  justify-center 
  mx-auto 
  before:content-[''] 
  before:block 
  before:w-10 
  before:h-[2px] 
  before:bg-gray-500 text-yellow-500
  before:mr-3
"
          >
            HELLO WORLD
          </h1>
        </div>
        <div className="text-white mt-10">
          <p className="lg:text-8xl text-4xl font-medium">
            {`I'm Nguyen Khang, a web and mobile developer based in
            Ho Chi Minh City.`}
          </p>
        </div>
      </div>
    </div>
  );
}
