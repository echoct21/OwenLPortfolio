
interface size {
    count: number;
}

function Space({count}: {count: number}) {
    if(count === 1){
        return (<div className={"spacer page_object"}></div>)
    } else if(count === 2){
        return (
            <div className={"page_object spacer_page_override"}>
                <div className={"spacer"}></div>
                <div className={"spacer"}></div>
            </div>
        )
    }else if(count === 3){
        return (
            <div className={"page_object spacer_page_override"}>
                <div className={"spacer"}></div>
                <div className={"spacer"}></div>
                <div className={"spacer"}></div>
            </div>
        )
    } else {
        return null
    }

}

export default function Spacer ({count} : size) {
    return (
        <Space count={count}></Space>
    )
}