import TiarasLeftLeaf from "../TiarasLeftLeaf";
import TiarasRightLeaf from "../TiarasRightLeaf";

interface RowTitleProps {
    title: string;
}

function RowTitle({title}: RowTitleProps) {
    return (
        <div className='flex justify-center mt-20'>
            <div className='flex items-center'>
                <div className={`hidden ${title.length < 20 && 'md:inline'}`}>
                <TiarasLeftLeaf />
                </div>
                <h1 className={`text-h1 font-semibold text-rosa-200 mx-12`}>{title}</h1>
                <div className={`hidden ${title.length < 20 && 'md:inline'}`}>
                <TiarasRightLeaf />
                </div>
            </div>
        </div>
    )
}

export default RowTitle