import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import PageNavbar from "components/Navbars/PageNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <PageNavbar />
      <IndexHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <br />
            <Row>
              <Col md="6">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-tap-01" />
                  </div>
                  <div className="description">
                    <h3 >What is Autism Gene Phenotype</h3>
                    <br />
                    <p className="description">
                    An automatic text mining pipeline to identify sentence-level mentions of autism-associated genes and phenotypes in 
                    literature through natural language processing methods. 
                    We aim to understand gene–phenotype associations in the autism-related literature to unravel the disease mechanisms and advance its diagnosis and treatment. 
                    We have generated a comprehensive database of gene-phenotype associations with the autism-related literature. 
                    The database can be easily updated as new literature becomes available with Autism_genepheno.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <h3 className="info-title">Pipeline model</h3>
                  <br />
                  <img
                    alt="..."
                    className="img-rounded img-responsive"
                    src={require("assets/img/pipeline.png").default}
                    style={{ width: "100%" }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default Index;
