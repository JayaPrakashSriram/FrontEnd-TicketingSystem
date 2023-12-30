export function Test() {
    return (
        <HelDesk2/>
    );
  }

function HelpDeskMaping(){
const Queries = 
  [
    {
      "QueryNo" : "#001",
      "Name" : "Senthil",
      "QueryTitle": "Low Internet Speed",
      "Type" : "Techinical"
    },
    {
      "QueryNo" : "#002",
      "Name" : "Guna",
      "QueryTitle": "System is Slow",
      "Type" : "Techinical"
    },
    {
      "QueryNo" : "003",
      "Name" : "Thambi",
      "QueryTitle": "OS need to be Installed",
      "Type" : "Techinical"
    },
    {
      "QueryNo" : "004",
      "Name" : "Velu",
      "QueryTitle": "Battery Problem",
      "Type" : "Techinical"
    },
    {
      "QueryNo" : "005",
      "Name" : "Pazhani",
      "QueryTitle": "Computer Malfunction",
      "Type" : "Techinical"
    },
    {
      "QueryNo" : "006",
      "Name" : "Rajan",
      "QueryTitle": "Need to chnage the working Shift",
      "Type" : "Non-Techinical"
    },
    {
      "QueryNo" : "007",
      "Name" : "Anbu",
      "QueryTitle": "Delay pickup by Cab",
      "Type" : "Non-Techinical"
    },
  ]
  return(
    <div>
      {Queries.map((nm, index) => (
        <div className='Query-Content'>
            <div className='Query-content-wrap'>
              {/* Query type will be find by filtering */}
              {/* status of query will shown by green(new) orange(delay) red(over due) and in filtering*/}
              <h4>{nm.QueryNo}</h4>
              <h4>{nm.Name}</h4>
            </div>
            <h4 className='Query-title'>{nm.QueryTitle}</h4>
          </div>
      ))}
    </div>
  )
}

function HelDesk2(){
  return(
      <div>

        <div>
          <h3 className='title-as-query'>Queries:</h3>
          <HelpDeskMaping/>
        </div>

      </div>
    )
}