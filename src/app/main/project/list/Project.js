import { Checkbox } from "@material-ui/core";
import Layout1 from "../../../layouts/layout1/Layout1";

function Projects(props) {
    return <Layout1>
        <div>
            <header>
                <h1>프로젝트 헤더</h1>
            </header>
            <Checkbox defaultChecked />
        </div>
    </Layout1>;
}
export default Projects;