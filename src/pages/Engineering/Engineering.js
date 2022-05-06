import {
  CardGroup,
  Card,
  CardBody,
  CardText,
  CardImg,
  CardSubtitle,
  CardTitle,
  Button,
} from "reactstrap";

import "../../CSS/card.css";

function EngineeringPage() {
  return (
    <CardGroup className="group-style">
      <Card className="card-style">
        <CardBody>
          <CardTitle tag="h5">Nano Games</CardTitle>
          <CardText>
            Background: Nano Games is a team of undergraduate students that
            focuses on the creation of educational video games with the purpose
            of aiding the teaching of complex topics like Nanotechnology as well
            as for raising interest on STEAM careers for high school students.
            Currently, the team is working on developing an Augmented Reality
            (AR) game in order to determine the impact this technology can make
            as an educational tool.
          </CardText>
          <CardText>Status: Recruting</CardText>
          <CardText>Point of Contact: nayda.santiago@upr.edu</CardText>
          <div className="btn-alignment">
            <Button className="btn-style">Apply Now!</Button>
          </div>
        </CardBody>
      </Card>

      <Card className="card-style">
        <CardBody>
          <CardTitle tag="h5">Cybersecurity</CardTitle>
          <CardText>
            Background: PANDAHAT is a joint effort from students and professors
            to promote and help establish a learning path for cybersecurity in
            the university. The team began as a study group to participate in
            HENAAC, now known as GMiS, capture the flag competition which is
            held once a year. The competition involves completing a set of
            Penetration testing challenges to win. Since it has evolved into
            also doing a proper research project. Currently we are working on
            detecting malicious network traffic with the use of machine learning
            to improve detection against unknown threats.
          </CardText>
          <CardText>Status: Recruting</CardText>
          <CardText>Point of Contact: nayda.santiago@upr.edu</CardText>
          <div className="btn-alignment">
            <Button className="btn-style">Apply Now!</Button>
          </div>
        </CardBody>
      </Card>

      <Card className="card-style">
        <CardBody>
          <CardTitle tag="h5">Embedded Systems</CardTitle>
          <CardText>
          Background: The research group is studying FPGAs to apply them as Edge Computing devices.
          The group also has developed Embedded Systems applications in the areas of Internet of Things and Education, 
          having an outreach program called the Tech. Carnival with its main purpose being increasing the interest of high school 
          students on Electrical and Computer Engineering careers.
          </CardText>
          <CardText>Status: Recruting</CardText>
          <CardText>Point of Contact: nayda.santiago@upr.edu</CardText>
          <div className="btn-alignment">
            <Button className="btn-style">Apply Now!</Button>
          </div>
        </CardBody>
      </Card>
    </CardGroup>
  );
}

export default EngineeringPage;
