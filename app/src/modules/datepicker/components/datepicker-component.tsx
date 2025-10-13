"use client";

import { useMemo, useState } from "react";

// utils
import { createTimestamp } from "../utils/generate-timestamp-datepicker";
import { generateDaySlotsDatepicker } from "../utils/generate-day-slots-datepicker";
import { generateTimeSlotsDatepicker } from "../utils/generate-time-slots-datepicker";

import { DEFAULT_TOTAL_DAYS } from "../datepicker.consts";

export function DatepickerComponent() {
  const [selectedDate, setSelectedDate] = useState<null | Date>(null);
  const [selectedTime, setSelectedTime] = useState<null | string>(null);

  const daySlots = useMemo(
    () => generateDaySlotsDatepicker(DEFAULT_TOTAL_DAYS),
    []
  );

  const timeSlots = useMemo(
    () => generateTimeSlotsDatepicker({ selectedDay: selectedDate }),
    [selectedDate]
  );

  return (
    <div>
      {daySlots.map((month) => (
        <div key={`${month.year}-${month.month}`}>
          <div>{month.year}</div>
          <div>{month.month}</div>

          <div style={{ display: "flex", gap: "4px" }}>
            {month.days.map((day) => (
              <div
                style={{
                  width: "40px",

                  backgroundColor: "blue",
                }}
                onClick={() => setSelectedDate(day.date)}
                key={`${month.year}-${month.month}-${day.numberDay}`}
              >
                <div>{day.numberDay} </div>
                <div>{day.nameDay}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div>
        {selectedDate && (
          <div>
            {timeSlots.map((time, index) => (
              <div onClick={() => setSelectedTime(time.dateTime)} key={index}>
                {time.label}
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={() => {
          if (selectedTime)
            console.log(
              createTimestamp(selectedTime),
              "createTimestamp(selectedTime)"
            );
        }}
      >
        CONFIRM
      </button>
    </div>
  );
}
