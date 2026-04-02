import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = () => (
  <ContentLoader 
    speed={2}
    width={265}
    height={520}
    viewBox="0 0 265 520"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="1" y="5" rx="29" ry="29" width="257" height="511" />
  </ContentLoader>
)

export default Skeleton;