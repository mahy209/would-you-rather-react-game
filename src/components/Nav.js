import React from 'react'
import {NavLink} from 'react-router-dom'
import {setAuthedUser} from '../actions/authedUser.js'
import LoadingBar from 'react-redux-loading'

export default function Nav(props){
    const {authedUser,users,dispatch}=props
    let user=undefined
    const urls=[
        {url:'/', name: 'Home'},
        {url: '/add', name: 'New Question'},
        {url: '/leaderboard', name: 'Leader Board'}
    ]

    if(users.length>0){
        user= users.filter((u)=>u.id===authedUser)
    }
    
    function isLogin(page, match, location) {        
        if (!match) {
            return false;
        }
        return location.pathname===page && authedUser!==null ;
    }
    function handleLogout(){
        return dispatch(setAuthedUser(null));
    }
    return(
               
        <nav className='topnavBar'>
            <div className='divnavBar'>
            {urls.map((u, index)=>(
                <NavLink key={'nav'+ index} to={authedUser!==null ? u.url : '/login'}
                isActive={(match, location)=>isLogin(u.url, match,location)} 
                activeStyle={{ backgroundColor: '#0099cc', color: 'white'}} 
                activeClassName='link'> {u.name} </NavLink>
            ))
            }
            {authedUser!==null && user.length>0 ?(
            <div className='topLogout'> 
                Hello, {user[0].name}
                <div className='imgLogout'><img src={user[0].avatarURL} alt='' width="30" height="30"/></div>
                <NavLink to='/login' exact activeClassName='link' onClick={handleLogout}>Logout</NavLink>
            </div>
            ): null
            }
           
            </div>
            <LoadingBar style={{ backgroundColor: '#0099cc', height: '5px'}}/>
        </nav> 
        
    )
}