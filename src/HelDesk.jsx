import * as React from 'react';
import InboxIcon from '@mui/icons-material/Inbox';
import ListIcon from '@mui/icons-material/List';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import AddTaskIcon from '@mui/icons-material/AddTask';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {useState} from 'react';

export function HelDesk(){
  return(
    <div>
      <HelDesk2/>
    </div>
  )
}

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

function HelDesk2(){
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
      "Name" : "Guna",
      "Title": "System is Slow",
      "Type" : "Techinical",
      "QueryDiscription": "Nothing more to say"
    },
    {
      "QueryNo" : "003",
      "Name" : "Thambi",
      "Title": "OS need to be Installed",
      "Type" : "Techinical",
      "QueryDiscription": "Nothing more to say"
    },
    {
      "QueryNo" : "004",
      "Name" : "Velu",
      "Title": "Battery Problem",
      "Type" : "Techinical",
      "QueryDiscription": "Nothing more to say"
    },
    {
      "QueryNo" : "005",
      "Name" : "Pazhani",
      "Title": "Computer Malfunction",
      "Type" : "Techinical",
      "QueryDiscription": "Nothing more to say"
    },
    {
      "QueryNo" : "006",
      "Name" : "Rajan",
      "Title": "Need to chnage the working Shift",
      "Type" : "Non-Techinical",
      "QueryDiscription": "Nothing more to say"
    },
    {
      "QueryNo" : "007",
      "Name" : "Anbu",
      "Title": "Delay pickup by Cab",
      "Type" : "Non-Techinical",
      "QueryDiscription": "Nothing more to say"
    },
  ]
  const [query, setQuery] = useState({});
  return(
    <div className='whole-structure'>

      {/* <div className='Navigation-Bar'> */}
        {/* <div><InboxIcon/></div> Assigned */}
        {/* <div><ListIcon/></div> Unassigned */}
        {/* <div><CrisisAlertIcon/></div> Over Due */}
        {/* <div><AddTaskIcon/></div> Solved */}
      {/* </div> */}


      <div className="left">

        <form className='gap'>
          <label>Query Type:</label>
          <select>
            <option style={{display: "none"}}></option>
            <option value="Both">All Query</option>
            <option value="Techinical">Techinical</option>
            <option value="NonTechinical">NonTechinical</option>
          </select>
        </form>

        {/* <form className='gap'>
          <label>Status of the Query:</label>
          <select>
            <option style={{display: "none"}}></option>
            <option value="New">New</option>
            <option value="Delayed">Delayed</option>
            <option value="Over_due">Over_due</option>
          </select>
        </form> */}

        <div>
          <h3 className='title-as-query'>Queries:</h3>
          <div className='Query-Box'>
            {Queries.map((nm) => (
              <QueryList key={nm.QueryNo} nm={nm} setQuery={setQuery}/>
            ))}
          </div>
        </div>

      </div>


      <div className='center'>

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
          <h2 className='Query-Chat-Titles'>Chat</h2>
          <div className='Query-Chat'>
            
          </div>
          <input></input>
        </div>

      </div>


      <div className="right">
        <div className='gap'>Associate Details</div>
        <div className='Co-Ordinator-Details-Box'></div>
        <div className='gap'>Recent Activities</div>
        <div className='Recent-Activities-box'></div>
      </div>
    </div>
    )
}

