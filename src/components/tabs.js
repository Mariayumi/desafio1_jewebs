import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./tabs.css"

function NoAnimationExample(props) {
    return (
    <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
    >
        <Tab eventKey="pri" title="Primeiro">
            <div className="template row">
                <div className="foto col-4">
                    <img src={props.pessoa.logo} className="logo"/>
                </div>
                <div className=" col-4">
                    <h2>{props.pessoa.nome}</h2>
                    <h4>{props.pessoa.nomeEmpresa}</h4>
                    <h5>{props.pessoa.trabalho}</h5>
                    <h5>{props.pessoa.email}</h5>
                    <h6>{props.pessoa.telefone}</h6>
                    <h6>{props.pessoa.webSite}</h6>
                    <h6>{props.pessoa.endereco}</h6>
                </div>
                <div className=" col-4">
                <h6><a href={props.pessoa.twitter}>Twitter</a></h6>
                    <h6><a href={props.pessoa.instagram}>Instagram</a></h6>
                    <h6><a href={props.pessoa.facebook} >Facebook</a></h6>
                    <h6><a href={props.pessoa.linkedin}>Linkedin</a></h6>
                </div>
            </div>
        </Tab>
        <Tab eventKey="seg" title="Segundo">
        <div className="template row">
                <div className=" col-4">
                    <h2>{props.pessoa.nome}</h2>
                    <h4>{props.pessoa.nomeEmpresa}</h4>
                    <h5>{props.pessoa.trabalho}</h5>
                    <h5>{props.pessoa.email}</h5>
                    <h6>{props.pessoa.telefone}</h6>
                    <h6>{props.pessoa.webSite}</h6>
                    <h6>{props.pessoa.endereco}</h6>
                </div>
                <div className="foto col-4">
                    <img src={props.pessoa.logo} className="logo"/>
                </div>
                <div className=" col-4">
                <h6><a href={props.pessoa.twitter}>Twitter</a></h6>
                    <h6><a href={props.pessoa.instagram}>Instagram</a></h6>
                    <h6><a href={props.pessoa.facebook} >Facebook</a></h6>
                    <h6><a href={props.pessoa.linkedin}>Linkedin</a></h6>
                </div>
            </div>
        </Tab>
        <Tab eventKey="ter" title="Terceiro">
        <div className="template row">
                <div className=" col-4">
                    <h2>{props.pessoa.nome}</h2>
                    <h4>{props.pessoa.nomeEmpresa}</h4>
                    <h5>{props.pessoa.trabalho}</h5>
                    <h5>{props.pessoa.email}</h5>
                    <h6>{props.pessoa.telefone}</h6>
                    <h6>{props.pessoa.webSite}</h6>
                    <h6>{props.pessoa.endereco}</h6>
                </div>
                
                <div className=" col-4">
                    <h6><a href={props.pessoa.twitter}>Twitter</a></h6>
                    <h6><a href={props.pessoa.instagram}>Instagram</a></h6>
                    <h6><a href={props.pessoa.facebook} >Facebook</a></h6>
                    <h6><a href={props.pessoa.linkedin}>Linkedin</a></h6>
                </div>
                <div className="foto col-4">
                    <img src={props.pessoa.logo} className="logo"/>
                </div>
            </div>
        </Tab>
    </Tabs>
    );
}

export default NoAnimationExample;