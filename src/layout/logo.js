/** @jsx jsx */
import { jsx } from '@emotion/core';


const Logo = ({logo, styles}) => {
    const defaultStyles = {
        width: '150px',
        height: '100px'
    }
    return (
        <div className="logo">
            <img
            src={logo}
            css={[defaultStyles, styles]}
            alt="logo"
            className="headerLogo"
            />
        </div>
    )
}

export default Logo