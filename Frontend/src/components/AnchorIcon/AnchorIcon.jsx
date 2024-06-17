import { MdOutlineAnchor } from "react-icons/md";
import './anchorIcon.scss'

const AnchorIcon = () => {
  return (
      <div className="iconContainer">
          <div className="line"></div>
          {/* <MdOutlineAnchor className="anchor-icon" /> */}
      {/* <img src="/rope.svg" alt="Rope Image" className="rope-image"/> */}
          <img src="/anchor.svg" alt="An Anchor Image" className="anchor-icon" />
          {/* <img src="/rope.svg" alt="Rope Image" className="rope-image" /> */}
          <div className="line"></div>
      </div>
  )
}

export default AnchorIcon