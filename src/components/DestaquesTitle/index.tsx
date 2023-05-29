import DestaquesLeftLeaf from "../DestaquesLeftLeaf";
import DestaquesRightLeaf from "../DestaquesRightLeaf";

interface RowTitleProps {
    title: string;
}

function RowTitle({title}: RowTitleProps) {
    return (
        <div className='flex justify-center mt-20 items-center'>
            <div className='flex items-center'>
                <div className={`hidden ${title.length < 20 && 'md:inline'}`}>
                <DestaquesLeftLeaf />
                </div>
                <h1 className={`text-h1 font-semibold text-rosa-200 mx-12 pb-7`}>{title}</h1>
                <div className={`hidden ${title.length < 20 && 'md:inline'}`}>
                <DestaquesRightLeaf />
                </div>
            </div>
        </div>
    )
}

export default RowTitle