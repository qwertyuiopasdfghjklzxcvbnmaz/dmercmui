// export default class ExecuteArgs{
//     constructor(component, endPoint, method, postedData){
//         this.component = component;
//         this.endPoint = endPoint;
//         this.method = method;
//         this.postedData = postedData;
//     }
// }

interface ExecuteArgs {
    component: string
    endPoint: string,
    method: 'GET' | 'POST',
    postedData?: any
}

const executeArgs = (component: string, endPoint: string, method: 'GET' | 'POST', postedData?: any): ExecuteArgs => ({
    component,
    endPoint,
    method,
    postedData
})

export default executeArgs;