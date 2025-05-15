function Card({ label }) {
  return (
    <>
      <div>
        <div className="  w-full border-2 p-9 bg-white rounded-lg shadow-lg justify-between content-between ">
          <div>
            <label htmlFor="">{label}</label>
            <br />
            <input
              type="number"
              name=""
              id=""
              className=" w-1/6 mt-auto outline-none"
            />
          </div>
          <div>
            <label htmlFor="">Currency Type</label>
            <br />
            <input type="text" name="" id="" className="w-1/5" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
