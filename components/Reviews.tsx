import Reviewitem from "./Reviewitem";

// example
// https://randomuser.me/api/?gender=female
// https://randomuser.me/api/portraits/thumb/women/50.jpg
// https://randomuser.me/api/portraits/med/women/89.jpg
// https://randomuser.me/api/portraits/men/89.jpg

const Reviews = () => {
  return (
    <>
      <div className="justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[100%] mt-5">
        <Reviewitem
          picture={`https://randomuser.me/api/portraits/women/${Math.floor(
            Math.random() * 50
          )}.jpg`}
          text={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, assumenda!"
          }
          google={true}
          name={"Customer Name"}
        />
        <Reviewitem
          picture={`https://randomuser.me/api/portraits/men/${Math.floor(
            Math.random() * 50
          )}.jpg`}
          text={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, assumenda!"
          }
          google={false}
          name={"Customer Name"}
        />
        <Reviewitem
          picture={`https://randomuser.me/api/portraits/women/${Math.floor(
            Math.random() * 50
          )}.jpg`}
          text={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, assumenda!"
          }
          google={true}
          name={"Customer Name"}
        />
        <Reviewitem
          picture={`https://randomuser.me/api/portraits/men/${Math.floor(
            Math.random() * 50
          )}.jpg`}
          text={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, assumenda!"
          }
          google={false}
          name={"Customer Name"}
        />
      </div>
    </>
  );
};

export default Reviews;
