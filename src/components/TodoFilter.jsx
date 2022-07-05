import React from 'react'
import { connect } from 'react-redux';
import { setFilterAction } from './../redux/actions/filterActions';
import { filterSelector } from './../redux/store/filterSelector';


export const TodoFilter = ({value,onChange}) => {
  return (
    <div>
        <button disabled={value===null} onClick={()=>onChange(null)}>Aucun filtre</button>
        <button disabled={value===true}  onClick={()=>onChange(true)}>Complété</button>
        <button disabled={value===false}  onClick={()=>onChange(false)}>A Faire</button>
    </div>
  )
}

{/* 39 MIN 20S */}
const mapStateToProps = (state) => ({ value: filterSelector(state) })
function mapDispatchToProps(dispatch){
  return {
    onChange: value =>dispatch(setFilterAction(value))
  }
}
export const TodoFilterStore = connect(mapStateToProps,mapDispatchToProps)(TodoFilter)