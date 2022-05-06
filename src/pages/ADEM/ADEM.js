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
                    <CardTitle tag="h5">Business Center and Economic Development</CardTitle>
                    <CardText>
                        Background: Business Center and Economic Development (CNDE in Spanish)
                        Is dedicated to create, develop, and help businesses all around the
                        island to progress. There are programs such as startup, business
                        acceleration, and advisory with professional mentors.
                    </CardText>
                    <CardText>Status: Recruting</CardText>
                    <CardText>Point of Contact: moraima.dehoyos1@upr.edu</CardText>
                    {/* <div className="btn-alignment">
                        <Button className="btn-style">Apply Now!</Button>
                    </div> */}
                </CardBody>
            </Card>

            <Card className="card-style">
                <CardBody>
                    <CardTitle tag="h5">Marketing Strategies and Network Organization</CardTitle>
                    <CardText>
                        Background: The future of a organization depends on the abilities
                        to create and innovate, to try new ideas and business strategies.
                        Organization that are part of a network of organization are proven
                        to be more solid and competitive in contrast to those who are
                        working alone. The investigation to understand the phenomenon are
                        almost non-existent or only exist for big businesses.

                    </CardText>
                    <CardText>Status: Recruting</CardText>
                    <CardText>Point of Contact: leila.marcano@upr.edu</CardText>
                    {/* <div className="btn-alignment">
                        <Button className="btn-style">Apply Now!</Button>
                    </div> */}
                </CardBody>
            </Card>

            <Card className="card-style">
                <CardBody>
                    <CardTitle tag="h5">Impact and Effects of the Pharmaceutical</CardTitle>
                    <CardText>
                        Background: This is dedicated to the environment and ecosystem
                        of the Pharmaceutical businesses and service businesses. The
                        idea is to identify key factors to promote and strengthen the
                        relationship between these two.
                    </CardText>
                    <CardText>Status: Recruting</CardText>
                    <CardText>Point of Contact: moraima.dehoyos1@upr.edu</CardText>
                    {/* <div className="btn-alignment">
                        <Button className="btn-style">Apply Now!</Button>
                    </div> */}
                </CardBody>
            </Card>
        </CardGroup>
    );
}

export default EngineeringPage;
