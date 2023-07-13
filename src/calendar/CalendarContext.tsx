import { EventSourceInput } from "@fullcalendar/core";
import {
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface CalendarContextType {
  events: EventSourceInput;
  setEvents: (events: SetStateAction<EventSourceInput>) => void;
}

export const CalendarContext = createContext<CalendarContextType>({
  events: [],
  setEvents: () => {},
});

interface CalendarProviderProps {
  children?: ReactNode;
}

export const CalendarProvider = (props: CalendarProviderProps) => {
  const [events, setEvents] = useState<EventSourceInput>([]);

  useEffect(() => {
    let initialEvents: EventSourceInput = [
      {
        title: "Meeting with John",
        start: new Date(2023, 6, 7, 10, 0), // 시작 시간 (2023년 4월 3일 10시)
        end: new Date(2023, 6, 7, 11, 0), // 종료 시간 (2023년 4월 3일 11시)
      },
      {
        title: "Lunch with Sarah",
        start: new Date(2023, 3, 4, 12, 0), // 시작 시간 (2023년 4월 4일 12시)
        end: new Date(2023, 3, 4, 13, 0), // 종료 시간 (2023년 4월 4일 13시)
      },
    ];
    setEvents(initialEvents);
  }, []);

  return (
    <CalendarContext.Provider
      value={{
        events,
        setEvents,
      }}
    >
      {props.children}
    </CalendarContext.Provider>
  );
};
