const defaultState = {
    inputValue: 'Writing Something',
    list: [
        '早8点开晨会,分配今天的开发工作',
        '早9点和项目经理作开发需求讨论会',
        '晚5:30对今日代码进行review',
        '早上4点起床,锻炼身体',
        '中午下班游泳一小时'
    ]
}
export default (state = defaultState,action) => {
    // console.log(state,action);
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
        newState.inputValue = action.value;
        return newState;
    }
    return state;
}