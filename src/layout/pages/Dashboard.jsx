import {useEffect} from 'react'

const Dashboard = () => {
  useEffect(() => {
    document.title = 'GOODS | Dashboard'
  }, [])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard