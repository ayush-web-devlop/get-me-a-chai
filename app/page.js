import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center text-white h-[40vh] gap-4">
      <div className="font-bold text-3xl flex items-center justify-center ">Buy me a chai 
        <span><img src="/chai.gif" width={50} /> </span>
      </div>
      <p>A crowdfunding platform for creators. Get funded by your fans!</p>
      <div>
      <button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start here</button>

      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
      <span class="relative px-5 py-2.5 transition-all ease-in      duration-75 bg-white dark:bg-gray-900 rounded-md      group-hover:bg-opacity-0">
      Read More
      </span>
      </button>
      </div>
    </div>
    <div className="bg-white h-1 opacity-15">
     dfsd
    </div>
    <div className="text-white">
      <h1>Your fans can buy you a chai</h1>
      <div className="flex gap-5"></div>
    </div>
    </>
  );
}
