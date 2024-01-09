import { useState } from 'react'
import './index.css'

import BrowserItem from '../BrowserItem'

const BrowserHistory = ()=>{
  
    const initialList = [
        {
          id: 0,
          timeAccessed: '07:45 PM',
          logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
          title: 'Instagram',
          domainUrl: 'instagram.com',
        },
        {
          id: 1,
          timeAccessed: '05:45 PM',
          logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
          title: 'Twitter. It’s what’s happening / Twitter',
          domainUrl: 'twitter.com',
        },
        {
          id: 2,
          timeAccessed: '04:35 PM',
          logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
          title: 'Facebook – log in or sign up',
          domainUrl: 'facebook.com',
        },
        {
          id: 3,
          timeAccessed: '04:25 PM',
          logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
          title: 'LinkedIn: Log In or Sign Up',
          domainUrl: 'linkedin.com',
        },
        {
          id: 4,
          timeAccessed: '04:00 PM',
          logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
          title: 'Hashnode: Everything you need to start blogging as a developer!',
          domainUrl: 'hashnode.com',
        },
        {
          id: 5,
          timeAccessed: '03:25 PM',
          logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
          title: 'GitHub: Where the world builds software · GitHub',
          domainUrl: 'github.com',
        },
      
        {
          id: 6,
          timeAccessed: '02:45 PM',
          logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
          title: 'React – A JavaScript library for building user interfaces',
          domainUrl: 'reactjs.org',
        },
        {
          id: 7,
          timeAccessed: '01:25 PM',
          logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
          title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
          domainUrl: 'stackoverflow.com',
        },
      
        {
          id: 8,
          timeAccessed: '09:25 AM',
          logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
          title: 'Gmail',
          domainUrl: 'mail.google.com',
        },
        {
          id: 9,
          timeAccessed: '09:00 AM',
          logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
          title: 'Google',
          domainUrl: 'google.com',
        },
      ]
const [listContainer , setContainer]= useState({list:initialList , inputValue:''})
function changeInput(e){
    
    const Inputname = e.target.value;
    const InputName = Inputname.toLowerCase();
    function finder(item){
      const ItemName = item.title.toLowerCase();
      return ItemName.includes(InputName)
    }
    const newList = initialList.filter(finder)
    setContainer((p)=>({list:newList , inputValue:e.target.value}))
}

function DeleteItem(selectedId){
  const list = listContainer.list 
  function finder(item){
    return item.id === selectedId
  }
  const index = list.findIndex(finder)
  list.splice(index , 1)
  setContainer((p)=>({...p , list:list}))
}

function renderItems(){
  if(listContainer.list.length ===0){
    return <p>There is no history to show....</p>
  }
  
  return <ul>
  {listContainer.list.map((item)=><BrowserItem  key={item.id} func={DeleteItem} data={item}/>)}
      </ul>
}

return <div>
    <div className='nav-container'>
    <img src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png" alt='hostory logo' />
    <input type='search' placeholder="search here..." onChange={changeInput} />
    </div>
    {renderItems()}
    
</div>

}

export default BrowserHistory