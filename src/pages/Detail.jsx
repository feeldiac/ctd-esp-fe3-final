import React from "react";
import { useParams } from "react-router-dom";
import { useGetDentist } from "../hooks";

const Detail = () => {
  const { id } = useParams();
  const { data } = useGetDentist(id);

  return (
    <main className="main" style={{ display: "flex", flexDirection: "column" }}>
      <h1 className="title">
        This is <em>{data?.name}'s</em> bio!{" "}
      </h1>
      <div className="detail-content">
        <p>
          His/Her email is <br /> <em>{data?.email?.toLowerCase()}</em>
        </p>
        <p>
          You can reach him/her at <br /> <em>{data?.phone}</em>
        </p>
        <p>
          You can also find him/her at <br /> <em>{data?.website}</em>
        </p>
        <p>We are proud of our professionals!</p>
      </div>
    </main>
  );
};

export default Detail;
