import "./teamMember.scss";
import { Contexts } from "../../contexts/contexts";
import { useContext } from "react";

const TeamMember = ({ memberInfo: m }) => {

const { setMemberMain } = useContext(Contexts);

  return (
    <a href="#member-info">
      <section className="teamMember" onClick={() => setMemberMain(m)}>
        <figure className="teamMember-top">
          <img
            src={m.image}
            alt={`${m.firstName} ${m.lastName} Profile Image`}
            title={`${m.firstName} ${m.lastName}`}
            loading="lazy"
          />
          <figcaption>
            <div className="textSRoboto bold">
              {m.firstName} {m.lastName} {m.isOwner ? "| Owner" : ""}
            </div>
          </figcaption>
        </figure>
      </section>
    </a>
  );
  
};

export default TeamMember;
