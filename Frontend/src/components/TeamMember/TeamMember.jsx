import './teamMember.scss';
import { IoPhonePortrait } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const TeamMember = ({ memberInfo: m }) => {
    // const m = memberInfo;

   return (
     <section className="teamMember">
       <figure className="teamMember-top">
         <img
           src={m.image}
           alt={`${m.firstName} ${m.lastName} Profile Image`}
           title={`${m.firstName} ${m.lastName}`}
         />
         <figcaption>
           <div className="textSRoboto bold">
             {m.firstName} {m.lastName} {m.isOwner ? "| Owner" : ""}
           </div>
         </figcaption>
       </figure>

       <div className="teamMember-bottom">
         <div className="textMRoboto">{m.description}</div>
         <div className="teamMember-contactInfo">
           {m.cell && (
             <div className="icon-container">
               <IoPhonePortrait
                 className="iconStyles"
                 aria-label="Phone Icon"
               />
               <a
                 href={`tel:${m.cell}`}
                 aria-label={`Call ${m.firstName} ${m.lastName} at +${m.cell}`}
               >
                 +{m.cell}
               </a>
             </div>
           )}
           {m.email && (
             <div className="icon-container">
               <MdEmail className="iconStyles" aria-label="Email Icon" />{" "}
               <a
                 href={`mailto:${m.email}`}
                 aria-label={`Email ${m.firstName} ${m.lastName}`}
               >
                 {" "}
                 {m.email}
               </a>
             </div>
           )}
         </div>
       </div>
     </section>
   );
}

export default TeamMember