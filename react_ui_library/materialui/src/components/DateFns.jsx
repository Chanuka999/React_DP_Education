import { format, differenceInDays, isWithinInterval } from "date-fns";

const DateFns = () => {
  const date = new Date(2025, 5, 18);
  const formattedDate = date.toLocaleDateString("en-CA").replace(/-/g, "/");

  const date2 = new Date(2025, 5, 18);
  const formattedDate2 = format(date2, "yyyy/MMMM/dd");

  const date3 = new Date("2025-6-18");
  const date4 = new Date("2025-6-30");
  const differntInDate = differenceInDays(date4, date3);

  const date5 = new Date("2025-6-23");
  const islenght = isWithinInterval(date5, {
    start: date3,
    end: date4,
  });

  const stat = islenght ? "yes" : "No";
  return (
    <>
      <h3>Data foemates</h3>
      <li>{formattedDate}</li>
      <li>{formattedDate2}</li>

      <h3>Date difference</h3>
      <li>{format(date3, "yyyy-MM-dd")}</li>
      <li>{format(date4, "yyyy-MM-dd")}</li>
      <li>{differntInDate}day(s)</li>

      <h3>Date interval</h3>
      <li>{format(date3, "yyyy-MM-dd")}</li>
      <li>{format(date4, "yyyy-MM-dd")}</li>
      <li>{stat}</li>
    </>
  );
};

export default DateFns;
