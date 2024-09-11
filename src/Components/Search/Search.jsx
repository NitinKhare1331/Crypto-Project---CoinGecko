import React, { useState } from 'react';
import useDebounce from '../../Hooks/useDebounce';
import { useQuery } from 'react-query';
import { fetchCoinName } from '../../Services/fetchCoinName';
import { useNavigate } from 'react-router-dom';

function SearchResult({ isLoading, data, handleResultClick }) {
    return (
        <div
        className="absolute left-0 right-0 mt-2 max-h-60 overflow-hidden overflow-y-auto rounded-md shadow-lg bg-white divide-y divide-black z-10"
        >
        {isLoading && <div className="text-gray-600 flex items-center justify-center">Loading...</div>}
        {data && data.map((coin) => (
            <div key={coin.id} className="text-black py-2 px-4 cursor-pointer" onClick={() => handleResultClick(coin.id)}>
            {coin.name}
            </div>
        ))}
        </div>
    );
}

const Search = ({ theme }) => {

    const navigate = useNavigate();

    const handleResultClick = (id) => {
        setSearch('');
        navigate(`/details/${id}`)
    }

    const [search, setSearch] = useState('');

    const debouncedSearchTerm = useDebounce(search, 300);

    const { data, isLoading } = useQuery(
        ['search', debouncedSearchTerm],
        () => fetchCoinName(debouncedSearchTerm),
        {
        enabled: !!debouncedSearchTerm,  // Only fetch if there's a search term
        }
    );

    const limitedData = data?.coins ? data.coins.slice(0, 10) : [];

    return (
        <div className="relative top-0 right-0 mr-3 z-50 md:hidden"> {/* This container must be relative */}
        <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter coin name...."
            className={`p-2 w-full focus:outline-none rounded-md placeholder:text-gray-400 text-blue-[#0D20BA] focus:ring ${theme === "light" ? "text-black" : "text-white"}`}
        />
        {search && <SearchResult isLoading={isLoading} data={limitedData} handleResultClick={handleResultClick}/>}
        </div>
    );
};

export default Search;
