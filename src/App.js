import React, {useState} from 'react';
import Tweet from './tweet';


function App(){
  
  // const [isRed,setRed ] = useState(false);
  // const [count, setCount ]=useState(0);

  // const increment= () =>{
  //   setCount(count+1);
  //   setRed(!isRed);
  // };

  const [users,setUsers]=useState([
     {name:'@kahu_wanjiru',message:"kicking React's Butt Haard", likes:'likes: 10'},
      {name:"@lukasgraham", message:"Share That Love",likes:'likes: 10k'},
      {name:'@davechappelle',message:"Comedy is an art" ,likes:' likes: 234k'},
      {name:"@emmanuelhudson", message:"In The Classroom  #WildnOut",likes:'likes: 30k'}
  ]);
  
  return(
      <div className='app'>

      {users.map(user=>(
        <Tweet name={user.name} message={user.message} likes={user.likes}/>
      ))}

    

        
      {/* toggle and count */}
        {/* <h1 className={isRed ? 'red' : ''}>Change Color</h1>
        <button onClick={increment}>INCREMENT</button>
        <h1>{count}</h1> */}
        
        {/* tweets */}
        {/* <Tweet name='@kahu_wanjiru' message="kicking React's Butt Haard" likes='likes: 10'/>
        <Tweet name="@lukasgraham" message="Share That Love" likes='likes: 10k'/>
        <Tweet name='@davechappelle' message="Comedy is an art" likes=' likes: 234k'/>
        <Tweet name="@emmanuelhudson" message="In The Classroom  #WildnOut" likes='likes: 30k'/> */}
      </div>
  );
}

export default App