import AcessoriosLeftLeaf from "../AcessoriosLeftLeaf";
import AcessoriosRightLeaf from "../AcessoriosRightLeaf";

interface RowTitleProps {
    title: string;
}

function RowTitle({title}: RowTitleProps) {
    return (
        <div className='flex justify-center mt-20'>
            <div className='flex items-center'>
                <div className={`hidden ${title.length < 20 && 'md:inline'}`}>
                <AcessoriosLeftLeaf />
                </div>
                <h1 className={`text-h1 font-semibold text-rosa-200 mx-12 whitespace-nowrap`}>{title}</h1>
                <div className={`hidden ${title.length < 20 && 'md:inline'}`}>
                <AcessoriosRightLeaf />
                </div>
            </div>
        </div>
    )
}

export default RowTitle