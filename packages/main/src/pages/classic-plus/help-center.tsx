import { HRLine } from "@doar/components";
import Content from "../../layouts/layout-02/content";
import ContentHeader from "../../layouts/layout-02/content-header";
import ContentBody from "../../layouts/layout-02/content-body";
import PageHeader from "../../containers/help-center/page-header";
import RowOne from "../../containers/help-center/row-one";
import RowTwo from "../../containers/help-center/row-two";
import SEO from "../../components/seo";

const HelpCenter = () => {
    return (
        <>
            <SEO />
            <Content>
                <ContentHeader />
                <ContentBody>
                    <PageHeader pb="40px" />
                    <RowOne />
                    <HRLine mt="60px" mb="30px" />
                    <RowTwo />
                </ContentBody>
            </Content>
        </>
    );
};

export default HelpCenter;
