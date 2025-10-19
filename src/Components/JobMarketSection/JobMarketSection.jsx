import { buttonData } from "../JobMarketSection/JobMarketSectionDATA";
import Cards from "./Cards";

export default function JobMarketSection() {
  const mdFirstRow = [buttonData[0], buttonData[1], buttonData[2]];
  const mdSecondRow = [buttonData[3], buttonData[4], buttonData[6]];
  const mdThirdRow = [buttonData[5]];
  const PMIcon = buttonData[4].icon;

  return (
    <>
      <div className="flex justify-center w-full">
        <div className="w-full max-w-[1280px]">
          <div className="md:flex md:justify-center">
            <div className="info md:w-4/6 lg:w-7/12 xl:w-6/12 xl:text-center">
              <h1 className="font-bold text-4xl container lg:text-5xl lg:ms-10">
                Become In Demand On the Job Market Today!
              </h1>
            </div>
          </div>

          <div className="p-4 mt-2">
            {/* Mobile layout */}
            <div className="grid grid-cols-2 justify-items-start gap-2 md:hidden">
              {buttonData
                .filter((_, index) => index !== 4 && index !== 5 && index !== 6)
                .map((data, idx) => {
                  const Icon = data.icon;
                  return (
                    <div key={idx} className="main-for-btn #">
                      <div className="border flex items-center gap-2 py-2 rounded-full w-32 #">
                        <span className="# ms-2">
                          <Icon size={15} />
                        </span>
                        <p className="text-sm">{data.title}</p>
                      </div>
                    </div>
                  );
                })}

              <div className="col-span-2 flex justify-center mt-2">
                <div className="main-for-btn #">
                  <div className="border flex items-center gap-2 py-2 rounded-full w-44 #">
                    <span className="# ms-2">
                      <PMIcon size={15} />
                    </span>
                    <p className="text-sm">{buttonData[4].title}</p>
                  </div>
                </div>
              </div>

              <div className="col-span-2 flex justify-center gap-3 mt-2">
                {[buttonData[6], buttonData[5]].map((data, idx) => {
                  const Icon = data.icon;
                  return (
                    <div key={idx} className="main-for-btn #">
                      <div className="border flex items-center gap-2 py-2 rounded-full w-32 #">
                        <span className="# ms-2">
                          <Icon size={15} />
                        </span>
                        <p className="text-sm">{data.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* MD / iPad layout */}
            <div className="hidden md:block lg:hidden">
              <div className="flex flex-wrap justify-center gap-3">
                {mdFirstRow.map((data, idx) => {
                  const Icon = data.icon;
                  return (
                    <div key={idx} className="main-for-btn #">
                      <div className="border flex items-center gap-2 py-2 rounded-full w-32 #">
                        <span className="# ms-2">
                          <Icon size={15} />
                        </span>
                        <p className="text-sm">{data.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap justify-center gap-3 mt-3">
                {mdSecondRow.map((data, idx) => {
                  const Icon = data.icon;
                  let widthClass = "w-32";
                  if (idx === 0) widthClass = "w-24";
                  if (idx === 1) widthClass = "w-44";
                  if (idx === 2) widthClass = "w-28";
                  return (
                    <div key={idx} className="main-for-btn #">
                      <div
                        className={`border flex items-center gap-2 py-2 rounded-full ${widthClass} #`}
                      >
                        <span className="# ms-2">
                          <Icon size={15} />
                        </span>
                        <p className="text-sm">{data.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap justify-center w-3/5 gap-3 mt-3">
                {mdThirdRow.map((data, idx) => {
                  const Icon = data.icon;
                  return (
                    <div key={idx} className="main-for-btn #">
                      <div className="border flex items-center gap-2 py-2 rounded-full w-32 #">
                        <span className="# ms-2">
                          <Icon size={15} />
                        </span>
                        <p className="text-sm">{data.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* LG / Desktop layout */}
            <div className="hidden lg:block xl:hidden">
              <div className="flex flex-wrap justify-center gap-3">
                {buttonData.slice(0, 5).map((data, idx) => {
                  const Icon = data.icon;
                  let widthClass = "w-32";
                  if (idx === 3) widthClass = "w-24";
                  if (idx === 4) widthClass = "w-44";
                  return (
                    <div key={idx} className="main-for-btn #">
                      <div
                        className={`border flex items-center gap-2 py-2 rounded-full ${widthClass} #`}
                      >
                        <span className="# ms-2">
                          <Icon size={15} />
                        </span>
                        <p className="text-sm">{data.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap justify-center gap-3 mt-3">
                {buttonData.slice(5).map((data, idx) => {
                  const Icon = data.icon;
                  const widthClass = "w-28";
                  return (
                    <div key={idx} className="main-for-btn #">
                      <div
                        className={`border flex items-center gap-2 py-2 rounded-full ${widthClass} #`}
                      >
                        <span className="# ms-2">
                          <Icon size={15} />
                        </span>
                        <p className="text-sm">{data.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* XL / Extra Large layout */}
            <div className="hidden xl:flex gap-3 justify-center flex-wrap">
              {buttonData.map((data, idx) => {
                const Icon = data.icon;
                let widthClass = "w-32";
                if (idx === 0) widthClass = "w-32 xl:w-40";
                if (idx === 1) widthClass = "w-32 xl:w-40";
                if (idx === 2) widthClass = "w-32 xl:w-40";
                if (idx === 3) widthClass = "w-24 xl:w-28";
                if (idx === 4) widthClass = "w-44 xl:w-60";
                if (idx === 5) widthClass = "w-28 xl:w-36";
                if (idx === 6) widthClass = "w-28 xl:w-36";

                return (
                  <div key={idx} className="main-for-btn #">
                    <div
                      className={`border flex items-center gap-2 py-2 rounded-full ${widthClass} #`}
                    >
                      <span className="# ms-2">
                        <Icon size={20} />
                      </span>
                      <p className="text-lg xl:text-base">{data.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Cards />
        </div>
      </div>
    </>
  );
}
