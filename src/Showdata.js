import React,{useEffect} from 'react'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useSelector,useDispatch } from 'react-redux'
import { fetchPosts } from './redux/action';
const Showdata = () => {
  const {posts,loading,error}=useSelector((state)=>state.data)
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchPosts())
  },[])
  return (
    <>
    <div>Showdata</div>
    {/* <button onClick={()=>dispatch(fetchPosts())}>Fetch Post</button> */}
    {!loading?(
        <table className="table table-striped">
        <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
            {/* <th>tech</th> */}
          </tr>
        </thead>
        <tbody>
          {posts.map((item) => (
            <tr key={item.id}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td>
                {/* <button
                  onClick={() => this.handleDelete(item)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ):(<h3>Loading...</h3>)}
    </>
    


  )
}

export default Showdata