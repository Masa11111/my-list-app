import { EventContentArg } from "@fullcalendar/core"
import jaLocale from "@fullcalendar/core/locales/ja"
import dayGridPlugin from '@fullcalendar/daygrid'
import FullCalendar from "@fullcalendar/react"
import "/Users/masa/Udemy/my-list-app/src/calendar.css"

const Calendar = () => {

  const events = [
    { title: 'Meeting', start: '2025-05-20', income: 3000, expense: 1000 },
    { title: 'Meeting', start: '2025-05-21', income: 300, expense: 200 },
  ]

  // イベントのカスタム表示設定
  const renderEventContent = (eventInfo: EventContentArg) => {
    return (
      <div>
        <div className="money" id="event-income">
          {eventInfo.event.extendedProps.income}
        </div>
        <div className="money" id="event-expense">
          {eventInfo.event.extendedProps.expense}
        </div>
      </div>
    )
  }

  return (
    <FullCalendar
      locale={jaLocale}
      plugins={[dayGridPlugin]}
      initialView='dayGridMonth'
      events={events}
      eventContent={renderEventContent}
    />
  )
}

export default Calendar