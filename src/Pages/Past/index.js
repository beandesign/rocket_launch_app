import { useEffect, useState } from "react";
import Card from "../../Components/Card";
import api from "../../Services/Api";

function Past() {

  const [launches, setLaunches] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/past')
        setLaunches(response.data)
      } catch (error) {
        
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <h1>Rocket Launch <span>Dashboard</span></h1>
      <div className="grid">
        {
          launches.map(
            (item, i) => ( 
              <Card
                key={item._id}
                patch={item.patch}
                dateTitle="lauched"
                launchDate={item.date}
                mission={item.name}
                btnLabel="watch the transmission"
                btnVideo="https://youtube.com"
              /> 
            )
          )
        }
      </div>
    </>
  );
}

export default Past;
