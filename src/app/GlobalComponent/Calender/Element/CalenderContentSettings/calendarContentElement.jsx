"use client";
import { useMemo } from "react";
import { Calendar as BigCalendar, luxonLocalizer } from "react-big-calendar";
import { DateTime, Settings } from "luxon";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./customToolbar";

Settings.defaultZone = "local";

const localizer = luxonLocalizer(DateTime);

const MyCalendar = () => {
  const myEventsList = useMemo(
    () => [
      {
        title: "Meeting",
        start: DateTime.local(2025, 10, 10).toJSDate(),
        end: DateTime.local(2025, 10, 10).toJSDate(),
      },
      {
        title: "Liburan",
        start: DateTime.local(2025, 10, 15).toJSDate(),
        end: DateTime.local(2025, 10, 16).toJSDate(),
      },
    ],
    []
  );

  return (
    <>
      <BigCalendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 350 }}
        views={["month"]}
        components={{
          toolbar: CustomToolbar,
        }}
        className="custom-calendar"
      />
    </>
  );
};

export default MyCalendar;
