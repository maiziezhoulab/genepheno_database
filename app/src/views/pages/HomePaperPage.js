import React, { useState, useEffect } from 'react';

import {Input} from 'antd';
import {useHistory} from 'react-router-dom';
import {Button, Container, Row, Col} from 'reactstrap';

import SearchList from "../../components/SearchList";
import servicePath from "../../config/apiUrl";
import PageNavbar from "../../components/Navbars/PageNavbar.js";
import SearchPageHeader from "../../components/Headers/SearchPageHeader.js";

import '../../static/style/searchPaper.css'


function HomePaperPage(props) {
  const [paper, setPaper] = useState([]);
  
  let history = useHistory();
  
  const onSearch = e => {
    history.push('/search_paper/'+e);
  }

  const handleEampleClick = e => {
    history.push('/search_paper/'+e.target.innerHTML);
  }


  useEffect(() => {
    fetch(servicePath.getHomePaper, {
      headers : { 
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }).then(res => res.json()).then(data => {
      setPaper(data.result);
      
    });
  }, []);

  return (
    <>
      <div>
        <PageNavbar />
        <SearchPageHeader />
        <Container className="text-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h4 className="title">Search Key Word</h4>
            </Col>
          </Row>

          <Row>
            <Input.Search className="ml-auto mr-auto"
              placeholder="e.g. DPF2"
              enterButton="Search"
              size="large"
              onSearch={onSearch}
              style={{ width: 800 }}
            />
          </Row>
          <Row className="example" >
            <div className="ml-auto mr-auto text-center" >
              <strong>Examples: </strong>
              <Button outline className="btn-round mr-1" color="default" size="sm" onClick={handleEampleClick}>PMC5985265</Button>
              <Button outline className="btn-round mr-1" color="default" size="sm" onClick={handleEampleClick}>DPF2</Button>
              <Button outline className="btn-round mr-1" color="default" size="sm" onClick={handleEampleClick}>Autism</Button>      
            </div>
          </Row>
          <Row className="ml-auto mr-auto py-5">
            <Col className="d-flex justify-content-center align-items-center w-100">
              <SearchList className="text-center w-50" list = {paper}/>
            </Col>
            
          </Row>
        </Container>
      </div>
    </>
  );
}

export default HomePaperPage;
