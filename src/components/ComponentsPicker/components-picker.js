import React from 'react';
import { useDispatch } from 'react-redux';

import { uuid } from '../../utils/uuid';
import { componentsActions } from '../../store/components';
import { AvailableComponents } from '../Components';

import './components-picker.css'

import PropTypes from 'prop-types';

export const ComponentsPicker = ({ lockedPicker }) => {
  const dispatch = useDispatch();
  const onComponentClick = layout => dispatch(componentsActions.addComponent({id: uuid(), layout}));

  return (
    <div className={"components-picker"}>
      {AvailableComponents.map(component => (
        <div
          className={lockedPicker ? "components-picker__component--disabled" : "components-picker__component"}
          key={component.layout}
          onClick={() => onComponentClick(component.layout)}
        >
          <span className="components-picker__component-label">
            {component.label}
          </span>
        </div>
      ))}
    </div>
  );
}

ComponentsPicker.propTypes = {
  lockedPicker: PropTypes.bool.isRequired,
};
