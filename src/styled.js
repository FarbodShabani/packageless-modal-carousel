import styled from 'styled-components';



// Background components
export const ModalBackground = styled.div`
  background-color: rgba(0,0,0,0.4);
  position: absolute; 
  top: 0;
  width: 100vw; 
  height: 100vh; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  `


// boundary for modal
export const ModalBoundary = styled.div`
  width: ${({ modalWidth }) => modalWidth && (modalWidth)}px; /* the width boundary must be as same as every modal slide*/
  height: ${({ modalHeight }) => modalHeight && (modalHeight)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  overflow-x: hidden;
  /* the max width must be as same as the width of modal ModalBoundary*/
  @media screen and (max-width: 300px) {
  & {
    width: 100vw;
    height: 100vh;
  }
}
  `;

//Container that contains all the modal pages 
//This container contains every slide you gonna use in your modal 
export const ModalPagesContainer = styled.div`
  min-width: ${({ modalWidth }) => modalWidth && (modalWidth)}px; /* The width must be total width of all the slide you gonna use */
  height: ${({ modalHeight }) => modalHeight && (modalHeight)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  /*here is how to control carousel movement*/
  margin: 0px 0px 0px -${({ marginLeft }) => marginLeft ? (marginLeft) : "0"}px; /*this how we control the place of the modal*/
  transition: margin 1s; /*this how you control the animation of carousel when it's changing steps */
  `;

//Modal slides
export const ModalSlide = styled.div`
  width: ${({ width }) => width && (width)}px;
  height: ${({ height }) => height && (height)}px; /* in this scenario the total height of slide must be as same as modal height*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;

// modal buttons container
export const ButtonContainer = styled.span`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  `;

//modal Buttons
export const ModalButton = styled.button`
  background-color: violet-blue;
  border-radius: 15;
  margin: auto;
  `;