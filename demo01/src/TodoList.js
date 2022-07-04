import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input,Button,List } from 'antd'
import store from './store'

export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state=store.getState();
        // console.log(this.state);
        this.changeInputValue= this.changeInputValue.bind(this);
        // this.storeChange = this.storeChange.bind(this);  //转变this指向
        // store.subscribe(this.storeChange); //订阅Redux的状态
    }

    render() {
        return (
            <div style={{margin:"10px"}}>
                <div>
                    <Input 
                        placeholder={this.state.inputValue}
                        style={{ width:"250px" ,marginRight:"10px"}}
                        onChange={this.changeInputValue}
                    />
                    <Button type="primary">增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item=>(<List.Item>{item}</List.Item>)}
                    />    
                </div>
            </div>
        );
    }
    changeInputValue(e){
        const action ={
            type:'changeinput',
            value:e.target.value
        }
        store.dispatch(action);
    }
    // storeChange(){
    //     this.setState(store.getState());
    // }
}
