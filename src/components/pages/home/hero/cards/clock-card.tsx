import dayjs from "dayjs";

export const ClockCard = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <span className={"font-bold text-2xl"}>{dayjs().format('HH:mm')}</span>
      <span>{dayjs().format('dddd, DD MMMM')}</span>
    </div>
  )
}