import debounce from 'lodash.debounce';
import { ChangeEvent, FC, useMemo } from 'react';
import { withGreeting } from '../hoc/withGreeting';
import { GreetingComponentProps } from '../models/GreetingComponentProps';
import './Search.scss';

interface SearchInputProps extends GreetingComponentProps {
    onChange: (value: string) => void;
}

let SearchInput: FC<SearchInputProps> = ({ onChange }) => {
    const handleChange = useMemo(
        () => debounce((event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value), 400),
        []
    );

    return (
        <div className="posts-page__search-wrapper">
            <input className="search-input" onChange={handleChange} placeholder="Search by user data"></input>
        </div>
    );
};

SearchInput = withGreeting(SearchInput);

export default SearchInput;
