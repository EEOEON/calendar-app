import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { DateSelectArg, EventClickArg } from "@fullcalendar/core";
import "./CalendarView.css";
import { useContext, useState } from "react";
import { CalendarContext } from "./CalendarContext";
import AddEvent from "./AddEvent";

const CalendarView = () => {
  const { events, setEvents } = useContext(CalendarContext);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleDateClick = (arg: DateClickArg) => {
    setAnchorEl(arg.dayEl);
    console.log(arg.dateStr);
  };

  const handleEventClick = (arg: EventClickArg) => {
    console.log(arg.event);
  };

  const handleSelect = (arg: DateSelectArg) => {
    console.log(arg);
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        editable={true}
        height={"100%"}
        events={events}
        eventClick={handleEventClick}
        dateClick={handleDateClick}
        select={handleSelect}
      />
      <AddEvent
        open={anchorEl !== null}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
      />
    </>
  );
};

export default CalendarView;
