// 此action文件为定义微应用之间全局状态
// 引入qiankun的应用间通信方法initGlobalState
import {initGlobalState} from "qiankun";

const initialState: any = {
    token: "tokenVal",
};
const actions: any = initGlobalState(initialState); // 初始化state

// 定义一个获取state的方法下发到子应用
actions.getGlobalState = (key: string) => {
    // 有key，表示取globalState下的某个子级对象
    // 无key，表示取全部
    return key ? initialState[key] : initialState;
};

// 监听actions全局公共状态数据的变化
actions.onGlobalStateChange((state: any) => {
    Object.keys(state).forEach((data: any) => {
        initialState[data] = state[data];
    });
});
actions.setGlobalState(initialState);
export default actions;
