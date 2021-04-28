import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import { useHistory } from "react-router-dom";



// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  let history = useHistory();

  const handlePaperClick = e => {
    history.push('/search_paper/')
  }

  const handleGeneClick = e => {
    history.push('/search_gene/')
  }
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/autism-gene.jpg").default + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="motto text-center">
              <h1 className="presentation-title">Autism</h1>
              <h1 className="presentation-title">Gene Phenotype</h1>
              <h2 className="presentation-subtitle text-center">
                A comprehensive database of gene-phenotype associations for Austim Spectrum Disorder
              </h2>
              <br />
              <Button
                className="btn-round mr-1"
                color="neutral"
                target="_blank"
                outline
                onClick={handlePaperClick}
              >
                <i className="fa fa-search" />
                Search Papers
              </Button>
              <Button className="btn-round" color="neutral" type="button" outline onClick={handleGeneClick}>
                <i className="fa fa-search" />
                Search Genes
              </Button>
            </div>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage:
              "url(" + require("assets/img/clouds.png").default + ")",
          }}
        />
      </div>
    </>
  );
}

export default IndexHeader;
