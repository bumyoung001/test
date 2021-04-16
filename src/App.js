import React, {useEffect} from 'react';
import './App.css';
import useUser from "./data/use-user";
import Router from 'next/router';
import Nav from "./components/nav";
import {login, logout} from "./libs/auth";

function App() {
    const { user, mutate } = useUser();

    console.log(user);
    // useEffect(() => {
    //     if (user) {
    //         // Router.replace("/dashboard");
    //     }
    // }, [user]);

  return (
      <div className="homepage">
        <Nav title="ACME"/>
        <main>
            <h1>ACME!</h1>
            <p>Build Something Brilliant</p>
            <br/>
            <button
                onClick={() => {
                    login();
                    mutate();
                }}
            >
                Login To Contiune
            </button>
            <br/>
            <button onClick={() => {
                logout();
            }}>
                logout
            </button>
        </main>
      </div>
  );
}

export default App;











//
//
//
// const fetcher = async (url) => {
//     const res = fetch(url, {
//         method: 'GET',
//         headers: {
//             'Content-type': 'application/json',
//             'token': 'eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJ0b2tlbk5vdGVzIjoiTUlOSU9OTElORVNBTEVTRVJWRVJUT0tFTiIsImV4cCI6MTY5ODUwNDIwNjkwOH0.SFFs2Z0UG17zE3nMZET7TZf-Ty7ao-G5vjOqWjRnZQA'
//         }
//     });
//     return await res.then(r => r.json());
// }
//
// const {data, error} = useSWR('http://localhost/api/entry/main/info', fetcher);
//
// if (error) return <div>failed to load</div>;
// if (!data) return <div>loading...</div>
//
// const modelFilter = (seriesName) => {
//
// }
//
// return (
//     <>
//         {
//             data.model.map(x => (
//                 <div key={x.index}>
//                     <button onClick={() => modelFilter(x.seriesName)}>{x.modelName}</button>
//                 </div>
//             ))
//         }
//     </>
// );
