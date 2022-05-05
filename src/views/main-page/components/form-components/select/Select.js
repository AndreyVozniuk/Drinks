import AsyncSelect from 'react-select/async'
import styles from './Select.module.scss'

const customStyles = {
  container: () => ({
    position: 'relative',
    width: '270px',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px 2px rgba(22, 54, 93, 0.11)',
    margin: '0 15px 0 0'
  }),
  control: (provided) => ({
    ...provided,
    boxSizing: 'border-box',
    borderRadius: '8px',
    boxShadow: 'none',
    '&:hover': {
      cursor: 'pointer'
    }
  }),
  menu: () => ({
    position: 'absolute',
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    borderRadius: '5px',
    marginTop: '8px',
    zIndex: '999',
  }),
  placeholder: (provided) => ({
    ...provided,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    fontSize: '16px',
    color: '#212121',
    lineHeight: '22px'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  input: (provided) => ({
    ...provided,
    opacity: '0'
  }),
  valueContainer: (provided) => ({
    ...provided,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    fontSize: '16px',
    color: '#212121',
    lineHeight: '22px',
    padding: '8px 0 8px 15px',
  }),
  singleValue: (provided) => ({
    ...provided,
    fontFamily: 'Open Sans'
  }),
  menuList: (provided) => ({
    ...provided,
    "::-webkit-scrollbar": {
      width: "4px",
      height: "0px",
    },
    "::-webkit-scrollbar-track": {
      background: "#f1f1f1"
    },
    "::-webkit-scrollbar-thumb": {
      background: "#888"
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555"
    },
    '&:hover': {
      cursor: 'pointer'
    }
  }),
  option: (provided) => ({
    ...provided,
    fontFamily: 'Open Sans',
    padding: '10px',
    fontWeight: '400',
    fontSize: '16px',
    color: '#212121',
    transition: '0.1s',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#FFF0E2',
      fontWeight: '700'
    }
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transition: 'all .4s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null
  })
}


function Select(props) {

  return (
    <div className={styles.container}>
      <AsyncSelect
        styles={{ ...customStyles }}
        cacheOptions
        defaultOptions
        {...props}/>
    </div>
  )
}

export default Select
