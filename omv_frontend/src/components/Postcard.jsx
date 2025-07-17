import React, { useRef, useState, useEffect } from 'react';
import Card from './Card'; 

function PostCard(props) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div ref={ref}>
      <Card
        username={props.username}
        image={props.image}
        description={props.description}
        addre={props.addre}
        visible={visible}
        buttonText={props.buttonText || "Explore More"} // Optional custom button text
      />
    </div>
  );
}

export default PostCard;
