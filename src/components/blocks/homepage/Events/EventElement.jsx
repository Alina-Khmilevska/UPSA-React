const EventElement = (props) => {
  const { imgUrl, title, body, date, link } = props;

  return (
    <div className="text-left text-[32px] text-black font-inter w-[30%] background-grey flex flex-col justify-between">
      <div className="ounded-3xs bg-darkgray" />
      <div className=" ounded-3xs bg-darkslategray" />
      <img
        className="max-w-full overflow-hidden object-cover"
        alt=""
        src={imgUrl}
      />
      <div className="p-4">
        <div className="ont-medium inline-block text-[26px]">
          {title}
        </div>
        <div className="text-[18px] font-light inline-block ">
          {body}
        </div>

        <div className="flex flex-row justify-between">
          <i className=" text-[22px] inline-block font-light ">
            {date}
          </i>
          <div className=" text-[18px] text-white bg-black w-[200px] h-[40px] flex justify-center items-center">
            <a href={link}>Зареєструватися</a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EventElement;
