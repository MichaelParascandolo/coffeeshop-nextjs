import Reviewitem from "./Reviewitem";

interface ReviewItemProps {
  name: string;
  text: string;
  gender: string;
  google: boolean;
}

const reviews: ReviewItemProps[] = [
  {
    name: "Customer Name",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing",
    gender: "women",
    google: true,
  },
  {
    name: "Customer Name",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing",
    gender: "men",
    google: false,
  },
  {
    name: "Customer Name",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing",
    gender: "women",
    google: true,
  },
  {
    name: "Customer Name",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing",
    gender: "men",
    google: false,
  },
];

const Reviews = () => {
  return (
    <>
      <div
        className="justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[100%] mt-5"
        id="reviews"
      >
        {reviews.map((item, index) => (
          <>
            <Reviewitem
              key={index}
              picture={`https://randomuser.me/api/portraits/${
                item.gender
              }/${Math.floor(Math.random() * 50)}.jpg`}
              text={item.text}
              google={item.google}
              name={item.name}
            />
          </>
        ))}
      </div>
    </>
  );
};

export default Reviews;
