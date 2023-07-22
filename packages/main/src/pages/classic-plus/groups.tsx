import { Row } from "@doar/components";
import Content from "../../layouts/layout-02/content";
import ContentHeader from "../../layouts/layout-02/content-header";
import ContentBody from "../../layouts/layout-02/content-body";
import PageHeader from "../../components/page-header";
import MainContent from "../../containers/groups/main";
import Sidebar from "../../containers/groups/sidebar";
import SEO from "../../components/seo";

const Groups = () => {
    return (
        <>
            <SEO />
            <Content>
                <ContentHeader />
                <ContentBody>
                    <PageHeader
                        prev={[
                            { text: "Profile", link: "/profile-view" },
                            { text: "Discover", link: "/" },
                        ]}
                        title="Groups"
                        wcText="Discover Groups"
                        pb="40px"
                    />
                    <Row>
                        <MainContent />
                        <Sidebar />
                    </Row>
                </ContentBody>
            </Content>
        </>
    );
};

export default Groups;
