import { buttonData } from "../JobMarketSection/JobMarketSectionDATA";
import Cards from "./Cards";

export default function JobMarketSection() {
  // MD layout rows
  const mdFirstRow = [buttonData[0], buttonData[1], buttonData[2]]; // All Categories, Development, UI/UX
  const mdSecondRow = [buttonData[3], buttonData[4], buttonData[6]]; // Popular, Project Management, Marketing
  const mdThirdRow = [buttonData[5]]; // Accounting

  // Icon for Project Management
  const PMIcon = buttonData[4].icon;

  return (
    <>
      <div className="md:flex md:justify-center">
        <div className="info md:w-4/6 lg:w-7/12 xl:w-6/12 xl:text-center">
          <h1 className="font-bold text-4xl container lg:text-5xl lg:ms-10">
            Become In Demand On the Job Market Today!
          </h1>
        </div>
      </div>
      <div
        className="p-4 mt-2
      "
      >
        {/* Mobile layout */}
        <div className="grid grid-cols-2 justify-items-start gap-2 md:hidden">
          {/* All buttons except Project Management, Marketing, Accounting */}
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

          {/* Project Management alone in third row */}
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

          {/* Marketing + Accounting side by side in fourth row */}
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
        {/* MD / iPad layout — fixed, visible */}
        <div className="hidden md:block lg:hidden">
          {/* First Row */}
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

          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-3 mt-3">
            {mdSecondRow.map((data, idx) => {
              const Icon = data.icon;

              // Custom widths for specific buttons
              let widthClass = "w-32"; // default
              if (idx === 0) widthClass = "w-24"; // Popular
              if (idx === 1) widthClass = "w-44"; // Project Management
              if (idx === 2) widthClass = "w-28"; // Marketing

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

          {/* Third Row */}
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
          {/* First Row: 5 buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {buttonData.slice(0, 5).map((data, idx) => {
              const Icon = data.icon;

              // Optional: give custom widths per button
              let widthClass = "w-32";
              if (idx === 0) widthClass = "w-32"; // All Categories
              if (idx === 1) widthClass = "w-32"; // Development
              if (idx === 2) widthClass = "w-32"; // UI/UX
              if (idx === 3) widthClass = "w-24"; // Popular
              if (idx === 4) widthClass = "w-44"; // Project Management

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

          {/* Second Row: remaining 2 buttons (Marketing + Accounting) */}
          <div className="flex flex-wrap justify-center gap-3 mt-3">
            {buttonData.slice(5).map((data, idx) => {
              const Icon = data.icon;

              // Optional: custom widths
              const widthClass = idx === 0 ? "w-28" : "w-28"; // Marketing, Accounting

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
        <div className="hidden xl:flex  gap-3 justify-center flex-wrap">
          {buttonData.map((data, idx) => {
            const Icon = data.icon;

            // Default width for smaller screens + custom XL width
            let widthClass = "w-32"; // default width
            if (idx === 0) widthClass = "w-32 xl:w-40"; // All Categories
            if (idx === 1) widthClass = "w-32 xl:w-40"; // Development
            if (idx === 2) widthClass = "w-32 xl:w-40"; // UI/UX
            if (idx === 3) widthClass = "w-24 xl:w-28"; // Popular
            if (idx === 4) widthClass = "w-44 xl:w-60"; // Project Management
            if (idx === 5) widthClass = "w-28 xl:w-36"; // Accounting
            if (idx === 6) widthClass = "w-28 xl:w-36"; // Marketing

            return (
              <div key={idx} className="main-for-btn #">
                <div
                  className={`border flex items-center gap-2 py-2 rounded-full ${widthClass} #`}
                >
                  <span className="# ms-2">
                    <Icon size={20} /> {/* increase icon size for XL */}
                  </span>
                  <p className="text-lg xl:text-base">{data.title}</p>{" "}
                  {/* increase font */}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Cards />
    </>
  );
}
