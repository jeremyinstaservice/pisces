// import React from 'react'
import Elon from "../assets/testimonial/elon-musk.png";
import woman2 from "../assets/testimonial/woman2.png";
import Man2 from "../assets/testimonial/man2.avif";
import woman1 from "../assets/testimonial/man-pose.avif";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <div className="flex flex-col w-11/12 lg:w-2/3 mx-auto my-20">
      <div className="text-center">
        <h1 className="text-6xl font-bold">Testimonials</h1>
        <h3 className="text-xl lg:text-3xl">Hear from happy Pisces clients</h3>
      </div>
      {/* one */}
      <div className="flex flex-row flex-wrap gap-10 my-10">
        <div className="flex flex-col w-[25rem] h-auto  shadow-md hover:shadow-lg rounded-lg">
          <div className=" mx-auto">
            <img src={Elon} alt="" className=" rounded-full" />
          </div>
          <div className=" flex flex-col justify-between p-5 ">
            <h1 className="text-2xl font-semibold">CEO Space X</h1>

            <span className="text-sm font-semibold my-10">
              I'm thrilled to share my incredible experience as an investor in
              [Company Name]. Two years ago, I made a life-changing decision to
              purchase shares in this company, and the returns I have received
              have exceeded all expectations. From the very beginning, I was
              captivated by the company's vision, innovative approach, and
              unwavering commitment to excellence. The team's dedication to
              pushing boundaries and staying ahead of the curve convinced me
              that I was investing in something truly special.
            </span>

            <span className="flex justify-end my-10 font-bold before:content-['~']">
              Elon Musk
            </span>
          </div>
        </div>

        {/* two */}
        <div className="flex flex-col w-[40rem] h-auto  shadow-md hover:shadow-lg rounded-lg">
          <div className="w-[15rem] h-[20rem] mx-auto">
            <img src={woman2} alt="" className="w-full h-full rounded-full" />
          </div>
          <div className=" flex flex-col justify-between p-5 ">
            <h1 className="text-2xl font-semibold">
              CEO <br />
              <span> Social Marketing Agency</span>
            </h1>

            <span className="text-sm font-semibold my-10">
              As someone new to crypto investments, I was initially apprehensive
              about diving into the crypto world. However, this website has made
              my investment journey smooth and profitable. The platform's
              straightforward onboarding process, combined with their excellent
              customer support, gave me the confidence to get started. The
              automated portfolio management feature takes the stress out of
              monitoring the market constantly. I am pleased with the returns
              I've seen so far, and I am looking forward to growing my
              investments with this platform. If you are seeking a hassle-free
              and rewarding crypto investment experience, look no further!
            </span>

            <span className="flex justify-end my-10 font-bold before:content-['~']">
              Caroline Maggio
            </span>
          </div>
        </div>

        {/* three */}
        <div className="flex flex-col w-[40rem] h-auto  shadow-md hover:shadow-lg rounded-lg">
          <div className="w-[15rem] h-[20rem] mx-auto">
            <img src={woman1} alt="" className="w-full h-full rounded-full" />
          </div>
          <div className=" flex flex-col justify-between p-5 ">
            <h1 className="text-2xl font-semibold">
              CEO <span> Crypto trader</span>
            </h1>

            <span className="text-sm font-semibold my-10">
              Pisces has revolutionized my crypto investment experience! The
              user-friendly interface and quick account setup process made it a
              smooth onboarding journey. I'm thrilled by the wide selection of
              cryptocurrencies available for investment, catering to both
              beginners and seasoned investors. The platform's performance
              analytics and portfolio tracking features are comprehensive and
              easy to understand. Moreover, the team is constant updates and
              prompt communication demonstrate their dedication to customer
              satisfaction. I have seen remarkable growth in my portfolio, and
              I'm excited for what the future holds!
            </span>

            <span className="flex justify-end my-10 font-bold before:content-['~']">
              Janet Cooke
            </span>
          </div>
        </div>

        {/* four */}
        <div className="flex flex-col w-[25rem] h-auto shadow-md hover:shadow-lg rounded-lg">
          <div className="w-[15rem] h-[20rem] mx-auto">
            <img src={Man2} alt="" className="w-full h-full rounded-full" />
          </div>
          <div className=" flex flex-col justify-between p-5 ">
            <h1 className="text-2xl font-semibold">Song Writer</h1>

            <span className="text-sm font-semibold my-10">
              I have had my fair share of skepticism with crypto investment
              websites, but Pisces has shattered my doubts. The complete
              transparency in fees, terms, and performance reports instills
              confidence in the integrity of the platform. The verification
              process is thorough, ensuring a secure and compliant environment.
              Their customer support team is attentive and knowledgeable,
              addressing any concerns promptly. With their prudent risk
              management and diversified investment options, I feel reassured
              that my investments are in capable hands. Highly trustworthy and
              recommended for anyone seeking a reliable crypto investment
              avenue.
            </span>

            <span className="flex justify-end my-10 font-bold before:content-['~']">
              Bill Cunningham
            </span>
          </div>
        </div>
      </div>

      <div className="text-center my-20">
        <h1 className="text-4xl lg:text-6xl font-bold">
          Over $200 billion in Minned Crypto
        </h1>
        <h3 className="text-xl lg:text-3xl">
          Its time to spread the word and get everybody onboard, Crypto is the
          future and the future starts now.
        </h3>

        <div className="flex flex-col md:flex-row gap-5 justify-center my-20">
          <Link
            to="/signup"
            className="bg-blue-950 text-white font-bold px-10 py-3 border-2 border-blue-950 rounded-full"
          >
            Start Earning Now
          </Link>

          <Link
            to="/vote"
            className="border-2 border-blue-950 text-blue-950 text-lg font-bold px-10 py-3 rounded-full"
          >
            Vote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
