import React from 'react'
import Select from 'react-select'

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px solid pink',
    color: state.isSelected ? 'red' : 'white',
    background: state.isFocused ? '#2f4f4f' : '#333',
    //background: '#333',
    padding: 20,
    //option--is-focused': isFocused,
  }),
  control: (provided) => ({
    // none of react-select's styles are passed to <Control />
    //width: 200,
    ...provided,
    background: '#333',
    color: 'white'
  }),
  input: (provided) => ({
    // none of react-select's styles are passed to <Control />
    //width: 200,
    ...provided,
    //background: 'yellow',
    color: 'white'
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    const color = 'white';
    //const background = 'yellow';
    //const background = 'yellow';

    return { ...provided, opacity,color};
  }
}


const createList = (list)=>{
  let options = []
  list.map((d,index)=>{
    options.push({value :d, label : d})
  })
  return options;
}


const ListCursos = React.forwardRef((props,ref)=>{
    return(
      <div className = "cont-menu">
        <Select //ref = {ref} 
                styles={customStyles} 
                options = {createList(props.listOfNames)}
                onChange = {props.handleInput}
                >        
        </Select>
      </div>
    )
})
export default ListCursos;
/*
<select id = "lista-cursos" size="10" >
                  { 
                    props.listOfNames.map((d,index)=>{
                          if(index == 0){
                            return(
                                <option selected = "selected">{d}</option>
                              )
                          }
                          return(
                            <option >{d}</option>
                          )
                      })
                  }
        </select>
        */