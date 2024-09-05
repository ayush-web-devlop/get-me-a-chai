import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center text-white h-[40vh] gap-4 mx-5 md:mx-0">
      <div className="font-bold text-3xl flex items-center justify-center mx-4 md:mx-0 ">Buy me a chai 
        <span><img src="/chai.gif" width={50} /> </span>
      </div>
      <p>A crowdfunding platform for creators. Fund your creators!</p>
      <div>
      <button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start here</button>

      <button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>

      
      </div>
    </div>
    <div className="bg-white h-1 opacity-15">
    </div>
    <div className="text-white py-16 mx-6 md:mx-0">
      <h1 className="text-2xl font-bold text-center">Give your audience
      an easy way to say thanks.</h1>
      <p className="text-center my-4 text-gray-300 mb-10">Your fans can make the payment (buy you a chai) and leave a message.</p>
      <div className="flex flex-col md:flex-row gap-5 justify-around">
        <div className="flex flex-col items-center justify-center">
          <img src="/help.gif" width={88}/>
          <p>Fans want to help</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img src="/coins.gif" width={88}/>
          <p>Fans want to contribute</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img src="/group.gif" width={88}/>
          <p>Fans want to collaborate</p>
        </div>
      </div>
    </div>
    </>
  );
}
