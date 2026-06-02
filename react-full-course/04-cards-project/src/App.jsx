import React from 'react'
import Card from './components/Card';

const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/042/165/816/small/google-logo-transparent-free-png.png",
    name: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Karachi, Pakistan",
  },
  {
    brandLogo: "https://lookaside.fbsbx.com/elementpath/media/?media_id=597423292333741&version=1779864741",
    name: "Meta",
    datePosted: "1 day ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Lahore, Pakistan",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrxaeYKwcmrtdCDVBsn9maZMXxYpJIcfoajw&s",
    name: "Amazon",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Islamabad, Pakistan",
  },
  {
    brandLogo: "https://pngdownload.io/wp-content/uploads/2023/12/Apple-Logo-Iconic-Tech-Brand-Symbol-PNG-Transparent-Representation-of-Innovation-and-Design-jpg.webp",
    name: "Apple",
    datePosted: "3 days ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Karachi, Pakistan",
  },
  {
    brandLogo: "https://cdn.dribbble.com/userupload/34116929/file/original-26e501e97684a115bfff294b1f1d41b0.png?resize=752x&vertical=center",
    name: "Netflix",
    datePosted: "7 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpB_l-MNqiIwNMiKxF6kmARL-2_wkxl4sq_Q&s",
    name: "Microsoft",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Karachi, Pakistan",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvrSOY40xxfTajE7wrm9sTXaNpB95mie31UA&s",
    name: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Remote",
  },
  {
    brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/tesla-logo-shield.jpg?width=672&height=454&name=tesla-logo-shield.jpg",
    name: "Tesla",
    datePosted: "8 days ago",
    post: "JavaScript Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Lahore, Pakistan",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6t8cfR8hWuQyFLs2xq8BrCWte3vDuIsylIQ&s",
    name: "OpenAI",
    datePosted: "2 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$75/hr",
    location: "Remote",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST8Vejmqk6CACkWGHIdxdBboQyX_bDTvqXLQ&s",
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
        return <Card brandLogo={elem.brandLogo} company={elem.name} date={elem.datePosted} post={elem.post}
        tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
        
      })}

    </div>
  )
}

export default App
