import {createContext, useState, ReactNode} from 'react';
import pages from "../pages";

interface IPage {
    produto: boolean;
    metodo: boolean;
    confirmacao: boolean;
    status: boolean;
}

interface PagesProviderProps {
    children: ReactNode;
}

interface IContextPages {
    page: IPage;
    update: (page: IPage) => void;
}

export const PageContext = createContext<IContextPages>({} as IContextPages);

export function PageProvider({ children } : PagesProviderProps) {
    const [page, setPage] = useState<IPage>({confirmacao: false, metodo: false, produto: false, status: false});

    function update(pages: IPage) {
        setPage(pages);
    }

    return (
        <PageContext.Provider value={{update, page}}>
            {children}
        </PageContext.Provider>
    )
}
