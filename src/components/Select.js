import React, { useState, useEffect } from 'react'
import './select.css'


const Select = (props) => {
    const [expand, setExpand] = useState(false)
    const [value, setValue] = useState("")

    const [dropdownList, setDropdownList] = useState(props.data)

    const handleExpand = () => {
        setExpand(!expand)
        setDropdownList(props.data)
    }
    const handleSelect = (item) => {
        setValue(item.label)
        setExpand(!expand)
    }
    const handleSearch = (e) => {
        let serachText = e.target.value;
        setValue(serachText)
        let filterArray = props.data.filter((item) => {
            return item.label.includes(serachText)
        })
        setDropdownList(filterArray)
        setExpand(true)
    }

    const handleMultiSelect = (e) => {
        console.log(e.target.checked);
    }

    // useEffect(() => {

    //     setDropdownList(props.data)

    // }, [])


    return (
        <div className='drop-container'>
            <div className='dropdown'>
                <div className='drop-inputfields'>
                    <input value={value} onChange={handleSearch} type="text" />
                    <span className='drop-trigger' onClick={handleExpand}>{expand ? "-" : "+"}</span>
                </div>
                {expand &&
                    <div className='drop-list' style={{ display: "flex", flexDirection: "column" }}>
                        {dropdownList.map((item) => {
                            if (item.label === value) {

                                return <span className='drop-list-item selected' key={item.id} onClick={() => handleSelect(item)} >
                                    {item.label}</span>
                            } else {
                                return <span className='drop-list-item' key={item.id} onClick={() => handleSelect(item)}>
                                    {/* <p style={{ width: "1rem", height: "1rem" }}>
                                        <input style={{ width: "1rem", height: "1rem" }} onChange={handleMultiSelect} type="checkbox" />
                                    </p> */}
                                    <p >{item.label}</p>
                                </span>

                            }
                        })}
                    </div>}
            </div>
        </div>
    )
}

export default Select