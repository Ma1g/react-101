import OfficerProfile from "../OfficerProfile/OfficerProfile";
import css from "./OfficerList.module.css";

export default function OfficerList({ officers }) {
    return (
        <ul className={css.list}>
            {officers.map((officer) => (
            <li key={officer.id} className={css.item}>
                <OfficerProfile officer={officer} />
            </li>
            ))}
        </ul>
    );
}
