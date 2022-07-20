import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./tabs.css";

function NoAnimationExample(props) {
    return (
    <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
    >
        <Tab eventKey="pri" title="Template 1" >
            <div className="space">
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
                    <div className=" col-4 links">
                        <h6><a href={props.pessoa.twitter}><img src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-3.png" className="rs"/> Twitter</a></h6>
                        <h6><a href={props.pessoa.instagram}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" className="rs"/> Instagram</a></h6>
                        <h6><a href={props.pessoa.facebook} ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png" className="rs"/> Facebook</a></h6>
                        <h6><a href={props.pessoa.linkedin}><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="rs"/> Linkedin</a></h6>
                    </div>
                </div>
            </div>
        </Tab>
        <Tab eventKey="seg" title="Template 2">
        <div class="space">
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
                    <div className=" col-4 links">
                        <h6><a href={props.pessoa.twitter}><img src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-3.png" className="rs"/> Twitter</a></h6>
                        <h6><a href={props.pessoa.instagram}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" className="rs"/> Instagram</a></h6>
                        <h6><a href={props.pessoa.facebook} ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png" className="rs"/> Facebook</a></h6>
                        <h6><a href={props.pessoa.linkedin}><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="rs"/> Linkedin</a></h6>
                    </div>
                </div>
        </div>
        </Tab>
        <Tab eventKey="ter" title="Template 3">
        <div class="space">
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
            
                    <div className=" col-4 links">
                        <h6><a href={props.pessoa.twitter}><img src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-3.png" className="rs"/> Twitter</a></h6>
                        <h6><a href={props.pessoa.instagram}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" className="rs"/> Instagram</a></h6>
                        <h6><a href={props.pessoa.facebook} ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png" className="rs"/> Facebook</a></h6>
                        <h6><a href={props.pessoa.linkedin}><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="rs"/> Linkedin</a></h6>
                    </div>
                    <div className="foto col-4">
                        <img src={props.pessoa.logo} className="logo"/>
                    </div>
                </div>
        </div>
        </Tab>
    </Tabs>
    );
}

export default NoAnimationExample;