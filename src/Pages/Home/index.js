import { useEffect, useState } from "react";
import Card from "../../Components/Card";
import Hero from "../../Components/Hero";
import api from "../../Services/Api";

function Home() {

  const [upcomingLaunches, setUpcomingLaunches] = useState([])
  const [latestLaunch, setLatestLaunch] = useState({})
  const [nextLaunch, setNextLaunch] = useState({})
  const [variant, setVariant] = useState('')

  useEffect(() => {
    if (window.google_optimize !== undefined) {
      const variant = window.google_optimize.get('pz6Vk5kqRAu8H_R06vqlzw');
      setVariant({ variant });
    }
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/upcoming')
        setUpcomingLaunches(response.data)
      } catch (error) {
        
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/latest')
        setLatestLaunch(response.data)
      } catch (error) {
        
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/next')
        setNextLaunch(response.data)
      } catch (error) {
        
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <h1>Rocket Launch <span>Dashboard</span></h1>
      <div className="column-wrapper">
        <Card
          key={latestLaunch._id}
          patch={latestLaunch.patch}
          title="last launch"
          dateTitle="lauched"
          launchDate={latestLaunch.date}
          mission={latestLaunch.name}
          btnLabel={
            (variant === 'cta') ? 'see the oldest launches' : 'see all past launches'
          }
          btnTarget="/past"
        />
        <Hero
          key={nextLaunch._id}
          patch={nextLaunch.patch}
          title="next launch"
          dateTitle="launch date"
          launchDate={nextLaunch.date}
          mission={nextLaunch.name}
        />
      </div>
      <h2>Upcoming launches</h2>
      <div className="grid">
        {
          upcomingLaunches.map(
            (item, i) => ( 
              <Card
                key={item._id}
                patch={item.patch}
                // title="last launch"
                dateTitle="launch date"
                launchDate={item.date}
                mission={item.name}
                // btnLabel="see all launches"
                // btnTarget=""
              /> 
            )
          )
        }
      </div>
    </>
  );
}

export default Home;
