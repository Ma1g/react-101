import { FaBeer } from 'react-icons/fa';

import OfficerList from "../OfficerList/OfficerList"
import data from "../../officers.json"
import css from "./App.module.css";

export default function App() {

    return (
        <div className={css.container}>
            <h1>Available officers</h1>
            <FaBeer size="50px" className={css.icon}/>
            <OfficerList officers={data}/>
        </div>
            
    );
}

// const ProfileSection = ( {title, children} ) => {
//     return (
//         <section>
//             <h2>{title}</h2>
//             {children}
//         </section>
//     )
// }

//             <ProfileSection title="Рейтинг">
//                 <div>Komponent reitung korustyvatch</div>
//             </ProfileSection>
//             <ProfileSection title="Що це за очки досвіду та рівні?">
//                 <div>Komponent cpusky pointiv</div>
//             </ProfileSection>
//             <ProfileSection title="Як отримати більше очків досвіду?">
//                 <div>Dosvid</div>
//             </ProfileSection>