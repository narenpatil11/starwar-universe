import {FC, useCallback} from "react";
import {IFilm} from "../utils/swapi.ts";

export interface ITableBodyProps {
    rowsData: IFilm[];
    onRowSelected?: (item: IFilm) => {}
}

export const TableBody: FC<ITableBodyProps> = ({rowsData, onRowSelected}) => {
    const onRowClicked = useCallback(
        (rowData: IFilm) => {
            onRowSelected?.(rowData,)
        },
        [onRowSelected, rowsData]
    );

    return (
        <tbody>
        {
            rowsData?.map(data => (
                <tr id={data.episode_id} key={data.episode_id} onClick={() => onRowClicked(data)}>
                    <th scope="row">
                        {`Episode ${data.episode_id}`}
                    </th>
                    <td>
                        {data.title}
                    </td>
                    <td>
                        {new Date(data.release_date).toLocaleDateString().toString()}
                    </td>
                </tr>
            ))
        }
        </tbody>
    )
}
