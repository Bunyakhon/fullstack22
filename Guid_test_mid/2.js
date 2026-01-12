function updateInventory(currentInventory,newInventory){
    for(let i = 0; i<=newInventory.length-1;i++){
        let newItem = newInventory[i];
        let found = false;
        for(let j = 0; j<=currentInventory.length-1;j++){
            if(currentInventory[j].name === newItem.name){
                currentInventory[j].quantity += newItem.quantity;
                found = true;
                break
            }
        }
        if(!found){
            currentInventory.push(newItem);
        }
    }
    currentInventory.sort((a,b) => {
        return a.name.localeCompare(b.name);
    });
    return currentInventory;
}

const currentInventory = [
    {name: 'item1', quantity:10},
    {name: 'item2', quantity:5},
    {name: 'item3', quantity:8},
]
const newInventory = [
    {name: 'item1', quantity:5},
    {name: 'item4', quantity:7},
    {name: 'item2', quantity:10},
]
console.log(updateInventory(currentInventory,newInventory));