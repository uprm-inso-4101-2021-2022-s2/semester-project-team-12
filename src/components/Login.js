import { Button, Divider, Form, Grid, Header, Modal, Placeholder, Segment } from 'semantic-ui-react';


function LoginPage(){

    return (
        <div style={{ padding: '40px', margin: 'auto', width:'800px', paddingTop:'10%', backgroundColor:'lightgray'}}>

            <Modal
                centered={true}
                size="tiny"
            >
                <Modal.Header>Signup</Modal.Header>
                <Modal.Content>
                    <Modal.Description> <br />By signing up, you agree to the Terms and Conditions of ARRES </Modal.Description>
                </Modal.Content>
            </Modal>
            <div style={{ padding: '50px', margin: 'auto' }}>
                <Segment placeholder>
                    <Grid columns={2} padded relaxed='very' stackable verticalAlign='middle'>
                        <Grid.Column>
                            <Form>
                                <Form.Input
                                    icon='user'
                                    iconPosition='left'
                                    label='Username'
                                    placeholder='Username'
                                />
                                <Form.Input
                                    icon='lock'
                                    iconPosition='left'
                                    label='Password'
                                    type='password'
                                />

                            </Form>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle'>
                            <Button content='Sign up' icon='signup' size='big'/>
                        </Grid.Column>
                    </Grid>

                    <Divider vertical>Or</Divider>
                </Segment>
            </div>
        </div>
    )
}
export default LoginPage;
