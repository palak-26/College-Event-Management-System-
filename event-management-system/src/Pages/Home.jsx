// src/pages/Home.jsx
import left from "../assets/angle-left.png"
import right from "../assets/chevron.png"
const Home = () => {
  return (
    <section className="bg-gray-50 h-screen flex  justify-between text-center px-4 bg-gradient-to-br from-indigo-950 via-violet-950 to-purple-700 dark:text-white dark:bg-slate-800">
      <div id="left-part " className="flex flex-col w-1/2 justify-center items-center gap-y-8"> 
        <h1 className="text-5xl font-semibold">Event Management System</h1>
        <h3 className="text-3xl ">Streamline your events with our powerfull management platform</h3>
        <button className="bg-purple-400 text-white font-semibold w-1/5 p-4 rounded-md text-xl">Get Started</button>
      </div>
      <div id="right-part" className="w-1/2 h-screen items-center justify-center justify-end  p-4 ">
         <div className="h-4/6 mt-32 bg-slate-300 rounded-3xl flex flex-col gap-y-4 ">
          <div className="rounded-tl-3xl rounded-tr-3xl bg-blue-950 h-14 p-4 flex justify-center items-center justify-between">
            <div className="flex gap-x-4 w-1/3">
              <div className="h-5 w-7 bg-indigo-900 rounded-md"></div>
            <h4 className="text-white font-bold">DashBoard</h4>
            </div>
            <div className="w-5 h-5 rounded-full bg-violet-700"></div>
          </div>

          <div className="h-1/3 gap-x-10 p-4 flex justify-evenly ">
            <div className="rounded-3xl bg-indigo-950 text-white h-full w-1/3 p-6 flex flex-col justify-around">
              <h1>Music Festival</h1>
              <h2>Feb 15</h2>
            </div>
            <div className="rounded-3xl bg-indigo-500 text-white h-full w-1/3 p-6 flex flex-col justify-around">
              <h1>Startup Conference</h1>
              <h2>Oct 8</h2>
            </div>
            <div className="rounded-3xl bg-pink-500 text-white h-full w-1/3 p-6 flex flex-col justify-around">
              <h1>Art Expo </h1>
              <h2>Apr 21</h2>
            </div>
          </div>

          <div className="rounded-3xl w-2/3 bg-white ml-4 p-4">
            <div className="flex justify-around">
              <h1 className="text-black">A Calender</h1>
              <div className="flex justify-center items-center">
                <h1><img src={left} alt="" className="h-5 w-5" /></h1>
                <div className="h-4 w-16 bg-gray-500/70 rounded-full"></div>
                <h1><img src={right} alt=""className="h-5 w-5"  /></h1>
              </div>
            </div>

            <div className="w-full h-fit flex flex-col flex-wrap gap-y-4">
              <div className="w-full text-gray-600 flex justify-center gap-x-9  text-sm"><h1>S</h1>
              <h1>M</h1>
              <h1>T</h1>
              <h1>W</h1>
              <h1>T</h1>
              <h1>F</h1>
              <h1>S</h1>
              <h1>S</h1>
              <h1>S</h1>
              
              </div>

              <div className="w-full  flex items-center justify-center gap-x-9">
                <div className="h-2 w-2 rounded-full bg-gray-500/45"> </div>
                <div className="h-2 w-2 rounded-full bg-gray-500/45"> </div>
                <div className="h-2 w-2 rounded-full bg-gray-500/45"> </div>
                <div className="h-2 w-2 rounded-full bg-gray-500/45"> </div>
                <div className="h-3 w-3 rounded-full bg-indigo-600"> </div>
                <div className="h-4 w-4 rounded-full bg-indigo-600"> </div>
                <div className="h-4 w-4 rounded-full bg-indigo-600"> </div>
                <div className="h-4 w-4  rounded-full bg-indigo-600"> </div>
                <h1 className="text-black">1</h1>
              </div>

              <div className="flex gap-x-9 justify-center flex-wrap">
                <h1 className="text-black">2</h1>
                <h1 className="text-black">3</h1>
                <h1 className="text-black">4</h1>
                <h1 className="text-black">5</h1>
                <h1 className="text-black">8</h1>
                <h1 className="text-black">9</h1>
                <h1 className="text-black">10</h1>
                <h1 className="text-black">11</h1>
                <h1 className="text-black">12</h1>


              </div>

              <div className="flex gap-x-8 justify-center flex-wrap">
                <h1 className="text-black">12</h1>
                <h1 className="text-black">13</h1>
                <h1 className="text-black">14</h1>
                <h1 className="text-black">15</h1>
                <h1 className="text-black">16</h1>
                <h1 className="text-black">17</h1>
                <h1 className="text-black">18</h1>
                <h1 className="text-black">19</h1>
                <h1 className="text-black">20</h1>


              </div>

              <div className="flex gap-x-8 justify-center flex-wrap">
                <h1 className="text-black">28</h1>
                <h1 className="text-black">29</h1>
                <h1 className="text-black">30</h1>
                <div className="h-2 w-2 rounded-full bg-gray-500/45"> </div>
                <div className="h-2 w-2 rounded-full bg-gray-500/45"> </div>
                <div className="h-2 w-2 rounded-full bg-gray-500/45"> </div>
                <div className="h-2 w-2 rounded-full bg-gray-500/45"> </div>
                <div className="h-2 w-2 rounded-full bg-gray-500/45"> </div>
                <div className="h-2 w-2 rounded-full bg-gray-500/45"> </div>
                <div className="h-2 w-2 rounded-full bg-gray-500/45"> </div>              


              </div>


            </div>

          </div>

         </div>

         {/* <div className="w-3/4 bg-gray-500 h-16 rounded-2xl mt-10"></div> */}

         
      </div>
    </section>
  );
};

export default Home;
