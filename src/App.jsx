import { useState } from 'react';
import { ModalBackground, ModalBoundary, ModalPagesContainer, ModalSlide, ModalButton, ButtonContainer } from './styled';

const slideArrays = ["firstPage", "secondPage", "thirdPage", "fourthPage"]

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const dimensions = {
    width: 300,
    height: 400
  }
  const numberOfPages = 4;
  const changePage = (next) => {
    if (next) {
      setCurrentPage((pervState) => pervState + 1)
    } else {
      setCurrentPage((pervState) => pervState - 1)
    }
  }
  return (
    <ModalBackground>
      <ModalBoundary
        modalWidth={dimensions.width}
        modalHeight={dimensions.height}
      >
        <ModalPagesContainer modalWidth={dimensions.width * numberOfPages} modalHeight={dimensions.height} marginLeft={dimensions.width * currentPage}>
          {slideArrays.map((pageTitle, index) => (
            <ModalSlide width={dimensions.width} height={dimensions.height}>
              {pageTitle}
              <ButtonContainer>
                {index > 0 && (
                  <ModalButton onClick={() => changePage(false)}>
                    previous page
                  </ModalButton>
                )}
                {index < slideArrays.length - 1 && (
                  <ModalButton onClick={() => changePage(true)}>
                    next page
                  </ModalButton>)}
              </ButtonContainer>
            </ModalSlide>
          ))}
        </ModalPagesContainer>
      </ModalBoundary>
    </ModalBackground>
  )
}
