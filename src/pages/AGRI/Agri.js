import {
  CardGroup,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

import "../../CSS/card.css";

function AgriPage() {
  return (
    <CardGroup className="group-style">
      <Card className="card-style">
        <CardBody>
          <CardTitle tag="h5">Lelliottia sp., A Bacterium Associated with Fruit Rot of Pineapple in Puerto Rico</CardTitle>
          <CardText>
            Background: identify the agent that causes pineapple to rot by morphologic, biochemical, pathogenic, and phylogenetic analisys.
          </CardText>
          <CardText>Status: Recruting</CardText>
          <CardText>Point of Contact: lydiai.rivera@upr.edu</CardText>
          {/* <div className="btn-alignment">
            <Button className="btn-style">Apply Now!</Button>
          </div> */}
        </CardBody>
      </Card>

      <Card className="card-style">
        <CardBody>
          <CardTitle tag="h5">Using Distance Education to Enhance Aquaponic Production in Puerto Rico’s Model Forest</CardTitle>
          <CardText>
            Background: In this project, Distance Education (DE) Technology And Training will be used to carry out 
            a successful non-formal education and companionship program that will target agricultural extension service personnel, farmers, and communities 
            in remote areas. As a result, farmers will increase and diversify high quality protein and horticultural production through the establishment of 
            aquaponic systems. At the end of this project, the anticipated overall impact will be to have in place hub network of four DE facilities with 
            state-of-the-art technology. They will have a highly trained team of extension agents and leaders, who will provide scientifically based 
            non-formal DE training in the areas of DE methods and aquaponic systems within the BM Central Cordillera footprint.
          </CardText>
          <CardText>Status: Recruting</CardText>
          <CardText>Point of Contact: robinson.rodriguez1@upr.edu</CardText>
          {/* <div className="btn-alignment">
            <Button className="btn-style">Apply Now!</Button>
          </div> */}
        </CardBody>
      </Card>

      <Card className="card-style">
        <CardBody>
          <CardTitle tag="h5">Food Systems Resilience In Costal Communities: Fisheries And Aquaculture in Puerto Rico</CardTitle>
          <CardText>
          This research will be conducted in collaboration with The University Of Vermont. It seeks to identify the vulnerabilities and strengths of western 
          fisheries and aquaculture in Puerto Rico to meet the possible challenges and collect the lessons learned in order to have a more resilient food system 
          in disasters. To achieve this various quantitative and qualitative methods will be used to develop educational materials and 
          recommendations for producers, institutions, communities and public policy.
          </CardText>
          <CardText>Status: Recruting</CardText>
          <CardText>Point of Contact: nayda.santiago@upr.edu</CardText>
          {/* <div className="btn-alignment">
            <Button className="btn-style">Apply Now!</Button>
          </div> */}
        </CardBody>
      </Card>
    </CardGroup>
  );
}

export default AgriPage;
