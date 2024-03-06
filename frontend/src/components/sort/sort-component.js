import "./sort-component.scss"
function SortComponent({sortItems}) {

    return (
        <select onChange={e=>sortItems(e.target.value)} className="clx_sort" defaultValue="DEFAULT">
            <option value="DEFAULT" disabled >Choose ...</option>
            <option value="price">price</option>
            <option value="data">data</option>
        </select>
    );
}

export default SortComponent;