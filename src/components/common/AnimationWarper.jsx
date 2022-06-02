import { useEffect, useState } from 'react';

const AnimationWarper = ({
  children,
  show,
  showAnimation,
  hideAnimation,
}) => {
  const [shouldRender, setRender] = useState(show);
  useEffect(() => {
    if (show) setRender(true);
  }, [show]);
  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };
  const animationClass = show ? showAnimation : hideAnimation;
  return (
    shouldRender && (
      <div className={animationClass} onAnimationEnd={onAnimationEnd}>
        {children}
      </div>
    )
  );
};

export default AnimationWarper;
