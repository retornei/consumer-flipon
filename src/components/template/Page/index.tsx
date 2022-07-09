import { HTMLAttributes, Ref } from "react";
import { Page as PageStyled } from "./pageStyle";

interface PageProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title?: string;
}

const Page: React.FC<PageProps> = ({ title, children, ref, ...props }) => {
    return (
        <PageStyled {...props} ref={ref as Ref<HTMLDivElement>}>
            { title && <h1>{title}</h1> }
            { children }
        </PageStyled>
    )
}

Page.displayName = 'Page';

export default Page;
