import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {Row, Col, Container} from 'reactstrap';
import { Table, Input } from 'antd';

import PageNavbar from "../../components/Navbars/PageNavbar.js";
import SearchPageHeader from "../../components/Headers/SearchPageHeader.js";
import BarChartComponent from '../../components/Graphs/BarChartComponent';
import PieChartComponent from "../../components/Graphs/PieChartComponent";

import axios from 'axios';
import servicePath from "../../config/apiUrl";

import 'antd/dist/antd.css';

function ResultGenePage(props) {
    
    const [query, setQuery] = useState({paper_num:0,sentence_num:0});
    let history = useHistory();
    var searchVal = props.match.params.id.toUpperCase();

    const handleSearchClick = e => {
        history.push('/search_gene/'+e);
      }

    
    useEffect(() => {
        var postData = JSON.stringify(props.match.params.id.toUpperCase());
        console.log(postData);
        axios({
            method: 'post',
            url: servicePath.searchGene,
            data: postData,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Accept': 'application/json',
            }  
        })
        .then(response => setQuery(response.data));
    }, [props]);

    const columns = [
        {
            title: 'ID 1',
            dataIndex: 'phenotype1',
        },
        {
            title: 'Std Phenotype',
            dataIndex: 'phenotype2',
        },
        {
            title: 'Source',
            dataIndex: 'phenotype3',
        },
        {
            title: 'ID 2',
            dataIndex: 'phenotype4',
        },
        {
            title: 'NPMI',
            dataIndex: 'npmi',
            sorter: {
                compare: (a, b) => a.npmi - b.npmi,
                multiple: 1,
            }
        }

    ]

    const data = []
    const pheno = query.related_npmi

    if (pheno !== undefined) {
        Object.entries(pheno).forEach(([key, value]) => {
            var arr = key.split(/[']+/)
            data.push({
                key: key,
                phenotype1: arr[1],
                phenotype2: arr[3],
                phenotype3: arr[5],
                phenotype4: arr[7],
                npmi: parseFloat(value).toFixed(3)
            })
        });
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
                <Row> 
                    <Col className="ml-auto mr-auto text-center" md="8">
                        <h4 className="title">Result for <strong>{searchVal}</strong></h4>
                        <p>
                            There are <strong>{query.paper_num}</strong> papers(s) that are associated with {searchVal}, 
                            and <strong>{query.sentence_num}</strong> sentences that have mentioned {searchVal} in total.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <BarChartComponent data={data}/>
                    </Col>
                    <Col md="6">
                        <PieChartComponent />
                    </Col>
                </Row>
                <Row>
                    <Col className="ml-auto mr-auto text-center" md="8">
                        <h4 className="title">Gene-Phenotype Associations</h4>
                    </Col>
                    <Col className="ml-auto mr-auto text-center" md="12">
                        <Table 
                            columns={columns} 
                            dataSource={data}
                            />
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default ResultGenePage;
