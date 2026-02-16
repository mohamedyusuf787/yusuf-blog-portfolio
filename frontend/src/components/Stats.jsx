import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 1, });
  // 'threshold: 0.5' means it triggers when 50% of the element is visible

  return (
    <>
         <section className="my-10">
        <h1 className="anton-reg text-white text-4xl font-bold text-center mt-10">Impact in Numbers</h1>
        <div className="cards-section mx-10 flex items-center justify-center">

          <div ref={ref} className=" flex flex-col md:flex-row gap-8 text-center mt-10 justify-center items-center">
            <div className="bg-[#121212] border border-yellow-500 p-6 rounded-xl w-[220px] md:w-[300px]">
              <h2 className="text-white text-4xl font-bold">
                {inView && <CountUp end={10} duration={3} />}
              </h2>
              <p className="text-gray-400 mt-2">From idea to production
              </p>
            </div>

            <div className="bg-[#121212] border border-yellow-500 p-6 rounded-xl w-[220px] md:w-[300px]">
              <h2 className="text-white text-4xl font-bold">
                {inView && <CountUp end={1} duration={3} />}
              </h2>
              <p className="text-gray-400 mt-2">Years Hands-On Experience</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
