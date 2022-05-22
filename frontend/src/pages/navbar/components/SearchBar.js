import React, {useState} from 'react';

function SearchBar(props) {

    const [search_key , set_search_key] = useState(null);

    const handleSearchKey = () => {
        if (this.state.searchKey) {

                window.location.href = "/products?search=" + search_key;
        } else {
            window.location.reload();
        }
    };


    return (
        <>
            {/*search bar for responsive design */}
            <nav className={`navbar search-bar d-none`}>
                <div className="container-fluid">
                    <form className="form-inline mt-1 navbar-for-search-form-border w-100">
                        <div className="input-group">
                            <input
                                onChange={(e) => {set_search_key(e.target.value)}}
                                autoComplete="off"
                                type="text"
                                name="query"
                                id="query"
                                className="form-control"
                                placeholder="Search..."
                            />

                            <button
                                onClick={handleSearchKey}
                                className="btn btn-warning navbar-search-form-button"
                                type="button"
                                id="button-addon1"
                            >
                                <img width="23" src="/images/loupe.png"/>
                            </button>
                        </div>
                    </form>
                </div>
            </nav>
        </>
    );
}

export default SearchBar;