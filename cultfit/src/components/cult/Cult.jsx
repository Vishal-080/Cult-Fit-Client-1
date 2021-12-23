import { useEffect } from "react";
import { CultLower } from "../cult-LowerHalf/CultLower";
import { CultUpper } from "../cult-UpperHalf/CultUpper";

export const Cult = () => {

  useEffect(()=>{
    window.scroll({top:0,behavior:'smooth'})
})


  return (
    <>
      <CultUpper />
      <CultLower />
    </>
  );
};

export default Cult;
