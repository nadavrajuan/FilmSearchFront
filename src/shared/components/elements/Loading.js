import Lottie from "react-lottie-player";
import lottieJson from './loading.json'

export const Loading = () => {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 150, margin: 'auto'}}
    />
  );
};
