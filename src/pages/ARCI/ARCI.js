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
                    <CardTitle tag="h5">Aula en la Montaña</CardTitle>
                    <CardText>
                        Background: Transdisciplinary project to take action and
                        help underdeveloped communities. This will help on topics
                        such as: dance classes, agriculture, physical activities, and
                        others. The purpose is to teach them more about social problems
                        and help them with moral issues found on today's society.
                    </CardText>
                    <CardText>Status: Recruting</CardText>
                    <CardText>Point of Contact: eduardo.lugo@upr.edu</CardText>
                    <div className="btn-alignment">
                        <Button className="btn-style">Apply Now!</Button>
                    </div>
                </CardBody>
            </Card>

            <Card className="card-style">
                <CardBody>
                    <CardTitle tag="h5">Impacto Juventud</CardTitle>
                    <CardText>
                        Background: The purpose of this investigation is to
                        teach about civic problems and politics to teens around
                        Puerto Rico. This works with the collaboration of various
                        organization and gubernatorial agencies.

                    </CardText>
                    <CardText>Status: Recruting</CardText>
                    <CardText>Point of Contact: eduardo.lugo@upr.edu</CardText>
                    <div className="btn-alignment">
                        <Button className="btn-style">Apply Now!</Button>
                    </div>
                </CardBody>
            </Card>

            <Card className="card-style">
                <CardBody>
                    <CardTitle tag="h5">IncluRUM</CardTitle>
                    <CardText>
                        Background: students, teacher, professors, and
                        the community to teach others about equity and values. To
                        strengthen the LGBBTQ+ community on campus, by giving:
                        services, consultation, moral support, group education, and
                        other necessary techniques to help students.

                    </CardText>
                    <CardText>Status: Recruiting
                    </CardText>
                    <CardText>Point of Contact: gustavo.cortina2@upr.edu</CardText>
                    <div className="btn-alignment">
                        <Button className="btn-style">Apply Now!</Button>
                    </div>
                </CardBody>
            </Card>
        </CardGroup>
    );
}

export default EngineeringPage;
