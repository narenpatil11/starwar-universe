import {FC} from "react";

interface IHead {
    id: string,
    title: string,
}

export interface ITableHeadProps {
    heads: IHead[];
}

export const TableHead: FC<ITableHeadProps> = ({heads}) => {
    return (
        <thead>
        <tr>
            {heads.map((head) => <th key={head.id}>{head.title}</th>)}
        </tr>
        </thead>
    )
}
