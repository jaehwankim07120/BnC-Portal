/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Item({ id, level }) {
  return <ItemBox level={level}>{id}</ItemBox>;
}
Item.propTypes = {
  id: PropType.string.isRequired,
  level: PropType.number.isRequired,
};

export default function Carousel({ items, activeInit }) {
  const [direction, setDirection] = useState('');
  const [active, setActive] = useState(activeInit);

  function generateItems() {
    const retItems = [];
    let level;

    for (let i = active - 2; i < active + 3; i += 1) {
      let index = i;

      if (i < 0) {
        index = items.length + i;
      } else if (i >= items.length) {
        index = i % items.length;
      }

      level = active - i;
      retItems.push(<Item key={items[index].label} id={items[index].label} level={level} />);
    }

    return <ItemBoxList>{retItems}</ItemBoxList>;
  }

  function moveLeft() {
    let newActive = active;
    newActive -= 1;

    setActive(newActive < 0 ? items.length - 1 : newActive);
    setDirection('left');
  }

  function moveRight() {
    const newActive = active;

    setActive((newActive + 1) % items.length);
    setDirection('right');
  }

  return (
    <CarouselBoxWrap>
      <CarouselBox id="carousel" className="noselect">
        <button type="button" className="arrow arrow-left" onClick={moveLeft}>
          <i className="fi-arrow-left" />
        </button>

        {generateItems()}

        <button type="button" className="arrow arrow-right" onClick={moveRight}>
          <i className="fi-arrow-right" />
        </button>
      </CarouselBox>
    </CarouselBoxWrap>
  );
}
Carousel.propTypes = {
  items: PropType.array.isRequired,
  activeInit: PropType.number,
};
Carousel.defaultProps = {
  activeInit: 0,
};

const Level_2_Height = '150px';
const Level_2_Width = '16%';
const Level_1_Height = '180px';
const Level_1_Width = '18%';
const Level_0_Height = '200px';
const Level_0_Width = '20%';

const Level_m2_Left = '80%';
const Level_m1_Left = '61%';
const Level_0_Left = '40%';
const Level_1_Right = '21%';
const Level_2_Right = '4%';

const Arrow_Width = '30px';
const Arrow_Height = '30px';
const Arrow_Left_Pos = '100%';

const CarouselBoxWrap = styled.div`
  position: relative;

  width: 100%;
  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};

  height: ${Level_0_Height};

  margin: 0 auto;
`;

const CarouselBox = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  .arrow {
    position: absolute;
    width: ${Arrow_Width};
    height: ${Arrow_Height};
    background-color: white;
    text-align: center;
    font-size: 25px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
    color: #228291;
    line-height: 30px;
    margin-top: 85px;
    z-index: 1000;
  }

  .arrow-right {
    left: ${Arrow_Left_Pos};
    transform: translate(-100%, 0);
  }

  .left-enter {
    opacity: 0;
    left: ${Level_2_Right} - ${Level_2_Width};
    height: ${Level_2_Height} - 30;
    width: ${Level_2_Width} - 20;
    line-height: ${Level_2_Height} - 30;
    margin-top: 40px;
  }

  .left-enter.left-enter-active {
    opacity: 1;
    left: ${Level_2_Right};
    height: ${Level_2_Height};
    width: ${Level_2_Width};
    line-height: ${Level_2_Height};
    margin-top: 25px;
    transition: left 1s, opacity 1s, height 1s, width 1s, margin-top 1s, line-height 1s;
  }

  .left-leave {
    opacity: 1;
    left: ${Level_m2_Left};
    height: ${Level_2_Height};
    width: ${Level_2_Width};
    line-height: ${Level_2_Height};
    margin-top: 25px;
  }

  .left-leave.left-leave-active {
    left: ${Level_m2_Left} + ${Level_2_Width} + 20;
    opacity: 0;
    height: ${Level_2_Height} - 30;
    line-height: 120px;
    margin-top: 40px;
    width: ${Level_2_Width} - 20;
    transition: left 1s, opacity 1s, height 1s, width 1s, margin-top 1s, line-height 1s;
  }

  .right-enter {
    opacity: 0;
    left: ${Level_m2_Left} + ${Level_2_Width};
    height: ${Level_2_Height} - 30;
    width: ${Level_2_Width} - 20;
    line-height: ${Level_2_Height} - 30;
    margin-top: 40px;
  }

  .right-enter.right-enter-active {
    left: ${Level_m2_Left};
    opacity: 1;
    height: ${Level_2_Height};
    margin-top: 25px;
    line-height: ${Level_2_Height};
    width: ${Level_2_Width};
    transition: left 1s, opacity 1s, height 1s, width 1s, margin-top 1s, line-height 1s;
  }

  .right-leave {
    left: ${Level_2_Right};
    height: ${Level_2_Height};
    opacity: 1;
    margin-top: 25px;
    line-height: ${Level_2_Height};
    width: ${Level_2_Width};
  }

  .right-leave.right-leave-active {
    left: ${Level_2_Right} - ${Level_2_Width};
    opacity: 0;
    height: ${Level_2_Height} - 30;
    width: ${Level_2_Width} - 20;
    line-height: ${Level_2_Height} - 30;
    margin-top: 40px;
    transition: left 1s, opacity 1s, height 1s, width 1s, margin-top 1s, line-height 1s;
  }

  .noselect {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

const ItemBoxList = styled.div``;

const ItemBox = styled.div`
  text-align: center;
  color: white;
  font-size: 40px;
  position: absolute;
  transition: height 1s, width 1s, left 1s, margin-top 1s, line-height 1s, background-color 1s;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
  border-radius: 15px;

  ${props => {
    const { level } = props;

    if (level === 0) {
      return `    
        height: ${Level_0_Height};
        width: ${Level_0_Width};
        line-height: ${Level_0_Height};
        left: ${Level_0_Left};
    `;
    }
    if (level === 1) {
      return `    
        height: ${Level_1_Height};
        width: ${Level_1_Width};
        line-height: ${Level_1_Height};
        margin-top: 10px;
        left: ${Level_1_Right};
    `;
    }
    if (level === 2) {
      return `    
        height: ${Level_2_Height};
        width: ${Level_2_Width};
        line-height: ${Level_2_Height};
        margin-top: 25px;
        left: ${Level_2_Right};
    `;
    }
    if (level === -1) {
      return `    
        height: ${Level_1_Height};
        width: ${Level_1_Width};
        line-height: ${Level_1_Height};
        left: ${Level_m1_Left};
        margin-top: 10px;
    `;
    }
    if (level === -2) {
      return `    
        height: ${Level_2_Height};
        width: ${Level_2_Width};
        line-height: ${Level_2_Height};
        left: ${Level_m2_Left};
        margin-top: 25px;
    `;
    }
    return '';
  }};
`;
