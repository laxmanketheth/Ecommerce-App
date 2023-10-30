import { css } from '@emotion/react'

//here we are creating a function for
//resposive design for different devices//

  const mobile = (props) =>{
    return css`
        @media only screen and (max-width:391px){
            ${props}
        }
        `
}
export default mobile;