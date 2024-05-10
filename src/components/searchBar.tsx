import { Button } from "./ui/button";
import { Input } from "./ui/input";

type SearchBarProps = {
    placeholder: string;
    prompt: string;
}

export const SearchBar = (props: SearchBarProps) => {
    return (
        <div className="flex w-full max-w-sm items-center justify-center space-x-2">
            <Input type="text" placeholder={ props.placeholder } />
            <Button type="submit">Get { props.prompt }</Button>
        </div>
    )
}