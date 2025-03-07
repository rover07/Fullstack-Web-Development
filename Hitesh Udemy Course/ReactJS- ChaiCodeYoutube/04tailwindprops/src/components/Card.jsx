import React from "react";

function Card(props) {
  // we can also write
  // function Card({username,price})
  console.log("props:", props);
  console.log(props.username);

  return (
    <div
      className="flex flex-col rounded-xl  p-4 "
      style={{
        border: "0.88px solid",

        backdropFilter: "saturate(180%) blur(14px)",
        background: " #ffffff0d",
      }}
    >
      <div>
        <img
          src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
          alt="nft-gif"
          width="400"
          height="400"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col  rounded-b-xl py-4 ">
        <div className="flex justify-between">
          <h1 className="font-RubikBold ">{props.username}</h1>
          {/* <h1 className="font-RubikBold ">{username}</h1> use when we destructure props and write username at top */}
          <h1 className="font-bold font-RubikBold">
            {props.price || "Not Free"}
          </h1>
          {/* // the value is passed only from 2nd card therefore the 1st card remains empty, to fix this we use basic JS and use a or: || */}
        </div>
        <div className="flex  justify-between font-mono">
          <p>#345</p>
          <p>0.01</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
