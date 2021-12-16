import BeSpirited from "../cult-LowerHalf/BeSpirited/BeSpirited"
import QuickLinks from "../cult-LowerHalf/QuickLinks/QuickLinks"
import WorkoutGrid from "../cult-LowerHalf/WorkoutGrid/WorkoutGrid"
import { CultUpper } from "../cult-UpperHalf/CultUpper"

export const Cult = () => {

    return <>
        <CultUpper />
        <WorkoutGrid />
        <QuickLinks />
        <BeSpirited />
    </>
}