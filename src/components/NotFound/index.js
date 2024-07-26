import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeadline,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
      alt="not found"
    />
    <NotFoundHeadline>Page Not Found</NotFoundHeadline>
    <NotFoundDescription>
      We are sorry, the page you requested could not be found.
    </NotFoundDescription>
  </NotFoundContainer>
)

export default NotFound
