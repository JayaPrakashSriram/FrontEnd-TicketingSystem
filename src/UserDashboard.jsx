import {useState} from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useNavigate } from "react-router-dom";
import { User } from './User';

function QueryList({nm, setQuery}){
  return(
    <div className='Query-Content'>
      <div className='Query-content-wrap'>
        <h4>{nm.QueryNo}</h4>
        <h4>{nm.Name}</h4>
      </div>
      <div className='Query-content-wrap'> 
        <h4 className='Query-title'>{nm.Title}</h4>
        <button className='OpenQuery-button' onClick={()=> setQuery(nm)}>
          <OpenInNewIcon/> <br/>
            Open
        </button>
      </div>
    </div>
  )
}

export function QueryDashBoard(){
  const navigate = useNavigate();
  const Queries = 
    [
      {
        "QueryNo" : "001",
        "Name" : "Senthil",
        "Title": "Low Internet Speed",
        "Type" : "Techinical",
        "QueryDiscription": "Nothing more to say Lorum Ipsum jflkjjfajfaj fkadsjflkadjfkjafjadjf kadjfjdfjfjnvmzjn; dufjasjdfajfiualkadkd fjajfadjflkjdafo iasdufsdjfdjfua oialkjfdsajfkjdsflkj"
      },
      {
        "QueryNo" : "002",
        "Name" : "Senthil",
        "Title": "Low Internet Speed",
        "Type" : "Techinical",
        "QueryDiscription": "Nothing more to say Lorum Ipsum jflkjjfajfaj fkadsjflkadjfkjafjadjf kadjfjdfjfjnvmzjn; dufjasjdfajfiualkadkd fjajfadjflkjdafo iasdufsdjfdjfua oialkjfdsajfkjdsflkj"
      }
    ]
    const [query, setQuery] = useState({});
    
    return(
        <div className='DashBoard'>

          <div className='leftSideOfDashBoard'>
            <div>
              <form className='gap'>
                <label>Query Type:</label>
                <select>
                  <option style={{display: "none"}}></option>
                  <option value="Both">All Query</option>
                  <option value="Techinical">Techinical</option>
                  <option value="NonTechinical">NonTechinical</option>
                </select>
              </form>
  
              <h2 className='Query-As-Title'>Query</h2>
              <div className='Create-Query-Button'>
                <button onClick={() => navigate('/User')}>+ Create Query</button>
              </div>

              <div className='Query-Box'>
                {Queries.map((nm) => (
                  <QueryList key={nm.QueryNo} nm={nm} setQuery={setQuery}/>
                ))}
              </div>
            </div>  
          </div>

          <div className='rightSideOfDashBoard'>
            <div className='QueryDiscription'>
              <h2 className='Query-Discription-Titles'>Query Discription</h2>
              <div className='Single-Query-no-name'>
                <h2>{query.QueryNo}</h2>
                <h2>{query.Name}</h2>
              </div>
              <h1 className='Single-Query-Title'>{query.Title}</h1>
              <h3 className='Single-Query-Type'>{query.Type}</h3>
              <h4 className='Single-Query-Discription'>{query.QueryDiscription}</h4>
            </div>

            <div className='QueryChating'>
              <h2 className='Query-Discription-Titles'>Chat</h2>
            </div>
          </div>
        </div>
    )
}