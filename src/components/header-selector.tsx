import {Dispatch, SetStateAction} from "react";

interface HeaderSelectorProps {
    routeKey: number
    selected: boolean
    value: string
    setRoute: Dispatch<SetStateAction<number>>
}

export default function HeaderSelector({routeKey, selected, value, setRoute}:HeaderSelectorProps) {
    return <li onClick={() => setRoute(routeKey)}>
        {selected ?
            <div className="selected">●</div> :
            <a className="text">{value}</a>
        }
    </li>
}