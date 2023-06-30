function Card(props) {
  return (
    <>
      <div className="card bg-white w-[300px] h-[420px] m-2 rounded-lg shadow-lg">
        <div className="top">
          <img
            className=" object-cover  p-2 items-center"
            src={props.img}
            alt="img"
          />
        </div>
        <div className="bottom flex flex-col justify-center items-start p-3 bg-">
          <div className="title font-semibold text-xs my-1">
            {props.contest}
          </div>
          <div className="category text-xs font-light my-1">
            {props.desc}
          </div>

          <div className="flex items-center my-2">
            {/* <button className="border px-3 py-1 text-xs rounded-lg mr-1 ">
              Buy Now
            </button> */}
           <div className="justify-center">
           <button className="text-white bg-green-500 hover:bg-green-600 border px-28 py-1 text-sm rounded-lg">
              Register
            </button>
           </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;