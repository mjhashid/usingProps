import React from "react";

const Card = (props) => {
  return (
    <section className="flex w-[350px]  flex-col p-3 m-2 shadow-lg gap-4 text-nowrap shadow-sky-100 rounded  bg-blue-200 items-center">
      <h1 className="font-bold mb-3 text-white text-xl text-center bg-pink-400 p-2 rounded">
        Welcome to my Profile
      </h1>
      <div className="">
        <img
          className="h-36 w-36 rounded-full object-cover shadow-lg shadow-gray-900"
          src={`/public/${props.image}`}
          alt="picture"
        />
      </div>

      <div className="font-bold">Name: {props.name}</div>
      <p className="font-bold">State: {props.state}</p>
      <div className="font-bold">Institution: {props.institution}</div>
      <div className="font-bold">Course: {props.course}</div>
      <p className="font-bold">Gender: {props.gender}</p>
      {props.level === "graduated" ? (
        <p className="text-center font-bold mt-9 p-2 rounded bg-green-500 text-white text-">
          {props.level}
        </p>
      ) : (
        <p className="text-center font-bold mt-9 p-2 rounded bg-orange-400 text-white text-">
          {props.level}
        </p>
      )}
    </section>
  );
};

export default Card;
