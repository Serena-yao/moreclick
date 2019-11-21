import mockdata from './data.json'
let mock={
    '/api/list'(){
        return mockdata
    }
}
export default mock