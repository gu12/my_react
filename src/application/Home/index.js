import React from 'react'
import  {renderRoutes} from  'react-router-config'
import './index.scss'
import {NavLink} from 'react-router-dom'


function Home(props){
    const {route} = props
    return(
         <div>
             <div className='Top'>
                 <span>-</span>
                 <span>Web App</span>
                 <span>搜索</span>
             </div>
             <div className='Tab'>
             <NavLink to="/recommend" activeClassName="selected"> <div className='TabItem'><span>推荐</span></div>  </NavLink>
             <NavLink  to="/singers" activeClassName="selected"> <div className='TabItem'><span>歌手</span></div>  </NavLink>
             <NavLink  to="/rank" activeClassName="selected"> <div className='TabItem'><span>排行榜</span></div>  </NavLink>

             </div>
           
             { renderRoutes(route.routes) }

         </div>
    )

}




export default React.memo(Home)