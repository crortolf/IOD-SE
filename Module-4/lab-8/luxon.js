import { DateTime, Interval } from "luxon";

//problem one
const birthday = DateTime.fromObject(
  { day: 28, year: 1999, month: 1 },
  { zone: "America/New_York", numberingSystem: "beng" },
);

const age = Interval.fromDateTimes(birthday, DateTime.now());

console.log(age.length("days"));

//problem two

const dur = age.toDuration(["years", "months", "days", "hours"]);

console.log(
  dur["years"] +
    " years, " +
    dur["months"] +
    " months, " +
    dur["days"] +
    " days",
);

//problem three

const closerDate = (dateOne, dateTwo) => {
  const intervalOne = Interval.fromDateTimes(dateOne, DateTime.now());
  const intervalTwo = Interval.fromDateTimes(dateTwo, DateTime.now());

  console.log(
    intervalOne.length("years") < intervalTwo.length("years")
      ? dateOne
      : dateTwo,
  );
};

closerDate(DateTime.fromISO("2018-06-12"), DateTime.fromISO("2022-12-13"));

//problem four

const laterDate = (dateOne, dateTwo) => {
  console.log(dateOne < dateTwo ? "date one is first" : "date two is first");
};

laterDate(DateTime.fromISO("2018-06-12"), DateTime.fromISO("2022-12-13"));

//problem five

const london = DateTime.local().setZone("Europe/London");

console.log(london);
