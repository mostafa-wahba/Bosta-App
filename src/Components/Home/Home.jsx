import React, { useContext, useEffect, useState } from "react";
import img from "../../Assets/841cb0d0f210d54dd999cb2ed74eb5a9.png";
import img1 from "../../Assets/1b7a066dd1e46125bc726fdc73a5815b.gif";
import { useTranslation } from "react-i18next";
import { MainContext } from "../../Context/MainContext";
export default function Home() {
  let [t] = useTranslation();
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
      setAnimation(true);
  }, []);

  const SvgIcon = () => (
    <svg
      width="805"
      height="97"
      viewBox="0 0 805 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="slide-from-side"
    >
      <path
        d="M2 95L805 94.9999"
        stroke="#667085"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M340.76 1.83984H161.436V74.4631H354.26V15.3398C354.26 7.88399 348.216 1.83984 340.76 1.83984Z"
        fill="white"
        stroke="#667085"
        stroke-width="3"
      ></path>
      <path
        d="M160.824 20.9453H140.222C132.946 20.9453 126.345 25.2103 123.356 31.8437L116.813 46.3613C116.318 47.4592 116.062 48.6497 116.062 49.8539V74.4637H160.824V20.9453Z"
        fill="white"
        stroke="#667085"
        stroke-width="3"
      ></path>
      <circle
        r="17.2068"
        transform="matrix(-1 0 0 1 149.985 76.3611)"
        fill="white"
        stroke="#667085"
        stroke-width="3"
      ></circle>
      <circle
        r="6.85836"
        transform="matrix(-1 0 0 1 149.985 76.3603)"
        fill="white"
        stroke="#667085"
        stroke-width="3"
      ></circle>
      <circle
        r="17.2068"
        transform="matrix(-1 0 0 1 251.877 76.3611)"
        fill="white"
        stroke="#667085"
        stroke-width="3"
      ></circle>
      <circle
        r="6.85836"
        transform="matrix(-1 0 0 1 251.877 76.3603)"
        fill="white"
        stroke="#667085"
        stroke-width="3"
      ></circle>
      <circle
        r="17.2068"
        transform="matrix(-1 0 0 1 294.863 76.3611)"
        fill="white"
        stroke="#667085"
        stroke-width="3"
      ></circle>
      <circle
        r="6.85836"
        transform="matrix(-1 0 0 1 294.863 76.3603)"
        fill="white"
        stroke="#667085"
        stroke-width="3"
      ></circle>
      <path
        d="M322.327 5.91211H342.188C346.606 5.91211 350.188 9.49383 350.188 13.9121V70.3909H322.327V5.91211Z"
        fill="#E4E7EC"
      ></path>
    </svg>
  );
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center pt-32 gap-y-44 px-4 md:px-20 2xl:px-44">
        <div className="flex flex-col justify-center items-start relative z-40 text-start gap-y-6 order-1 px-4">
          <h1 className="text-black text-5xl font-black">{t("Home.text1")}</h1>
          <h3 className="text-textColor text-xl pe-14">{t("Home.text2")}</h3>
          <button className="rounded-md bg-secondMainColor py-1 px-4 text-white font-black">
            {t("Home.text3")}
          </button>
        </div>
        <div className="flex justify-start items-baseline relative order-2 lg:order-1 ps-24">
          <span className="scale-150">
            <img
              className="relative rounded-full max-w-full "
              src={img}
              alt=""
            />
          </span>
        </div>
      </div>
      <div
        className={`absolute -bottom-24 ${
          animation ? "-end-0 opacity-100" : "opacity-0 -end-full"
        }  z-[31] transition-all duration-[1.5s] delay-75 ease-linear rtl:scale-y-[-1] rtl:rotate-180
        `}
      >
        <SvgIcon />
      </div>
      <span className="absolute end-1/2 -bottom-[5.5rem] z-30 -translate-x-1/2 rtl:scale-y-[-1] rtl:rotate-180">
        <img src={img1} alt="" />
      </span>
    </>
  );
}
