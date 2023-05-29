import DocesLeftLeaf from "../DocesLeftLeaf";
import DocesRightLeaf from "../DocesRightLeaf";

interface RowTitleProps {
    title: string;
}

function RowTitle({title}: RowTitleProps) {
    return (
        <div className='flex justify-center mt-20'>
            <div className='flex items-center'>
                <div className={`hidden ${title.length < 20 && 'md:inline'}`}>
                <DocesLeftLeaf />
                </div>
                <h1 className={`text-h1 font-semibold text-rosa-200 mx-12`}>{title}</h1>
                <div className={`hidden ${title.length < 20 && 'md:inline'}`}>
                <DocesRightLeaf />
                </div>
            </div>
        </div>
    )
}

export default RowTitle