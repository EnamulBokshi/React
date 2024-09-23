import { Component } from "react";



class ClassBasedComponent extends Component{
    state = {
        showText:true,
        changeColor:true,
        count:0,
        changeText: false,
    }
    
    myToggoler = ()=> {
        const {showText,changeColor} = this.state
        this.setState({
            showText:!showText,
            changeColor:!changeColor
        });
    };
    handleCount = ()=>{
        this.setState({
            ...this.state,
            count:this.state.count+1
        })
    }
    componentDidMount(prevProps,prevState){
        if(prevState && prevState.count !== this.state.count && this.state.count === 10){
            this.setState({
                ...this.state,
                changeText: true
            })
        }
    }
    render(){
        const {showText,changeColor,count,changeText} = this.state
        console.log(changeText)
        return(
           <div>
            {/* {showText? <h4 className="font-mono" style={{color:changeColor?'red':'black'}}>Toggle me</h4> : null 
            } */}
            <button className="px-3 py-1 bg-black text-slate-50 border-sky-300 border-spacing-3 rounded-xl mt-2 capitalize hover:bg-slate-50 hover:text-black hover:border-black border-2 font-serif" onClick={this.myToggoler}>toggler</button>
            <br />
            <button className="px-3 py-1 bg-black text-slate-50 border-sky-300 border-spacing-3 rounded-xl mt-2 capitalize hover:bg-slate-50 hover:text-black hover:border-black border-2 font-serif " onClick={this.handleCount}>increase count</button>
           <br />
           {/* {count>10 ? <h2 className="text-red-500">Your count has increased at maximum level</h2> : null} */}
            <p style = {{color: changeText? "green":"black",font:changeText? '24px snas sarif':'12px'}}>Count is: {count}</p>
           </div>
        );
    }
}
export default ClassBasedComponent;