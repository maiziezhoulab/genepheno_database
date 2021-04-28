import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { Input} from 'antd';
import {Row, Col, Container} from 'reactstrap';

import SearchList from "../../components/SearchList";
import PageNavbar from "../../components/Navbars/PageNavbar.js";
import SearchPageHeader from "../../components/Headers/SearchPageHeader.js";

import axios from 'axios';
import servicePath from "../../config/apiUrl";

import 'antd/dist/antd.css';

function ResultPaperPage(props) {
  const [query, setQuery] = useState([]);
  let history = useHistory();
  var searchVal = props.match.params.id;

  // console.log(props.match.params.id);
  
  const onSearch = e => {
    history.push('/search_paper/'+e);
  }


  useEffect(() => {
    var postData = JSON.stringify(props.match.params.id);
    axios({
      method: 'post',
      url: servicePath.searchPaper,
      data: postData,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    })
    .then(response => setQuery(response.data.result));
  }, [props]);
  

  return (
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
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h4 className="title">Result for <strong>{searchVal}</strong></h4>
            <p>
              There are <strong>{query.length}</strong> record(s) that are associated with {searchVal}.
            </p>
          </Col>
        </Row>
        <Row >
          <Col className="ml-auto mr-auto text-center" md="12">
            <SearchList list = {query}/>
          </Col>
        </Row>

      </Container>

    </div>
  );
}

export default ResultPaperPage;
