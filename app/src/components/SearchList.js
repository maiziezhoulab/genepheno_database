import React from 'react';

import {Badge, Container, Col} from 'reactstrap';
import {Table , Tooltip, Tag} from "antd";
import {useHistory} from 'react-router-dom';

import 'antd/dist/antd.css';

function SearchList(props) {
  let history = useHistory();

  const {list} = props
  const columns = [
    {
      title: 'PMC ID',
      dataIndex: 'pmc_id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Publish Date',
      dataIndex: 'date',
      width: 120 
    },
    {
      title: 'Related Gene',
      key: 'gene_type',
      dataIndex: 'gene_type',
      width: 200,
      render: gene_type => (
          
        <span>
          {gene_type.map(gene => {
            let color = 'secondary';
            if (gene[1] === 1) {
              color = 'info';
            } else if (gene[1] === 2) {
              color = 'warning';
            } else if (gene[1] === 3) {
              color = 'success';
            } else if (gene[1] === 'S') {
              color = 'danger';
            }
            return (
              <Badge color={color} key={gene[0]} pill onClick={handlTagClick}>
                {gene[0].toUpperCase()}
              </Badge>
            );
          })}
          </span>
      ),
    }
  ];


  const expandedRowRender = (id) => {
    // console.log(id)
    const columns = [
      { title: 'Sentence ID', dataIndex: 'sentence_id', key: 'sentence_id', width: 50, fixed: 'left'},
      { title: 'Content', dataIndex: 'content', key: 'content', width: 300 },
      {
        title: 'Gene', 
        dataIndex: 'gene', 
        key: 'gene',
        width: 50,
        render: gene => (
          <span>
            {gene.map(g => {
              return (
                <Tag key={g}>
                  {g.toUpperCase()}
                </Tag>
              );
            })}
            </span>
        ),
      },
      {
        title: 'Phenotype', 
        dataIndex: 'phenotype', 
        key: 'phenotype', 
        width: 100,
        render: phenotype => (
          <div>
            {phenotype.map(pheno => {
              return (
                <Tag key={pheno}>{pheno}</Tag>      
              )
            })}
          </div>
        ),
      },
      {
        title: 'Std Phenotype', 
        dataIndex: 'std_pheno', 
        key: 'std_pheno', 
        width: 100,
        render: std_pheno => (
          <div>
            {std_pheno.map(std => {
              return (  
                <Tooltip key={std} title={std[0] + ", " + std[2] + ", " + std[3]} >
                  <Tag key={std}>{std[1]}</Tag>
                </Tooltip>        
              )
            })}
          </div>
        ),
      },

      {title: 'Upper Level', dataIndex: 'upper_level', key: 'upper_level', width: 80},
    ];

    const data = [];
    var sentences = id.sentences

    for (const [index, [key, value]] of Object.entries(Object.entries(sentences))) {
      data.push({
        key: index,
        sentence_id: parseInt(index) + 1,
        content: value.Content,
        gene: value.Gene,
        phenotype: value['Original phenotype'],
        std_pheno: value['Normolized phenotype'],
        upper_level: value['Upper level concepts']
      })
    }
    
    return <Table 
            columns={columns} 
            dataSource={data} 
            pagination={false} 
            scroll={{ x: 1500 }} 
            sticky 
            style={{ width: 920 }}
            />;
  };

  const handlTagClick = (e)=> {
    history.push('/search_gene/'+e.target.innerHTML);
  }

  
  return (
    <div>
      <Container>
        <p>Gene type: &nbsp;
          <Badge color="secondary" pill>non type</Badge>&nbsp;
          <Badge color="info" pill>type 1</Badge>&nbsp;
          <Badge color="warning" pill>type 2</Badge>&nbsp;
          <Badge color="success" pill>type 3</Badge>&nbsp;
          <Badge color="danger" pill>Sfari</Badge>
        
        </p>
        <Col>
          <Table 
            columns={columns} 
            dataSource={list} 
            expandable={{ expandedRowRender }}

          />
        </Col>

      </Container>
    </div>
    
  )
}



export default SearchList;