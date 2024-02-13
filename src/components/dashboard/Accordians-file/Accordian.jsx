import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Accordian.css";

const Accordian = ({ id, name, date, pieces }) => {
  return (
    <>
      <div className="Dash-main-accordians">
        {/* accordian starts here */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            {/* accordian titals */}
            <div className="container-fluid">
              <div className="row">
                <div className="col-2">
                  <span className="accordian-text">{id}</span>
                </div>
                <div className="col-3">
                  <span className="accordian-text">{name}</span>
                </div>
                <div className="col-2">
                  <span className="accordian-text" style={{ marginLeft: 10 }}>
                    {" "}
                    {date}
                  </span>
                </div>
                <div className="col-2">
                  <span className="accordian-text" style={{ marginLeft: 20 }}>
                    {pieces}
                  </span>
                </div>
                <div className="col-3">
                  <div className="accordian-btns-wraper">
                    <button className="accordian-btn hold">Hold</button>
                    <button className="accordian-btn text-white">
                      Approve
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </AccordionSummary>
          {/* accordian details starts here */}
          <AccordionDetails>
            <div className="container-fluid">
              <span className="side-line"></span>
              <div className="Dash-accordianDetail-section">
                <div className="row">
                  <div className="col-5">
                    <div className="section-1">
                      <span className="accordian-text">Details</span>
                      <span className="line"></span>

                      <div className="details">
                        <div className="details-1">
                          <div className="PI detail-title-text">
                            <span className="detail-title-text">
                              PROGRAM ID
                            </span>
                            <span className="accordian-text">345</span>
                          </div>
                          <div className="EQ detail-title-text">
                            <span>ENVELOPE QUANTITY</span>
                            <span className="accordian-text">693</span>
                          </div>
                          <div className="IC detail-title-text">
                            <span>IMAGE (CLICKS)</span>
                            <span className="accordian-text">160</span>
                          </div>
                        </div>
                        <div className="details-2">
                          <div className="DC detail-title-text">
                            <span>DATE CREATED</span>
                            <span className="accordian-text">21/2/21 8:16AM</span>
                          </div>
                          <div className="FN detail-title-text">
                            <span>FILE NAME</span>
                            <span className="accordian-text">DATA_51684132314_468451.ZIP</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <span className="accordian-text">Last Notes</span>
                    <span className="line"></span>
                    <div className="LN-users">
                      <div className="LN-user">
                        <img
                          src="src/components/dashboard/DashAssets/user-3.jpg"
                          className="user-img"
                          alt=""
                        />
                        <div className="details-texts">
                          <span className="username">Kate smith,11:35 A.M</span>
                          <span className="user-detail accordian-text">  Please, take a look at doc 123456789 attached to this
                        order. Seems like it should have been approved long time
                        ago.</span>
                        </div>
                      
                      </div>
                      <div className="LN-user">
                        <img
                          src="src/components/dashboard/DashAssets/user-2.jpg"
                          className="user-img"
                          alt=""
                        />
                        <div className="details-texts">
                          <span className="username">
                            John Johnson, Yesterday
                          </span>
                          <span className="user-detail accordian-text">
                            Preview of every documents make it much easier to
                            finds mistakes. Does this order supposed to be send
                            today or Monday 5th?
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-1 priview-btn ">
                    <button className="btn">Preview order</button>
                  </div>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default Accordian;
