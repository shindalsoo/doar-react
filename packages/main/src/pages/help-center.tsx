import { HRLine } from "@doar/components";
import Content from "../layouts/content";
import PageHeader from "../containers/help-center/page-header";
import RowOne from "../containers/help-center/row-one";
import RowTwo from "../containers/help-center/row-two";
import SEO from "../components/seo";

const HelpCenter = () => {
    return (
        <>
            <SEO />
            <Content borderBottomWidth="1px">
                <PageHeader />
            </Content>
            <Content mt={[null, null, null, "0px"]}>
                <RowOne />
                <HRLine mt="60px" mb="30px" />
                <RowTwo />
            </Content>
        </>
    );
};

export default HelpCenter;
