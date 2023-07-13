import "./App.css";
import Calendar from "./calendar/Calendar";
import { CalendarProvider } from "./calendar/CalendarContext";

function App() {
  return (
    <CalendarProvider>
      <div style={{ height: "100%" }}>
        <Calendar />
      </div>
    </CalendarProvider>
  );
}

export default App;
