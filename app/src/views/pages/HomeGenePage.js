import React from 'react';

import {Input} from 'antd';
import {Row, Col, Container, Button} from 'reactstrap'

import PageNavbar from "../../components/Navbars/PageNavbar.js";
import SearchPageHeader from "../../components/Headers/SearchPageHeader.js";
import '../../static/style/searchPaper.css'


function HomeGenePage(props) {
  
  const handleSearchClick = e => {
    props.history.push('/search_gene/'+e);
  }

  const handleEampleClick = e => {
    props.history.push('/search_gene/'+e.target.innerHTML);
  }


  return (
    <div>
      <PageNavbar />
      <SearchPageHeader />
      <Container className="text-center">
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h4 className="title">Search gene name and get the summary report</h4>
          </Col>   
        </Row>
        <Row> 
          <Input.Search className="ml-auto mr-auto"
            placeholder="Please enter a gene name"
            enterButton="Search"
            size="large"
            onSearch={handleSearchClick}
            style={{ width: 800 }}
          />
        </Row>
        <Row className="example" >
          <div className="ml-auto mr-auto text-center" >
            <strong>Examples: </strong>
            <Button outline className="btn-round mr-1" color="default" size="sm" onClick={handleEampleClick}>SHANK3</Button>
            <Button outline className="btn-round mr-1" color="default" size="sm" onClick={handleEampleClick}>DPF2</Button>
            <Button outline className="btn-round mr-1" color="default" size="sm" onClick={handleEampleClick}>SMS</Button>      
          </div>
        </Row>
      </Container>

    </div>
  );
}

export default HomeGenePage;
