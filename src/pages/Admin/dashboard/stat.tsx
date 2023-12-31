import {
  BookingVsUserWeeksBarChart,
  BookingVsUserYearsBarChart,
} from "$components/Admin/util/Charts/BookingVsUserWeekBarChart";
import Status from "$components/Admin/util/Status";
import { useStatics } from "$hooks";
import { Fragment, SVGProps } from "react";

export function Stat() {
  const { $todays } = useStatics();

  return (
    <Fragment>
      <div className="relative p-3">
        <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-2 xl:grid-cols-4">
          <Status Title="Book Today" Data={$todays.todaysBookingsCount} Icon={PajamasTaskDone} />
          <Status Title="Pre Book Today" Data={$todays.todaysPreBookingsCount} Icon={Money} />
          <Status Title="New User Today" Data={$todays.todaysNewUserCount} Icon={Users} />
          <Status Title="Search Today" Data={$todays.todaysSearchesCount} Icon={PhMagnifyingGlassDuotone} />
        </div>
      </div>

      {/* data  */}
      <div className="grid gap-4 px-3 md:grid-cols-2">
        <div className="w-full rounded-md bg-slate-200 p-2 shadow-inner">
          <h1 className="pb-3 text-center text-lg font-bold text-slate-700 md:text-2xl">
            Booking & New User This Week
          </h1>
          <div>
            <BookingVsUserWeeksBarChart />
          </div>
        </div>

        <div className="w-full rounded-md bg-slate-200 p-2 shadow-inner">
          <h1 className="pb-3 text-center text-lg font-bold text-slate-700 md:text-2xl">
            Booking & New User This Year
          </h1>
          <div>
            <BookingVsUserYearsBarChart />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export function Grid(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <rect width="5" height="7" x="8.5" y="6.5" rx=".5"></rect>
        <rect width="5" height="3.01" x="8.5" y=".5" rx=".5"></rect>
        <rect width="5" height="7" x=".5" y=".5" rx=".5"></rect>
        <rect width="5" height="3.01" x=".5" y="10.49" rx=".5"></rect>
      </g>
    </svg>
  );
}

export function User(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="6" r="4"></circle>
        <path
          strokeLinecap="round"
          d="M19.997 18c.003-.164.003-.331.003-.5c0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S4 22 12 22c2.231 0 3.84-.157 5-.437"
        ></path>
      </g>
    </svg>
  );
}

export function Users(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="6" r="4"></circle>
        <path d="M12.5 4.341a3 3 0 1 1 0 3.318" opacity=".5"></path>
        <ellipse cx="9" cy="17" rx="7" ry="4"></ellipse>
        <path strokeLinecap="round" d="M18 14c1.754.385 3 1.359 3 2.5c0 1.03-1.014 1.923-2.5 2.37" opacity=".5"></path>
      </g>
    </svg>
  );
}

export function PajamasTaskDone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 13.5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h9.25a.75.75 0 0 0 0-1.5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.75a.75.75 0 0 0-1.5 0V13a.5.5 0 0 1-.5.5H3Zm12.78-8.82a.75.75 0 0 0-1.06-1.06L9.162 9.177L7.289 7.241a.75.75 0 1 0-1.078 1.043l2.403 2.484a.75.75 0 0 0 1.07.01L15.78 4.68Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function Money(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <rect width="13" height="9" x=".5" y="2.5" rx="1"></rect>
        <circle cx="7" cy="7" r="1.5"></circle>
        <path d="M3 5h.5m7 4h.5"></path>
      </g>
    </svg>
  );
}

export function PhMagnifyingGlassDuotone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}>
      <g fill="currentColor">
        <path d="M192 112a80 80 0 1 1-80-80a80 80 0 0 1 80 80Z" opacity=".2"></path>
        <path d="m229.66 218.34l-50.06-50.06a88.21 88.21 0 1 0-11.32 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32ZM40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72Z"></path>
      </g>
    </svg>
  );
}
