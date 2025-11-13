import React, { useEffect, useRef, useState, useMemo, useCallback, memo } from 'react';
import { FaAngleDown } from "react-icons/fa6";

const Dropdown = memo(({
    data,
    selectedOption = { id: 0, name: '' },
    setSelectedOption,
    searchable = true,
    placeholder = '',
    chooseIndex = 0,
    optionALL = true,
    disabled = false,
    name = ''
}) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef(null);
    const scrollContainerRef = useRef(null);
    const [viewData, setViewData] = useState([]);

    const initData = useMemo(() => {
        if (optionALL) {
            return [{ id: 0, name: 'Tất cả' }, ...data];
        }
        return data;
    }, [data, optionALL]);

    useEffect(() => {
        if (chooseIndex > 0 && initData.length > 0) {
            setSelectedOption({ id: initData[chooseIndex - 1].id, name: initData[chooseIndex - 1].name });
        }
        setViewData(initData);
        setSearchTerm('');
    }, [chooseIndex, initData, setSelectedOption]);

    const toggleDropdown = useCallback(() => {
        setIsDropdownOpen(prev => !prev);
    }, []);

    const handleClick = useCallback((id, name) => {
        setSelectedOption({ id, name });
        setIsDropdownOpen(false);
        setSearchTerm('');
        setViewData(initData);
    }, [initData, setSelectedOption]);

    const handleClickOutside = useCallback((event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    }, []);

    const handleChange = useCallback((e) => {
        setSearchTerm(e.target.value);
        setIsDropdownOpen(true);
        if (e.target.value === '') {
            setViewData(initData);
        } else {
            const filteredData = initData.filter(item =>
                item.name.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setViewData(filteredData);
        }
    }, [initData]);

    useEffect(() => {
        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDropdownOpen, handleClickOutside]);

    // ✅ Auto scroll to selected item when dropdown opens
    useEffect(() => {
        if (isDropdownOpen && scrollContainerRef.current) {
            const selectedButton = scrollContainerRef.current.querySelector(
                `[data-id="${selectedOption.id}"]`
            );
            if (selectedButton) {
                selectedButton.scrollIntoView({
                    block: 'nearest',
                    behavior: 'instant',
                });
            }
        }
    }, [isDropdownOpen, selectedOption]);

    return (
        <div className='w-full h-full inline-block text-left' ref={dropdownRef}>
            <div className="relative inline-block w-full">
                <div className="relative">
                    <div className="absolute top-[-0.5rem] text-xs left-2 bg-white px-2 text-gray-400 select-none">{name}</div>
                    <button
                        className={`font-medium text-left flex items-center justify-between border select-none outline-none h-full w-full py-1 px-2 text-[#0C1844] group-hover:border-blue-200  ${disabled ? 'cursor-not-allowed bg-gray-200 text-gray-400' : 'cursor-pointer'}`}
                        onClick={toggleDropdown}
                        disabled={disabled}
                        type='button'
                        data-id={selectedOption.id}
                    >
                        {selectedOption && selectedOption.name ?
                            <div className="truncate">
                                {selectedOption.name}
                            </div> :
                            <div className='text-gray-400 font-normal'>
                                {placeholder}
                            </div>
                        }
                        <FaAngleDown className="h-5 w-5 text-gray-500 group-hover:text-blue-200" />
                    </button>
                </div>
                {isDropdownOpen && (
                    <div className="origin-top-right absolute left-0 mt-0 w-full max-h-96 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                        {searchable &&
                            <div className='p-2'>
                                <input
                                    className={`border outline-none h-full w-full py-1 px-2 text-[#0C1844] group-hover:border-blue-200`}
                                    value={searchTerm}
                                    onChange={handleChange}
                                    placeholder='Search'
                                    autoComplete='off'
                                    spellCheck={false}
                                />
                            </div>
                        }
                        <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {viewData.length === 0 ? (
                                <li>
                                    <button
                                        type='button'
                                        className="w-full text-left block px-4 py-2 text-sm text-[#0C1844] hover:bg-gray-100 select-none">
                                        None
                                    </button>
                                </li>
                            ) : (
                                <div className='overflow-y-auto max-h-64' ref={scrollContainerRef}>
                                    {viewData.map(item => (
                                        <li key={item.id}>
                                            <button
                                                type='button'
                                                data-id={item.id}
                                                className={`w-full text-left block px-4 py-2 text-sm select-none text-[#0C1844] hover:bg-[#667BC6] hover:text-white ${selectedOption.id === item.id ? 'bg-[#667BC6] text-white' : ''}`}
                                                onClick={() => handleClick(item.id, item.name)}
                                            >
                                                {item.name}
                                            </button>
                                        </li>
                                    ))}
                                </div>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
});

export default Dropdown;
