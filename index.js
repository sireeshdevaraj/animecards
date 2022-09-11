
const Axios=require("axios")
async function getcard(){
    let x = Math.floor((Math.random() * 100000) + 1);
    return await Axios.get(`https://kitsu.io/api/edge/characters/${x}`).then(data=> {return data.data})

}


module.exports=getcard();
