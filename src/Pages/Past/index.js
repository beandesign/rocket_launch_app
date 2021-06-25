import Card from "../../Components/Card";

function Past() {
  let items = [1,2,3,4,5,6,7]
  return (
    <div className="grid">
      {
        items.map(
          (item, i) => ( 
            <Card
              key={i}
              patch="https://i.imgur.com/BrW201S.png"
              dateTitle="lauched"
              launchDate="12/06"
              mission="CRS-21"
              btnLabel="watch the transmission"
              btnTarget=""
            /> 
          )
        )
      }
    </div>
  );
}

export default Past;
