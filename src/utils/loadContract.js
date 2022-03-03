import contract from "@truffle/contract";

export const loadContract = async (name,provider) => {
    const contractFile = await fetch(`/build/${name}.json`);
    const convertContractTojson = await contractFile.json();
    
    const _myContract = contract(convertContractTojson);
    _myContract.setProvider(provider);

    let deployContract = null;

    try{
        deployContract = await _myContract.deployed();
    }catch(e){
        console.error(e, "You are in the wrong network")
    }
}