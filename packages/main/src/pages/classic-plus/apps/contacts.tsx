import Content from "../../../layouts/layout-02/content";
import ContentHeader from "../../../layouts/layout-02/content-header";
import ContentBody from "../../../layouts/layout-02/content-body";
import Wrapper from "../../../containers/apps/contacts/wrapper";
import Sidebar from "../../../containers/apps/contacts/sidebar";
import Main from "../../../containers/apps/contacts/main";
import SEO from "../../../components/seo";

const Contacts = () => {
    return (
        <>
            <SEO />
            <Content>
                <ContentHeader />
                <ContentBody container={false} p={["0px", "0px"]}>
                    <Wrapper layout={2}>
                        <Sidebar />
                        <Main layout={2} />
                    </Wrapper>
                </ContentBody>
            </Content>
        </>
    );
};

export default Contacts;
