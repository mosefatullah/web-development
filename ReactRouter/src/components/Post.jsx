import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function Post() {
 const { id } = useParams();
 const navigate = useNavigate();

 React.useEffect(() => {
  if (id === "all") {
   navigate("/posts");
  }
 }, [id, navigate]);

 return (
  <div>
   <h3>Post #{id}</h3>
   <button
    onClick={() => {
     navigate("/posts");
    }}
   >
    Go to Posts
   </button>
  </div>
 );
}

export default Post;
