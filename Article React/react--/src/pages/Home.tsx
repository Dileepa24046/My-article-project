import { useState } from "react";
import { Link } from "react-router-dom";

function Home(){
    const [counter, setCounter] = useState<number>(0);
    const [username,setUsername] = useState<string>("");

    function increase(){
        const newCount = counter +1;
        setCounter(newCount);
    }
    function decrease(){
        const newCount = counter -1;
        setCounter(newCount);
    }
    function handleUsername(event: any) {
        setUsername(event.target.value);
    }

    return(
        <>
            <div className="text-center mt-8 mb-12">
                <Link to="/authers" style={{ marginRight: '250px', color: '#00e4ff'}}>Add_Authers</Link>
                <Link to="/articles" style={{ marginRight: '250px', color: '#00e4ff'}}>Add_Articles</Link>
                <Link to="/articles/read" style={{marginRight: '280px', color: '#00e4ff'}}>Read_Articles</Link>
            </div>
      
            <h1 className="text-5xl text-center mt-8 mb-12">WELCOME {username}!!!</h1>
            <h1 className="text-5xl text-center mt-8 mb-12">Auther - Article Management System</h1> 
  
            <div className="flex justify-center items-center">
                <div className="w-[550px] border border-slate-200 px-4 py-3 rounded-lg">
                    <p className="text-xl text-center">Login with your username</p>
                    <input type="text" className="p-2 border border-slate-300 rounded-lg text-slate-800 text-xl mb-4 w-full text-center" onChange={handleUsername}/>
                    <p className="text-xl text-center">Password</p>
                    <input  type="password" className="p-2 border border-slate-300 rounded-lg text-slate-800 text-xl mb-4 w-full text-center"/>   
                    <div className="flex justify-end">
                        <button className="py-2 px-3 rounded-lg bg-slate-800 text-sm text-white hover:bg-blue-800">
                            LOGIN
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
