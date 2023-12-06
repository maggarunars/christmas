//importing the styles for each colour
import {Green, Pink, Blue, Yellow, Purple, Red} from './LightStyles'

//making sure we're able to have a varying height (different for page and footer)
type Props = {
	height:number
	
}

const Christmaslights = ({height}:Props) => {
	/* randomizing the colours */
	const colors =[ Green, Blue, Purple, Yellow, Pink, Red ]
	const Light = colors[Math.floor(Math.random()*colors.length)]
    return (
    	<>
			<Light
			/*randomising the positions and blinking times*/
			/*the "innerwidth" makes the christmas lights responsive because it checks the screen size and adjusts the lights accordingly*/
				$rLeft={Math.floor(Math.random()*window.innerWidth)}
				$rRight={height}
				$rTime={Math.random()*4+2}>
			</Light>
		</>
    )
}

export default Christmaslights;