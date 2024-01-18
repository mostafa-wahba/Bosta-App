import React, { useContext } from "react";
import img from "../../Assets/7720441.jpg";
import { useTranslation } from "react-i18next";
import { MainContext } from "../../Context/MainContext";
export default function TrackingService() {
  const { trackingData } = useContext(MainContext);
  let [t, i18n] = useTranslation();
  return (
    <>
      {trackingData?.CurrentStatus.state === "CANCELLED" ? (
        <div className="flex flex-col gap-y-10 px-4 md:px-20 2xl:px-44">
          <div className="w-full flex items-center justify-center py-1 text-center">
            <div className=" w-full flex flex-col border rounded-2xl">
              <div className="flex items-center justify-center p-3 border-b md:p-8 w-full">
                <ul className="flex items-center justify-between w-full">
                  <li className="flex flex-col gap-2">
                    <p>
                      {t("TrackingService.shipmentNumber")}
                      {""}
                      {trackingData?.CurrentStatus.TrackingNumber}
                    </p>
                    <spna className="text-mainColor font-bold">
                      {trackingData?.CurrentStatus.state &&
                        t("TrackingService.shipmentCancelled")}
                    </spna>
                  </li>
                  <li className="flex flex-col gap-2">
                    <p>{t("TrackingService.lastUpdate")}</p>
                    <span className="font-bold text-lg">
                      {new Date(
                        trackingData?.CurrentStatus.timestamp
                      ).toLocaleDateString()}
                    </span>
                  </li>
                  <li className="flex flex-col gap-2">
                    <p>{t("TrackingService.merchantName")}</p>
                    <spna className="font-bold text-lg">
                      {trackingData?.provider}
                    </spna>
                  </li>
                  <li className="flex flex-col gap-2">
                    <p>{t("TrackingService.deliveryDue")}</p>
                    <span className="font-bold text-lg">
                      {trackingData?.PromisedDate
                        ? new Date(
                            trackingData.PromisedDate
                          ).toLocaleDateString(i18n.language, {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })
                        : t("TrackingService.notSpecified")}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center justify-center p-3 md:p-8 w-full gap-3">
                <ul className="flex items-center justify-between w-full relative">
                  <li className="flex justify-start w-1/3 relative before:absolute before:end-[-1rem] before:h-3 before:w-full before:bg-mainColor before:top-1/2 before:-translate-y-1/2 before:z-10">
                    <span className="rounded-full bg-mainColor text-white p-1 w-8 h-8 flex justify-center items-center relative z-20">
                      <i className="fa-solid fa-check"></i>
                    </span>
                  </li>
                  <li className="flex justify-start w-1/3 relative before:absolute before:h-3 before:w-full before:bg-mainColor before:top-1/2 before:-translate-y-1/2 before:z-10">
                    <span className="rounded-full bg-mainColor text-white p-1 w-8 h-8 flex justify-center items-center relative z-20">
                      <i className="fa-solid fa-check"></i>
                    </span>
                  </li>
                  <li className="flex justify-between w-1/3 relative before:absolute before:h-3 before:w-[calc(100%-1rem)] before:bg-gray-100 before:top-1/2 before:-translate-y-1/2 before:z-10 bottom-1/2 -translate-y-1/2 z-20">
                    <span className="rounded-full bg-mainColor text-white p-1 w-12 h-12 flex justify-center items-center absolute -start-8 z-20 top-1/2 -translate-y-1/2">
                      <i class="fa-solid fa-truck-fast fa-flip-horizontal"></i>
                    </span>
                    <span className="rounded-full bg-white border border-gray-400 text-gray-400 p-1 w-12 h-12 flex justify-center items-center absolute z-20 end-0 top-1/2 -translate-y-1/2">
                      <i class="fa-solid fa-user-tie"></i>
                    </span>
                  </li>
                </ul>
                <ul className="flex items-center justify-between w-full">
                  <li className="flex flex-col gap-2">
                    <p>{t("TrackingService.shipmentCreated")}</p>
                  </li>
                  <li className="flex flex-col gap-2">
                    <p>{t("TrackingService.shipmentReceivedByMerchant")}</p>
                  </li>
                  <li className="flex flex-col gap-2">
                    <p className="flex flex-col justify-center items-center">
                      {t(`TrackingService.shipmentNotDelivered`)}
                      <span className="text-mainColor">
                        {t("TrackingService.shipmentCancelledByMerchant")}
                      </span>
                    </p>
                  </li>
                  <li className="flex flex-col gap-2">
                    <p>{t("TrackingService.DELIVERED")}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-4">
            <div className="flex flex-col items-start justify-center gap-y-3 w-full lg:w-2/3 flex-wrap">
              <p>{t("TrackingService.shipmentDetails")}</p>
              <div className="flex flex-col border rounded-2xl w-full">
                <div className="flex flex-nowrap gap-16 border-b bg-[rgb(202,202,202,0.1)]">
                  <p className="py-6 px-8 text-start font-bold text-subTitleColor w-2/12">
                    {t("TrackingService.branch")}
                  </p>
                  <p className="py-6 px-8 text-start font-bold text-subTitleColor w-1/12">
                    {t("TrackingService.date")}
                  </p>
                  <p className="py-6 px-8 text-start font-bold text-subTitleColor w-1/12">
                    {t("TrackingService.time")}
                  </p>
                  <p className="py-6 px-8 text-start font-bold text-subTitleColor w-8/12">
                    {t("TrackingService.details")}
                  </p>
                </div>
                {trackingData.TransitEvents.reduce(
                  (acc, event, index, array) => {
                    // Always include the first and last events
                    if (index === 0 || index === array.length - 1) {
                      acc.push(event);
                    }

                    // Include last occurrence of specific states
                    const statesOfInterest = [
                      "PACKAGE_RECEIVED",
                      "OUT_FOR_DELIVERY",
                    ];
                    if (statesOfInterest.includes(event.state)) {
                      const lastIndex = acc.findIndex(
                        (e) => e.state === event.state
                      );
                      if (lastIndex >= 0) {
                        acc[lastIndex] = event; // Update to latest occurrence
                      } else {
                        acc.push(event); // Add new state
                      }
                    }

                    return acc;
                  },
                  []
                ).map((event, index) => (
                  <div
                    key={index}
                    className="flex flex-nowrap gap-16 border-b w-full"
                  >
                    <p className="py-6 px-8 text-start text-textColor text-nowrap w-2/12">
                      {event.hub
                        ? event.hub
                        : t("TrackingService.notSpecified")}
                    </p>
                    <p className="py-6 px-8 text-start text-textColor text-nowrap w-1/12">
                      {new Date(event.timestamp).toLocaleDateString()}
                    </p>
                    <p className="py-6 px-8 text-start text-textColor text-nowrap w-1/12">
                      {new Date(event.timestamp).toLocaleTimeString()}
                    </p>
                    {event.state === "CANCELLED" ? (
                      <p className="py-6 px-8 text-start text-textColor text-nowrap w-8/12 flex flex-col ">
                        {t(`TrackingService.shipmentNotDelivered`)}
                        <span className="text-mainColor">
                          {t("TrackingService.CANCELLED")}
                        </span>
                      </p>
                    ) : (
                      <p className="py-6 px-8 text-start text-textColor text-nowrap w-8/12">
                        {t(`TrackingService.${event.state}`)}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-y-3 w-full lg:w-1/3 flex-wrap">
              <p>{t("TrackingService.deliveryAddress")}</p>
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-16 border rounded-xl bg-[rgb(202,202,202,0.1)]">
                  <p className="py-6 px-8 text-start text-textColor">
                    امبابة شارع طلعت حرب مدينة العمال بجوار الرنس منزل 17 بلوك
                    33,cairo
                  </p>
                </div>
                <div className="flex justify-around border rounded-xl">
                  <span className="w-40">
                    <img className="max-w-full rounded-xl" src={img} alt="" />
                  </span>
                  <div className="flex flex-col justify-center items-center gap-y-4 w-1/2">
                    <p className="font-bold">
                      {t("TrackingService.problemWithShipment")}
                    </p>
                    <button className="bg-mainColor py-2 px-5 rounded-xl text-white w-full">
                      {t("TrackingService.reportProblem")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : trackingData?.CurrentStatus.state === "DELIVERED" ? (
        <div className="flex flex-col gap-y-10 px-4 md:px-20 2xl:px-44">
          <div className="w-full flex items-center justify-center py-1 text-center">
            <div className=" w-full flex flex-col border rounded-2xl">
              <div className="flex items-center justify-center p-3 border-b md:p-8 w-full">
                <ul className="flex items-center justify-between w-full">
                  <li className="flex flex-col gap-2">
                    <p>
                      {t("TrackingService.shipmentNumber")}
                      {""}
                      {trackingData?.CurrentStatus.TrackingNumber}
                    </p>
                    <spna className="text-green-500 font-bold">
                      {trackingData?.CurrentStatus.state &&
                        t("TrackingService.shipmentDelivered")}
                    </spna>
                  </li>
                  <li className="flex flex-col gap-2">
                    <p>{t("TrackingService.lastUpdate")}</p>
                    <span className="font-bold text-lg">
                      {new Date(
                        trackingData?.CurrentStatus.timestamp
                      ).toLocaleDateString()}
                    </span>
                  </li>
                  <li className="flex flex-col gap-2">
                    <p>{t("TrackingService.merchantName")}</p>
                    <spna className="font-bold text-lg">
                      {trackingData?.provider}
                    </spna>
                  </li>
                  <li className="flex flex-col gap-2">
                    <p>{t("TrackingService.deliveryDue")}</p>
                    <span className="font-bold text-lg">
                      {trackingData?.PromisedDate
                        ? new Date(
                            trackingData.PromisedDate
                          ).toLocaleDateString(i18n.language, {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })
                        : t("TrackingService.notSpecified")}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center justify-center p-3 md:p-8 w-full gap-3">
                <ul className="flex items-center justify-between w-full">
                  <li className="flex justify-start w-1/3 relative before:absolute before:end-[-1rem] before:h-3 before:w-full before:bg-green-500 before:top-1/2 before:-translate-y-1/2 before:z-10">
                    <span className="rounded-full bg-green-500 text-white p-1 w-8 h-8 flex justify-center items-center relative z-20">
                      <i className="fa-solid fa-check"></i>
                    </span>
                  </li>
                  <li className="flex justify-start w-1/3 relative before:absolute before:h-3 before:w-full before:bg-green-500 before:top-1/2 before:-translate-y-1/2 before:z-10">
                    <span className="rounded-full bg-green-500 text-white p-1 w-8 h-8 flex justify-center items-center relative z-20">
                      <i className="fa-solid fa-check"></i>
                    </span>
                  </li>
                  <li className="flex justify-between w-1/3 relative before:absolute before:h-3 before:w-[calc(100%-1rem)] before:bg-green-500 before:top-1/2 before:-translate-y-1/2 before:z-10">
                    <span className="rounded-full bg-green-500 text-white p-1 w-8 h-8 flex justify-center items-center relative end-8 z-20">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <span className="rounded-full bg-green-500 text-white p-1 w-8 h-8 flex justify-center items-center relative z-20">
                      <i className="fa-solid fa-check"></i>
                    </span>
                  </li>
                </ul>
                <ul className="flex items-center justify-between w-full">
                  <li className="flex flex-col gap-2">
                    <p>{t("TrackingService.shipmentCreated")}</p>
                  </li>
                  <li className="flex flex-col gap-2">
                    <p>{t("TrackingService.shipmentReceivedByMerchant")}</p>
                  </li>
                  <li className="flex flex-col gap-2">
                    <p>{t("TrackingService.shipmentOutForDelivery")}</p>
                  </li>
                  <li className="flex flex-col gap-2">
                    <p>{t("TrackingService.DELIVERED")}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-4">
            <div className="flex flex-col items-start justify-center gap-y-3 w-full lg:w-2/3 flex-wrap">
              <p>{t("TrackingService.shipmentDetails")}</p>
              <div className="flex flex-col border rounded-2xl w-full">
                <div className="flex flex-nowrap gap-16 border-b bg-[rgb(202,202,202,0.1)]">
                  <p className="py-6 px-8 text-start font-bold text-subTitleColor w-2/12">
                    {t("TrackingService.branch")}
                  </p>
                  <p className="py-6 px-8 text-start font-bold text-subTitleColor w-1/12">
                    {t("TrackingService.date")}
                  </p>
                  <p className="py-6 px-8 text-start font-bold text-subTitleColor w-1/12">
                    {t("TrackingService.time")}
                  </p>
                  <p className="py-6 px-8 text-start font-bold text-subTitleColor w-8/12">
                    {t("TrackingService.details")}
                  </p>
                </div>
                {trackingData.TransitEvents.reduce(
                  (acc, event, index, array) => {
                    if (index === 0 || index === array.length - 1) {
                      acc.push(event);
                    }
                    const statesOfInterest = [
                      "PACKAGE_RECEIVED",
                      "OUT_FOR_DELIVERY",
                    ];
                    if (statesOfInterest.includes(event.state)) {
                      const lastIndex = acc.findIndex(
                        (e) => e.state === event.state
                      );
                      if (lastIndex >= 0) {
                        acc[lastIndex] = event;
                      } else {
                        acc.push(event);
                      }
                    }

                    return acc;
                  },
                  []
                ).map((event, index) => (
                  <div
                    key={index}
                    className="flex flex-nowrap gap-16 border-b w-full"
                  >
                    <p className="py-6 px-8 text-start text-textColor text-nowrap w-2/12">
                      {event.hub
                        ? event.hub
                        : t("TrackingService.notSpecified")}
                    </p>
                    <p className="py-6 px-8 text-start text-textColor text-nowrap w-1/12">
                      {new Date(event.timestamp).toLocaleDateString()}
                    </p>
                    <p className="py-6 px-8 text-start text-textColor text-nowrap w-1/12">
                      {new Date(event.timestamp).toLocaleTimeString()}
                    </p>
                    <p className="py-6 px-8 text-start text-textColor text-nowrap w-8/12">
                      {t(`TrackingService.${event.state}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-y-3 w-full lg:w-1/3 flex-wrap">
              <p>{t("TrackingService.deliveryAddress")}</p>
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-16 border rounded-xl bg-[rgb(202,202,202,0.1)]">
                  <p className="py-6 px-8 text-start text-textColor">
                    امبابة شارع طلعت حرب مدينة العمال بجوار الرنس منزل 17 بلوك
                    33,cairo
                  </p>
                </div>
                <div className="flex justify-around border rounded-xl">
                  <span className="w-40">
                    <img className="max-w-full rounded-xl" src={img} alt="" />
                  </span>
                  <div className="flex flex-col justify-center items-center gap-y-4 w-1/2">
                    <p className="font-bold">
                      {t("TrackingService.problemWithShipment")}
                    </p>
                    <button className="bg-mainColor py-2 px-5 rounded-xl text-white w-full">
                      {t("TrackingService.reportProblem")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : trackingData?.CurrentStatus.state === "DELIVERED_TO_SENDER" ? (
        <div className="flex flex-col gap-y-10 px-4 md:px-20 2xl:px-44">
          <div className="w-full flex items-center justify-center py-1 text-center">
            <div className=" w-full flex flex-col border rounded-2xl">
              <div className="flex items-center justify-center p-3 border-b md:p-8 w-full">
                <ul className="flex items-center justify-between w-full">
                  <li className="flex flex-col gap-2">
                    <p>
                      {t("TrackingService.shipmentNumber")}
                      {""}
                      {trackingData?.CurrentStatus.TrackingNumber}
                    </p>
                    <spna className="text-amberbg-amber-400 font-bold">
                      {trackingData?.CurrentStatus.state &&
                        t("TrackingService.shipmentNotDelivered")}
                    </spna>
                  </li>
                  <li className="flex flex-col gap-2">
                    <p>{t("TrackingService.lastUpdate")}</p>
                    <span className="font-bold text-lg">
                      {new Date(
                        trackingData?.CurrentStatus.timestamp
                      ).toLocaleDateString()}
                    </span>
                  </li>
                  <li className="flex flex-col gap-2">
                    <p>{t("TrackingService.merchantName")}</p>
                    <spna className="font-bold text-lg">
                      {trackingData?.provider}
                    </spna>
                  </li>
                  <li className="flex flex-col gap-2">
                    <p>{t("TrackingService.deliveryDue")}</p>
                    <span className="font-bold text-lg">
                      {trackingData?.PromisedDate
                        ? new Date(
                            trackingData.PromisedDate
                          ).toLocaleDateString(i18n.language, {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })
                        : t("TrackingService.notSpecified")}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center justify-center p-3 md:p-8 w-full gap-3">
                <ul className="flex items-center justify-between w-full relative">
                  <li className="flex justify-start w-1/3 relative before:absolute before:end-[-1rem] before:h-3 before:w-full before:bg-amber-400 before:top-1/2 before:-translate-y-1/2 before:z-10">
                    <span className="rounded-full bg-amber-400 text-white p-1 w-8 h-8 flex justify-center items-center relative z-20">
                      <i className="fa-solid fa-check"></i>
                    </span>
                  </li>
                  <li className="flex justify-start w-1/3 relative before:absolute before:h-3 before:w-full before:bg-amber-400 before:top-1/2 before:-translate-y-1/2 before:z-10">
                    <span className="rounded-full bg-amber-400 text-white p-1 w-8 h-8 flex justify-center items-center relative z-20">
                      <i className="fa-solid fa-check"></i>
                    </span>
                  </li>
                  <li className="flex justify-between w-1/3 relative before:absolute before:h-3 before:w-[calc(100%-1rem)] before:bg-gray-100 before:top-1/2 before:-translate-y-1/2 before:z-10 bottom-1/2 -translate-y-1/2 z-20">
                    <span className="rounded-full bg-amber-400 text-white p-1 w-12 h-12 flex justify-center items-center absolute -start-8 z-20 top-1/2 -translate-y-1/2">
                      <i class="fa-solid fa-truck-fast fa-flip-horizontal"></i>
                    </span>
                    <span className="rounded-full bg-white border border-gray-400 text-gray-400 p-1 w-12 h-12 flex justify-center items-center absolute z-20 end-0 top-1/2 -translate-y-1/2">
                      <i class="fa-solid fa-user-tie"></i>
                    </span>
                  </li>
                </ul>
                <ul className="flex items-center justify-between w-full">
                  <li className="flex flex-col gap-2">
                    <p>{t("TrackingService.shipmentCreated")}</p>
                  </li>
                  <li className="flex flex-col gap-2">
                    <p>{t("TrackingService.shipmentReceivedByMerchant")}</p>
                  </li>
                  <li className="flex flex-col gap-2">
                    <p className="flex flex-col justify-center items-center">
                      {t(`TrackingService.shipmentNotDelivered`)}
                      <span className="text-amber-400">
                        {t("TrackingService.DELIVERED_TO_SENDER")}
                      </span>
                    </p>
                  </li>
                  <li className="flex flex-col gap-2">
                    <p>{t("TrackingService.DELIVERED")}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-4">
            <div className="flex flex-col items-start justify-center gap-y-3 w-full lg:w-2/3 flex-wrap">
              <p>{t("TrackingService.shipmentDetails")}</p>
              <div className="flex flex-col border rounded-2xl w-full">
                <div className="flex flex-nowrap gap-16 border-b bg-[rgb(202,202,202,0.1)]">
                  <p className="py-6 px-8 text-start font-bold text-subTitleColor w-2/12">
                    {t("TrackingService.branch")}
                  </p>
                  <p className="py-6 px-8 text-start font-bold text-subTitleColor w-1/12">
                    {t("TrackingService.date")}
                  </p>
                  <p className="py-6 px-8 text-start font-bold text-subTitleColor w-1/12">
                    {t("TrackingService.time")}
                  </p>
                  <p className="py-6 px-8 text-start font-bold text-subTitleColor w-8/12">
                    {t("TrackingService.details")}
                  </p>
                </div>
                {trackingData.TransitEvents.reduce(
                  (acc, event, index, array) => {
                    if (index === 0 || index === array.length - 1) {
                      acc.push(event);
                    }
                    const statesOfInterest = [
                      "PACKAGE_RECEIVED",
                      "OUT_FOR_DELIVERY",
                    ];
                    if (statesOfInterest.includes(event.state)) {
                      const lastIndex = acc.findIndex(
                        (e) => e.state === event.state
                      );
                      if (lastIndex >= 0) {
                        acc[lastIndex] = event;
                      } else {
                        acc.push(event);
                      }
                    }
                    return acc;
                  },
                  []
                ).map((event, index) => (
                  <div
                    key={index}
                    className="flex flex-nowrap gap-16 border-b w-full"
                  >
                    <p className="py-6 px-8 text-start text-textColor text-nowrap w-2/12">
                      {event.hub
                        ? event.hub
                        : t("TrackingService.notSpecified")}
                    </p>
                    <p className="py-6 px-8 text-start text-textColor text-nowrap w-1/12">
                      {new Date(event.timestamp).toLocaleDateString()}
                    </p>
                    <p className="py-6 px-8 text-start text-textColor text-nowrap w-1/12">
                      {new Date(event.timestamp).toLocaleTimeString()}
                    </p>
                    {event.state === "DELIVERED_TO_SENDER" ? (
                      <p className="py-6 px-8 text-start text-textColor text-nowrap w-8/12 flex flex-col ">
                        {t(`TrackingService.shipmentNotDelivered`)}
                        <span className="text-amber-400">
                          {t("TrackingService.DELIVERED_TO_SENDER")}
                        </span>
                      </p>
                    ) : (
                      <p className="py-6 px-8 text-start text-textColor text-nowrap w-8/12">
                        {t(`TrackingService.${event.state}`)}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-y-3 w-full lg:w-1/3 flex-wrap">
              <p>{t("TrackingService.deliveryAddress")}</p>
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-16 border rounded-xl bg-[rgb(202,202,202,0.1)]">
                  <p className="py-6 px-8 text-start text-textColor">
                    امبابة شارع طلعت حرب مدينة العمال بجوار الرنس منزل 17 بلوك
                    33,cairo
                  </p>
                </div>
                <div className="flex justify-around border rounded-xl">
                  <span className="w-40">
                    <img className="max-w-full rounded-xl" src={img} alt="" />
                  </span>
                  <div className="flex flex-col justify-center items-center gap-y-4 w-1/2">
                    <p className="font-bold">
                      {t("TrackingService.problemWithShipment")}
                    </p>
                    <button className="bg-mainColor py-2 px-5 rounded-xl text-white w-full">
                      {t("TrackingService.reportProblem")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
