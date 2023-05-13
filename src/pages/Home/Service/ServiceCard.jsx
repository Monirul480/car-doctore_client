import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ data }) => {
  const { _id, title, img, price } = data;
  return (
    <div className="card w-96 bg-base-100 p-5 shadow-xl">
      {" "}
      <img className="rounded-xl h-60" src={img} alt="" />
      <div className="">
        <h1 className="font-bold mt-6 text-2xl">{title}</h1>
        <div className="flex justify-between text-orange-600">
          <p className="font-bold">Price : ${price}</p>
          <Link to={`/book/${_id}`}>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
