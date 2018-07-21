import Lottie from 'react-lottie'
import lottieApi from 'lottie-api/dist/lottie_api'

export default class LottieWithAnimationControl extends Lottie {
  play() {
    const animationAPI = lottieApi.createAnimationApi(this.anim);

    Object.keys(this.props.options.animationControl).forEach((property) => {
      const propertyPath = animationAPI.getKeyPath(property)
      const value = this.props.options.animationControl[property]
      animationAPI.addValueCallback(propertyPath, (currentValue) => {
        return value
      });
    })
  }

  playSegments() {
    this.anim.playSegments(this.props.segments, this.props.forceSegments);
  }
}
