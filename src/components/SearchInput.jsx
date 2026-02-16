import { FiSearch } from "react-icons/fi";
import { FaClockRotateLeft } from "react-icons/fa6";
import { useSearch } from "../hooks/useSearch";
import { useNavigate } from "react-router-dom";



export default function SearchInput() {
    const { query, setQuery, show, setShow, filtered } = useSearch();
    const navigate = useNavigate();

    return (
        <div className="relative w-[600px]">

            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setShow(true)}
                onBlur={() => setTimeout(() => setShow(false), 150)}
                className="w-full pl-12 pr-4 py-3 rounded-full shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {show && filtered.length > 0 && (
                <div className="absolute mt-2 w-full bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden">
                    {filtered.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setQuery(item);
                                setShow(false);
                                navigate(`/${item.toLowerCase()}`);
                            }}
                            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer text-violet-700"
                        >
                            <FaClockRotateLeft className="text-gray-400" />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}

