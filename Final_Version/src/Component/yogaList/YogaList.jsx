import yoga1 from "./yoga1.jpg";
import yoga2 from "./yoga2.jpg";
import yoga3 from "./yoga3.jpg";
import yoga4 from "./yoga4.jpg";
import "./YogaList.css";
import useFetch from "../../hooks/useGetFetch";

const images = {
    "yoga1": yoga1,
    "yoga2": yoga2,
    "yoga3": yoga3,
    "yoga4" : yoga4
}
const YogaList = () => {
  const { data, loading } = useFetch("/centres/type/count");
  console.log(data);
  return loading ? (
    "Loading data"
  ) : (
    <div className="pList">
      {
        data.map((centresTypeCount) => {
         return <div className="pListItem">
            <img
              src={images[centresTypeCount.type]}
              alt="preview Not Available"
              className="pListImg"
              height={150}
              width={150}
            />
            <div className="pListTitle">
              <h1>{centresTypeCount.type}</h1>
              <h2>{centresTypeCount.count} {centresTypeCount.type}s</h2>
            </div>
          </div>
          })        
      }
    </div>
  );
};
export default YogaList;
