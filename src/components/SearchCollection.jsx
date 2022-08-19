import {Select} from 'antd';
import {useMoralisDapp} from 'providers/MoralisDappProvider/MoralisDappProvider';
import { getCollectionsByChain } from 'helpers/collections';

function SelectCollection({setInputValue}){
    const {Option} = Select;
    const {chainId} = useMoralisDapp();
    const NFTCollections = getCollectionsByChain(chainId);
    function onChange(value){
        setInputValue(value);
    }
    return (
        <>
            <Select
                showSearch
                style={{ width: "1000px", marginLeft: "20px" }}
                placeholder = "Find a collection"
                optionFilterProp='children'
                onChange={onChange}
            >
                {NFTCollections && NFTCollections.map((collection, index) => 
                    <Option key={index} value={collection.address}>{collection.name}</Option>
                )}
            </Select>
        </>
    )
}

export default SelectCollection;