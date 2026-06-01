import React from 'react'
import Card from './components/Card';

const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    name: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Karachi, Pakistan",
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    name: "Meta",
    datePosted: "1 day ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Lahore, Pakistan",
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    name: "Amazon",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Islamabad, Pakistan",
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    name: "Apple",
    datePosted: "3 days ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Karachi, Pakistan",
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    name: "Netflix",
    datePosted: "7 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote",
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    name: "Microsoft",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Karachi, Pakistan",
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    name: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Remote",
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    name: "Tesla",
    datePosted: "8 days ago",
    post: "JavaScript Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Lahore, Pakistan",
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    name: "OpenAI",
    datePosted: "2 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$75/hr",
    location: "Remote",
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    name: "Adobe",
    datePosted: "9 days ago",
    post: "Web Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Karachi, Pakistan",
  },
];


return (
  <div className='parent'>
      {jobOpenings.map((elem)=>{
        return <Card company={elem.name} />
        
      })}

    </div>
  )
}

export default App
