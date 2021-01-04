import { Checkbox, Typography } from "@material-ui/core";
import FusePageCarded from "../../../../core/FusePageCarded/FusePageCarded";
import Layout1 from "../../../layouts/layout1/Layout1";
import ProjectHeader from "./ProjectHeader";
import ProjectTable from "./ProjectTable";

function Projects(props) {
    return (<FusePageCarded
        classes={{
            content: 'flex',
            contentCard: 'overflow-hidden',
            header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
        }}
        header={<ProjectHeader />}
        content={<ProjectTable />}
        innerScroll
    />);

}
export default Projects;