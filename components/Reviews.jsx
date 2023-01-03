import React from "react";
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
          picture={"https://randomuser.me/api/portraits/women/50.jpg"}
          text={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, assumenda!"
          }
        />
        <Reviewitem
          picture={"https://randomuser.me/api/portraits/women/63.jpg"}
          text={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic corporis mollitia sapiente aspernatur!"
          }
        />
        <Reviewitem
          picture={"https://randomuser.me/api/portraits/men/49.jpg"}
          text={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic corporis mollitia sapiente aspernatur!"
          }
        />
        <Reviewitem
          picture={"https://randomuser.me/api/portraits/men/19.jpg"}
          text={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic corporis mollitia sapiente aspernatur!"
          }
        />
      </div>
    </>
  );
};

export default Reviews;
