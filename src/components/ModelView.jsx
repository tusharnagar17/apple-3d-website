import { View } from "@react-three/drei";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationSize,
  size,
  item,
}) => {
  return <View index={index} id={gsapType}></View>;
};

export default ModelView;
