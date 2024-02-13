import React from 'react'
import './Dash.css'
import SearchIcon from '@mui/icons-material/Search';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AppsIcon from '@mui/icons-material/Apps';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Accordian from './Accordians-file/Accordian';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Dash = () => {
  // array for the accodian titals
  const accordionData = [
    {
      id: 1122334455,
      name: 'NDS ASHBURNHAM LIGHT',
      date: "2/22/21 8:16 AM EST",
      pieces: 456
    },

    {
      id: 34652356,
      name: 'NDS SOUTH BERWICK WATER',
      date: "2/17/21 10:05 AM EST",
      pieces: 23
    },

    {
      id: 1122562889,
      name: 'BCN STATEMENTS',
      date: "2/12/21 5:23 PM EST",
      pieces: 60
    },

    {
      id: 1122334455,
      name: 'NDS NH COMMUNITY FUC',
      date: "2/12/21 8:32 PM EST",
      pieces: 23
    },


    {
      id: 352659239,
      name: 'NDS ME FAMILY FACU MORTGAGE NOTICES',
      date: "2/12/21 2:34PM EST",
      pieces: 845
    },

    {
      id: 1122334455,
      name: 'NDS HOLLIS TAX',
      date: "2/10/21 11:48 AM EST",
      pieces: 93
    },

    {
      id: 1122334455,
      name: 'NDS MANSFIELD ELECTRIC',
      date: "2/9/21 7:16 AM EST",
      pieces: 531
    },

    {
      id: 1122334455,
      name: 'NDS MANSFIELD ELECTRIC',
      date: "2/9/21 7:20 PM EST",
      pieces: 532
    },

    {
      id: 1023484367,
      name: 'NDS MANSFIELD ELECTRIC BOSTON AND NEW YOURK',
      date: "2/22/21 8:16 AM EST",
      pieces: 421
    },
  ];

  return (
    <>
    {/* header starts */}
      <div className="Dash-header-wraper">
        <div className="Dash-header">
          <div className="burgure">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="Dash-header-titles">
            <span>Reviewing Tools </span> <div className="arrow"><ChevronRightIcon /></div><span> Order Approved</span>

          </div>
        </div>
      </div>
      {/* header ends here */}
      {/* main body starts here */}

      <div className="Dash-main-body-wraper">
{/* side bar starts here */}
        <div className="Dash-sidebar-wrapper">
          <div className="Dash-sidebar">

            <div className="bento-icone-section-1">
              <AppsIcon />
              <AppsIcon />
              <AppsIcon />
              <AppsIcon />
              <AppsIcon />

            </div>
            <div className="bento-icone-section-2">
              <AppsIcon />
              <AppsIcon className='active-icone' />
              <AppsIcon />
              <AppsIcon />
              <AppsIcon />

            </div>
            <div className="user-image-section">
              <img className='user-img1' src="src/components/dashboard/DashAssets/user.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* side bar ends here */}
        {/* main dash part stats here */}

        <div className="Dash-main p-1">
        {/* dash nav section start */}
          <div className="Dash-main-nav-section">
            <div className="nav-links">
              <div className="nav-link"><span>ALL</span></div>
              <div className="nav-link act-btn">TO REVIEW (37)</div>
              <div className="nav-link">ON HOLD (2)</div>
              <div className="nav-link">PROCESSING (15)</div>
            </div>
          </div>
          {/* dash nav ends */}

         <div className='container-fluid'>
         {/* dash table title starts here */}
          <div className="Dash-table-titles-section">
              <div className="row">

                <div className="col-2">
                  <div className="titles" style={{ marginLeft: 20 }}>ORDER ID <ArrowUpwardIcon className='mb-1 fs-6' /></div>
                </div>
                <div className="col-3">
                  <div className="titles">PROGRAM NAME</div></div>
                <div className="col-2">
                  <div className="titles">EXPECTED MAIN DATE</div>
                </div>
                <div className="col-2">
                  <div className="titles">PIECES</div>
                </div>

                <div className="col-3">
                  <div className="title-input">

                    <input type="text"
                      placeholder='Search'
                      className='search'
                    />
                    <SearchIcon
                      className='search-icone'
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* dash table titles ends here */}
{/* accordians startrs here */}
        <div className="Dash-main-accordians">

              {
                accordionData.map((item) => (
                  <Accordian id={item.id} name={item.name} date={item.date} pieces={item.pieces} />

                ))}

            </div>
            {/* accordians ends here */}
            
            {/* pagination starts here */}

            <div className="pagination">
              <Stack spacing={2}>
                <Pagination count={4} shape="rounded" />
             </Stack>
            </div>
            {/* pagination ends here */}
          </div>

        </div>
        {/* main dash part ends here */}
      </div>
    </>
  )
}

export default Dash
