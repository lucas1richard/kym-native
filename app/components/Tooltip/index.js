import styled from 'styled-components';

const Tooltip = styled.div`
  position: absolute;
  background: white;
  padding: 1rem;
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.mediumGray};
  bottom: ${(props) => !props.fromBelow && 'calc(100% + 15px)'};
  top: ${(props) => props.fromBelow && 'calc(100% + 15px)'};
  right: -1rem;
  box-shadow: 4px 14px 30px 0 rgba(0,0,0,0.1);
  min-width: ${(props) => props.minWidth};
  font-size: 0.75rem;
  text-align: left;
  ${''/* transform: translate3d(0, 0, 0); */}
  ${''/* transition: opacity 0.5s; */}
  z-index: 150;
  &:before, &:after {
    content: ' ';
    position: absolute;
    border-left: solid transparent;
    border-right: solid transparent;
  }
  &:after {
    content: ' ';
    border-top: ${(props) => !props.fromBelow && 'solid white'};
    border-bottom: ${(props) => props.fromBelow && 'solid white'};
    border-width: 7px;
    bottom: ${(props) => !props.fromBelow && '-7px'};
    top: ${(props) => props.fromBelow && '-7px'};
    right: ${(props) => props.right};
  }
  &:before {
    content: ' ';
    border-top: ${(props) => !props.fromBelow && `solid ${props.theme.mediumGray}`};
    border-bottom: ${(props) => props.fromBelow && `solid ${props.theme.mediumGray}`};
    border-width: 8px;
    bottom: ${(props) => !props.fromBelow && '-8px'};
    top: ${(props) => props.fromBelow && '-8px'};
    right: calc(${(props) => props.right} - 1px);
  }
`;

export default Tooltip;
